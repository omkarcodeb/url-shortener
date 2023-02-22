import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UrlShortnerModule } from './url-shortner/url-shortner.module';

@Module({
  imports: [UrlShortnerModule, MongooseModule.forRoot('mongodb://localhost/urlShortner')],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
