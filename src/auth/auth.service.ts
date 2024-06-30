// src/auth/auth.service.ts
import {
  ConflictException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Admin } from './schemas/admin.schema';
import { LoginDto } from './dto/login.dto';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(
    @InjectModel(Admin.name) private adminModel: Model<Admin>,
    private jwtService: JwtService,
  ) {}

  async validateUser(username: string, password: string): Promise<any> {
    const admin = await this.adminModel.findOne({ username });
    if (admin && bcrypt.compareSync(password, admin.password)) {
      const { password, ...result } = admin;
      return result;
    }
    return null;
  }

  async login(loginDto: LoginDto) {
    const admin = await this.validateUser(loginDto.username, loginDto.password);
    if (!admin) {
      throw new UnauthorizedException();
    }
    const payload = { username: admin.username, sub: admin._id };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }

  async register(username: string, password: string): Promise<any> {
    const hashedPassword = await bcrypt.hash(password, 10); // Menggunakan bcrypt untuk meng-hash password
    try {
      const user = await this.adminModel.create({
        username,
        password: hashedPassword,
      });
      const { password, ...result } = user;
      return result;
    } catch (error) {
      throw new ConflictException('Username sudah digunakan');
    }
  }
}
