import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Put,
  UseGuards,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { WisataService } from './wisata.service';
import { CreateWisataDto } from './dto/create-wisata.dto';
import { UpdateWisataDto } from './dto/update-wisata.dto';
import { Wisata } from './schemas/wisata.schema';

@Controller('wisata')
export class WisataController {
  constructor(private readonly wisataService: WisataService) {}

  @UseGuards(AuthGuard())
  @Post()
  async create(@Body() createWisataDto: CreateWisataDto): Promise<Wisata> {
    return this.wisataService.create(createWisataDto);
  }

  @Get()
  async findAll(): Promise<Wisata[]> {
    return this.wisataService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<Wisata> {
    return this.wisataService.findOne(id);
  }

  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() updateWisataDto: UpdateWisataDto,
  ): Promise<Wisata> {
    return this.wisataService.update(id, updateWisataDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string): Promise<void> {
    return this.wisataService.remove(id);
  }
}
