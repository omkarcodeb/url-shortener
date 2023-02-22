import { Module } from '@nestjs/common';
import { UrlShortnerService } from './url-shortner.service';
import { UrlShortnerController } from './url-shortner.controller';
import { UrlShortner, UrlShortnerSchema } from './entities/url-shortner.entity';
import { MongooseModule } from '@nestjs/mongoose/dist';

@Module({
  imports: [MongooseModule.forFeature([{ name: UrlShortner.name, schema: UrlShortnerSchema }])],
  controllers: [UrlShortnerController],
  providers: [UrlShortnerService],
})
export class UrlShortnerModule {}
