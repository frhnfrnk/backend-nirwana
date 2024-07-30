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

export class CreatePeternakanDto {
  @IsString()
  @IsNotEmpty()
  readonly name: string;

  @IsString()
  @IsNotEmpty()
  readonly category: string;

  @IsString()
  @IsNotEmpty()
  readonly description: string;

  @IsNumber()
  @IsLatitude()
  readonly latitude: number;

  @IsNumber()
  @IsLongitude()
  readonly longitude: number;

  @IsArray()
  @IsOptional()
  readonly image: string[];

  @IsNumber()
  @IsNotEmpty()
  readonly jantan_anakan: number;

  @IsNumber()
  @IsNotEmpty()
  readonly betina_anakan: number;

  @IsNumber()
  @IsNotEmpty()
  readonly total: number;

  @IsString()
  @IsNotEmpty()
  readonly kondisi_hewan: string;

  @IsString()
  @IsNotEmpty()
  readonly kondisi_kandang: string;

  @IsString()
  @IsNotEmpty()
  readonly status_vaksinasi: string;

  @IsString()
  @IsNotEmpty()
  readonly obat_cacing: string;
}
