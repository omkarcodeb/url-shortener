import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Request,
  Res,
} from '@nestjs/common';
import { UrlShortnerService } from './url-shortner.service';
import { CreateUrlShortnerDto } from './dto/create-url-shortner.dto';
import { UpdateUrlShortnerDto } from './dto/update-url-shortner.dto';
import { nanoid } from 'nanoid';
import { Request as ERequest, Response } from 'express';

@Controller('url-shortner')
export class UrlShortnerController {
  constructor(private readonly urlShortnerService: UrlShortnerService) {}

  @Post()
  create(@Body() createUrlShortnerDto: CreateUrlShortnerDto) {
    createUrlShortnerDto.shortUrl = nanoid();
    return this.urlShortnerService.create(createUrlShortnerDto);
  }

  @Get(':id')
  async findOne(@Res() res: Response, @Param('id') id: string) {
    const data = await this.urlShortnerService.findOne(id);
    if(data.url){
      res.redirect(data.url)
    }
    return data;
  }
}
