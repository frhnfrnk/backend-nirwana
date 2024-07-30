import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Peternakan } from './schemas/peternakan.schema';
import { Model } from 'mongoose';
import { CreatePeternakanDto } from './dto/create-peternakan.dto';
import axios from 'axios';
import { UpdatePeternakanDto } from './dto/update-peternakan.dto';

@Injectable()
export class PeternakanService {
  constructor(
    @InjectModel(Peternakan.name) private peternakanModel: Model<Peternakan>,
  ) {}

  private readonly locationIQApiKey = process.env.LOCATIONIQ_API_KEY;

  async create(createPeternakanDto: CreatePeternakanDto): Promise<Peternakan> {
    const locationData = await this.reverseGeocode(
      createPeternakanDto.latitude,
      createPeternakanDto.longitude,
    );

    const peternakan = {
      ...createPeternakanDto,
      address: locationData.display_name,
      desa: locationData.address.village,
    };

    const createdPeternakan = new this.peternakanModel(peternakan);
    return createdPeternakan.save();
  }

  async reverseGeocode(lat: number, lon: number): Promise<any> {
    const url = `https://us1.locationiq.com/v1/reverse.php?key=${this.locationIQApiKey}&lat=${lat}&lon=${lon}&format=json`;

    try {
      const response = await axios.get(url);
      return response.data;
    } catch (error) {
      throw new Error('Error fetching location data');
    }
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

  async update(
    updateDto: UpdatePeternakanDto,
    id: string,
  ): Promise<Peternakan> {
    let locationData;
    if (updateDto.latitude && updateDto.longitude) {
      locationData = await this.reverseGeocode(
        updateDto.latitude,
        updateDto.longitude,
      );
    }
    const newUpdateDto = {
      ...updateDto,
      address: locationData ? locationData.display_name : undefined,
      desa: locationData ? locationData.address.village : undefined,
    };
    const updatedPeternakan = await this.peternakanModel.findByIdAndUpdate(
      id,
      newUpdateDto,
      { new: true },
    );
    if (!updatedPeternakan) {
      throw new NotFoundException(`Wisata with ID "${id}" not found`);
    }
    return updatedPeternakan;
  }
}
