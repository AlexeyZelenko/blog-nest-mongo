import { Injectable } from '@nestjs/common';
import { PRODUCTS } from './mock/products.mock';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
}
