import { Body, Controller, Get, Param, Post, UseGuards } from '@nestjs/common';
import { PeternakanService } from './peternakan.service';
import { AuthGuard } from '@nestjs/passport';
import { Peternakan } from './schemas/peternakan.schema';
import { CreatePeternakanDto } from './dto/create-peternakan.dto';

@Controller('peternakan')
export class PeternakanController {
  constructor(private readonly peternakanService: PeternakanService) {}

  @Post()
  @UseGuards(AuthGuard())
  async create(
    @Body() createPeternakanDto: CreatePeternakanDto,
  ): Promise<Peternakan> {
    return this.peternakanService.create(createPeternakanDto);
  }

  @Get()
  async findAll(): Promise<Peternakan[]> {
    return this.peternakanService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<Peternakan> {
    return this.peternakanService.findOne(id);
  }
}
