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
import { BudayaService } from './budaya.service';
import { CreateBudayaDto, UpdateBudayaDto } from './dto/budaya.dto';
import { Budaya } from './schema/budaya.schema';

@Controller('budaya')
export class BudayaController {
  constructor(private readonly budayaService: BudayaService) {}

  @Post()
  @UseGuards(AuthGuard())
  async create(@Body() createBudayaDto: CreateBudayaDto): Promise<Budaya> {
    return this.budayaService.create(createBudayaDto);
  }

  @Get()
  async findAll(): Promise<Budaya[]> {
    return this.budayaService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<Budaya> {
    return this.budayaService.findOne(id);
  }

  @Put(':id')
  @UseGuards(AuthGuard())
  async update(
    @Param('id') id: string,
    @Body() updateBudayaDto: UpdateBudayaDto,
  ): Promise<Budaya> {
    return this.budayaService.update(id, updateBudayaDto);
  }

  @Delete(':id')
  @UseGuards(AuthGuard())
  async remove(@Param('id') id: string): Promise<void> {
    return this.budayaService.remove(id);
  }
}
