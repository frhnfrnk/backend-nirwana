import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { WisataService } from './wisata.service';
import { WisataController } from './wisata.controller';
import { Wisata, WisataSchema } from './schemas/wisata.schema';
import { AuthModule } from 'src/auth/auth.module';

@Module({
  imports: [
    AuthModule,
    MongooseModule.forFeature([{ name: Wisata.name, schema: WisataSchema }]),
  ],
  providers: [WisataService],
  controllers: [WisataController],
})
export class WisataModule {}
