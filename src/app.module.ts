import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { UmkmModule } from './umkm/umkm.module';
import { AuthModule } from './auth/auth.module';
import { WisataModule } from './wisata/wisata.module';
import { CloudinaryModule } from './cloudinary/cloudinary.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => ({
        uri: configService.get<string>('MONGODB_URL'),
      }),
      inject: [ConfigService],
    }),
    UmkmModule,
    AuthModule,
    WisataModule,
    CloudinaryModule,
  ],
})
export class AppModule {}
