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

export class CreateUmkmDto {
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

  @IsString()
  @IsNotEmpty()
  readonly phoneNumber: string;

  @IsArray()
  @IsNotEmpty()
  readonly image: string[];

  @IsOptional()
  @IsUrl()
  readonly website?: string;

  @IsOptional()
  @IsEmail()
  readonly email?: string;

  @IsOptional()
  @IsString()
  readonly facebook?: string;

  @IsOptional()
  @IsString()
  readonly instagram?: string;

  @IsString()
  @IsNotEmpty()
  readonly desa: string;
}
