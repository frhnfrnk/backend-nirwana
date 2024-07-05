import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { DesaService } from './desa.service';
import { DesaController } from './desa.controller';
import { Desa, DesaSchema } from './schema/desa.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Desa.name, schema: DesaSchema }]),
  ],
  providers: [DesaService],
  controllers: [DesaController],
})
export class DesaModule {}
