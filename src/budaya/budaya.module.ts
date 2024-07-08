import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthModule } from 'src/auth/auth.module';
import { Budaya, BudayaSchema } from './schema/budaya.schema';
import { BudayaService } from './budaya.service';
import { BudayaController } from './budaya.controller';

@Module({
  imports: [
    AuthModule,
    MongooseModule.forFeature([{ name: Budaya.name, schema: BudayaSchema }]),
  ],
  providers: [BudayaService],
  controllers: [BudayaController],
})
export class BudayaModule {}
