import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Peternakan } from './schemas/peternakan.schema';
import { Model } from 'mongoose';
import { CreatePeternakanDto } from './dto/create-peternakan.dto';

@Injectable()
export class PeternakanService {
  constructor(
    @InjectModel(Peternakan.name) private peternakanModel: Model<Peternakan>,
  ) {}

  async create(createPeternakanDto: CreatePeternakanDto): Promise<Peternakan> {
    const createdPeternakan = new this.peternakanModel(createPeternakanDto);
    return createdPeternakan.save();
  }

  async findAll(): Promise<Peternakan[]> {
    return this.peternakanModel.find().populate('desa').exec();
  }

  async findOne(id: string): Promise<Peternakan> {
    const wisata = await this.peternakanModel
      .findById(id)
      .populate('desa')
      .exec();
    if (!wisata) {
      throw new NotFoundException(`Wisata with ID "${id}" not found`);
    }
    return wisata;
  }
}
