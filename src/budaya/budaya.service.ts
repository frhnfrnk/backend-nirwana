// src/budaya/budaya.service.ts
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Budaya } from './schema/budaya.schema';
import { CreateBudayaDto, UpdateBudayaDto } from './dto/budaya.dto';

@Injectable()
export class BudayaService {
  constructor(@InjectModel(Budaya.name) private budayaModel: Model<Budaya>) {}

  async create(createBudayaDto: CreateBudayaDto): Promise<Budaya> {
    const createdBudaya = new this.budayaModel(createBudayaDto);
    return createdBudaya.save();
  }

  async findAll(): Promise<Budaya[]> {
    return this.budayaModel.find().populate('desa').exec();
  }

  async findOne(id: string): Promise<Budaya> {
    const budaya = await this.budayaModel.findById(id).populate('desa').exec();
    if (!budaya) {
      throw new NotFoundException(`Budaya with ID "${id}" not found`);
    }
    return budaya;
  }

  async update(id: string, updateBudayaDto: UpdateBudayaDto): Promise<Budaya> {
    const updatedBudaya = await this.budayaModel
      .findByIdAndUpdate(id, updateBudayaDto, { new: true })
      .populate('desa')
      .exec();
    if (!updatedBudaya) {
      throw new NotFoundException(`Budaya with ID "${id}" not found`);
    }
    return updatedBudaya;
  }

  async remove(id: string): Promise<void> {
    const result = await this.budayaModel.findByIdAndDelete(id).exec();
    if (!result) {
      throw new NotFoundException(`Budaya with ID "${id}" not found`);
    }
  }
}
