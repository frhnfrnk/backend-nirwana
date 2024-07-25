import { Module } from '@nestjs/common';
import { PeternakanController } from './peternakan.controller';
import { PeternakanService } from './peternakan.service';
import { AuthModule } from 'src/auth/auth.module';
import { MongooseModule } from '@nestjs/mongoose';
import { Peternakan, PeternakanSchema } from './schemas/peternakan.schema';

@Module({
  imports: [
    AuthModule,
    MongooseModule.forFeature([
      { name: Peternakan.name, schema: PeternakanSchema },
    ]),
  ],
  controllers: [PeternakanController],
  providers: [PeternakanService],
})
export class PeternakanModule {}
