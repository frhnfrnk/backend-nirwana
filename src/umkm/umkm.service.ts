import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Umkm } from './schemas/umkm.schema';
import { CreateUmkmDto } from './dto/create-umkm.dto';
import { UpdateUmkmDto } from './dto/update-umkm.dto';

@Injectable()
export class UmkmService {
  constructor(
    @InjectModel(Umkm.name) private readonly umkmModel: Model<Umkm>,
  ) {}

  async create(createUmkmDto: CreateUmkmDto): Promise<Umkm> {
    const umkm = new this.umkmModel(createUmkmDto);
    return umkm.save();
  }

  async findAll(): Promise<Umkm[]> {
    return this.umkmModel.find().exec();
  }

  async findOne(id: string): Promise<Umkm> {
    const umkm = await this.umkmModel.findById(id).exec();
    if (!umkm) {
      throw new NotFoundException(`UMKM with ID "${id}" not found`);
    }
    return umkm;
  }

  async update(id: string, updateUmkmDto: UpdateUmkmDto): Promise<Umkm> {
    const existingUmkm = await this.umkmModel
      .findByIdAndUpdate(id, updateUmkmDto, { new: true })
      .exec();
    if (!existingUmkm) {
      throw new NotFoundException(`UMKM with ID "${id}" not found`);
    }
    return existingUmkm;
  }

  async remove(id: string): Promise<void> {
    const result = await this.umkmModel.findByIdAndDelete(id).exec();
    if (!result) {
      throw new NotFoundException(`UMKM with ID "${id}" not found`);
    }
  }
}
