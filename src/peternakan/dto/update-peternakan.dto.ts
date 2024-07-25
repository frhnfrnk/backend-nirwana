import {
  IsString,
  IsOptional,
  IsNumber,
  IsArray,
  IsEmail,
  IsUrl,
  IsLatitude,
  IsLongitude,
} from 'class-validator';

export class UpdatePeternakanDto {
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
  @IsArray()
  readonly image?: string[];

  @IsOptional()
  @IsString()
  readonly desa?: string;
}
