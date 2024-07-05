// src/umkm/umkm.service.ts
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Umkm } from './schemas/umkm.schema';
import { CreateUmkmDto } from './dto/create-umkm.dto';
import { UpdateUmkmDto } from './dto/update-umkm.dto';

@Injectable()
export class UmkmService {
  constructor(@InjectModel(Umkm.name) private umkmModel: Model<Umkm>) {}

  async create(createUmkmDto: CreateUmkmDto): Promise<Umkm> {
    const createdUmkm = new this.umkmModel(createUmkmDto);
    return createdUmkm.save();
  }

  async findAll(): Promise<Umkm[]> {
    return this.umkmModel.find().populate('desa').exec();
  }

  async findOne(id: string): Promise<Umkm> {
    const umkm = await this.umkmModel.findById(id).populate('desa').exec();
    if (!umkm) {
      throw new NotFoundException(`Umkm with ID "${id}" not found`);
    }
    return umkm;
  }

  async update(id: string, updateUmkmDto: UpdateUmkmDto): Promise<Umkm> {
    const updatedUmkm = await this.umkmModel
      .findByIdAndUpdate(id, updateUmkmDto, { new: true })
      .populate('desa')
      .exec();
    if (!updatedUmkm) {
      throw new NotFoundException(`Umkm with ID "${id}" not found`);
    }
    return updatedUmkm;
  }

  async remove(id: string): Promise<void> {
    const result = await this.umkmModel.findByIdAndDelete(id).exec();
    if (!result) {
      throw new NotFoundException(`Umkm with ID "${id}" not found`);
    }
  }
}
