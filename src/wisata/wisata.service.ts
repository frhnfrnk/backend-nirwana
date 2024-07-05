// src/wisata/wisata.service.ts
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Wisata } from './schemas/wisata.schema';
import { CreateWisataDto } from './dto/create-wisata.dto';
import { UpdateWisataDto } from './dto/update-wisata.dto';

@Injectable()
export class WisataService {
  constructor(@InjectModel(Wisata.name) private wisataModel: Model<Wisata>) {}

  async create(createWisataDto: CreateWisataDto): Promise<Wisata> {
    const createdWisata = new this.wisataModel(createWisataDto);
    return createdWisata.save();
  }

  async findAll(): Promise<Wisata[]> {
    return this.wisataModel.find().populate('desa').exec();
  }

  async findOne(id: string): Promise<Wisata> {
    const wisata = await this.wisataModel.findById(id).populate('desa').exec();
    if (!wisata) {
      throw new NotFoundException(`Wisata with ID "${id}" not found`);
    }
    return wisata;
  }

  async update(id: string, updateWisataDto: UpdateWisataDto): Promise<Wisata> {
    const updatedWisata = await this.wisataModel
      .findByIdAndUpdate(id, updateWisataDto, { new: true })
      .populate('desa')
      .exec();
    if (!updatedWisata) {
      throw new NotFoundException(`Wisata with ID "${id}" not found`);
    }
    return updatedWisata;
  }

  async remove(id: string): Promise<void> {
    const result = await this.wisataModel.findByIdAndDelete(id).exec();
    if (!result) {
      throw new NotFoundException(`Wisata with ID "${id}" not found`);
    }
  }
}
