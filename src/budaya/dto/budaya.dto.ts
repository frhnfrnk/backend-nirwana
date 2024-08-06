// src/dto/create-budaya.dto.ts
import { IsString, IsNotEmpty, IsMongoId, IsArray } from 'class-validator';
import { PartialType } from '@nestjs/mapped-types';

export class CreateBudayaDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  author: string;

  @IsString()
  @IsNotEmpty()
  description: string;

  @IsString()
  @IsNotEmpty()
  category: string;

  @IsString()
  @IsNotEmpty()
  content: string;

  @IsArray()
  @IsNotEmpty()
  image: string;

  @IsString()
  @IsNotEmpty()
  desa: string;
}

// src/dto/update-budaya.dto.ts
export class UpdateBudayaDto extends PartialType(CreateBudayaDto) {}
