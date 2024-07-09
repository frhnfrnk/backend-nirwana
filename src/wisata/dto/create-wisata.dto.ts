import {
  IsString,
  IsNotEmpty,
  IsOptional,
  IsNumber,
  IsArray,
  IsEmail,
  IsUrl,
  IsLatitude,
  IsLongitude,
} from 'class-validator';

export class CreateWisataDto {
  @IsString()
  @IsNotEmpty()
  readonly name: string;

  @IsString()
  @IsNotEmpty()
  readonly category: string;

  @IsString()
  @IsNotEmpty()
  readonly description: string;

  @IsString()
  @IsNotEmpty()
  readonly address: string;

  @IsNumber()
  @IsLatitude()
  readonly latitude: number;

  @IsNumber()
  @IsLongitude()
  readonly longitude: number;

  @IsArray()
  @IsNotEmpty()
  readonly image: string[];

  @IsString()
  @IsNotEmpty()
  readonly desa: string;
}
