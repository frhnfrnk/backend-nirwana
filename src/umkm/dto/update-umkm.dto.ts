import {
  IsString,
  IsOptional,
  IsNumber,
  IsArray,
  IsLatitude,
  IsLongitude,
} from 'class-validator';

export class UpdateUmkmDto {
  @IsOptional()
  @IsString()
  readonly name?: string;

  @IsOptional()
  @IsString()
  readonly category?: string;

  @IsOptional()
  @IsString()
  readonly description?: string;

  @IsOptional()
  @IsString()
  readonly address?: string;

  @IsOptional()
  @IsNumber()
  @IsLatitude()
  readonly latitude?: number;

  @IsOptional()
  @IsNumber()
  @IsLongitude()
  readonly longitude?: number;

  @IsOptional()
  @IsString()
  readonly phoneNumber?: string;

  @IsOptional()
  @IsArray()
  readonly image?: string[];

  @IsOptional()
  @IsString()
  readonly website?: string;

  @IsOptional()
  @IsString()
  readonly email?: string;

  @IsOptional()
  @IsString()
  readonly facebook?: string;

  @IsOptional()
  @IsString()
  readonly instagram?: string;

  @IsOptional()
  @IsString()
  readonly desa?: string;
}
