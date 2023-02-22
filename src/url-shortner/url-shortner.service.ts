import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose/dist';
import { Model } from 'mongoose';
import { CreateUrlShortnerDto } from './dto/create-url-shortner.dto';
import { UpdateUrlShortnerDto } from './dto/update-url-shortner.dto';
import { UrlShortner, UrlShortnerDocument } from './entities/url-shortner.entity';

@Injectable()
export class UrlShortnerService {
  constructor(@InjectModel(UrlShortner.name) private urlShortnerModal: Model<UrlShortnerDocument>) {}

  create(createUrlShortnerDto: CreateUrlShortnerDto) {
    return this.urlShortnerModal.create( createUrlShortnerDto)
  }

  findAll() {
    return `This action returns all urlShortner`;
  }

  findOne(id: string) {
    return this.urlShortnerModal.findOne({shortUrl: id});
  }

  update(id: number, updateUrlShortnerDto: UpdateUrlShortnerDto) {
    return `This action updates a #${id} urlShortner`;
  }

  remove(id: number) {
    return `This action removes a #${id} urlShortner`;
  }
}
