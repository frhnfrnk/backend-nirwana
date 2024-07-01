import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UmkmService } from './umkm.service';
import { UmkmController } from './umkm.controller';
import { Umkm, UmkmSchema } from './schemas/umkm.schema';
import { AuthModule } from 'src/auth/auth.module';

@Module({
  imports: [
    AuthModule,
    MongooseModule.forFeature([{ name: Umkm.name, schema: UmkmSchema }]),
  ],
  providers: [UmkmService],
  controllers: [UmkmController],
})
export class UmkmModule {}
