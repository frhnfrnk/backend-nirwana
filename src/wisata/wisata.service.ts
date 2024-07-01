import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Wisata } from './schemas/wisata.schema';
import { CreateWisataDto } from './dto/create-wisata.dto';
import { UpdateWisataDto } from './dto/update-wisata.dto';

@Injectable()
export class WisataService {
  constructor(
    @InjectModel(Wisata.name) private readonly wisataModel: Model<Wisata>,
  ) {}

  async create(createWisataDto: CreateWisataDto): Promise<Wisata> {
    const wisata = new this.wisataModel(createWisataDto);
    return wisata.save();
  }

  async findAll(): Promise<Wisata[]> {
    return this.wisataModel.find().exec();
  }

  async findOne(id: string): Promise<Wisata> {
    const wisata = await this.wisataModel.findById(id).exec();
    if (!wisata) {
      throw new NotFoundException(`wisata with ID "${id}" not found`);
    }
    return wisata;
  }

  async update(id: string, updateWisataDto: UpdateWisataDto): Promise<Wisata> {
    const existingWisata = await this.wisataModel
      .findByIdAndUpdate(id, updateWisataDto, { new: true })
      .exec();
    if (!existingWisata) {
      throw new NotFoundException(`UMKM with ID "${id}" not found`);
    }
    return existingWisata;
  }

  async remove(id: string): Promise<void> {
    const result = await this.wisataModel.findByIdAndDelete(id).exec();
    if (!result) {
      throw new NotFoundException(`wisata with ID "${id}" not found`);
    }
  }
}
