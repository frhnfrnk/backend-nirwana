// src/desa/desa.controller.ts
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
import { DesaService } from './desa.service';
import { CreateDesaDto, UpdateDesaDto } from './dto/desa.dto';
import { Desa } from './schema/desa.schema';
import { AuthGuard } from '@nestjs/passport';

@Controller('desa')
export class DesaController {
  constructor(private readonly desaService: DesaService) {}

  @UseGuards(AuthGuard())
  @Post()
  async create(@Body() createDesaDto: CreateDesaDto): Promise<Desa> {
    return this.desaService.create(createDesaDto);
  }

  @Get()
  async findAll(): Promise<Desa[]> {
    return this.desaService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<Desa> {
    return this.desaService.findOne(id);
  }

  @UseGuards(AuthGuard())
  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() updateDesaDto: UpdateDesaDto,
  ): Promise<Desa> {
    return this.desaService.update(id, updateDesaDto);
  }

  @UseGuards(AuthGuard())
  @Delete(':id')
  async remove(@Param('id') id: string): Promise<void> {
    return this.desaService.remove(id);
  }
}
