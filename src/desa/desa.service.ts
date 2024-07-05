// src/desa/desa.service.ts
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Desa } from './schema/desa.schema';
import { CreateDesaDto, UpdateDesaDto } from './dto/desa.dto';

@Injectable()
export class DesaService {
  constructor(@InjectModel(Desa.name) private desaModel: Model<Desa>) {}

  async create(createDesaDto: CreateDesaDto): Promise<Desa> {
    const createdDesa = new this.desaModel(createDesaDto);
    return createdDesa.save();
  }

  async findAll(): Promise<Desa[]> {
    return this.desaModel.find().exec();
  }

  async findOne(id: string): Promise<Desa> {
    const desa = await this.desaModel.findById(id).exec();
    if (!desa) {
      throw new NotFoundException(`Desa with ID "${id}" not found`);
    }
    return desa;
  }

  async update(id: string, updateDesaDto: UpdateDesaDto): Promise<Desa> {
    const updatedDesa = await this.desaModel
      .findByIdAndUpdate(id, updateDesaDto, { new: true })
      .exec();
    if (!updatedDesa) {
      throw new NotFoundException(`Desa with ID "${id}" not found`);
    }
    return updatedDesa;
  }

  async remove(id: string): Promise<void> {
    const result = await this.desaModel.findByIdAndDelete(id).exec();
    if (!result) {
      throw new NotFoundException(`Desa with ID "${id}" not found`);
    }
  }
}
