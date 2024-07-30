import {
  IsString,
  IsOptional,
  IsNumber,
  IsArray,
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

  @IsOptional()
  @IsNumber()
  readonly jantan_dewasa?: number;

  @IsOptional()
  @IsNumber()
  readonly betina_dewasa?: number;

  @IsOptional()
  @IsNumber()
  readonly jantan_anakan?: number;

  @IsOptional()
  @IsNumber()
  readonly betina_anakan?: number;

  @IsOptional()
  @IsNumber()
  readonly total?: number;

  @IsOptional()
  @IsString()
  readonly kondisi_hewan?: string;

  @IsOptional()
  @IsString()
  readonly kondisi_kandang?: string;

  @IsOptional()
  @IsString()
  readonly status_vaksinasi?: string;

  @IsOptional()
  @IsString()
  readonly obat_cacing?: string;
}
