import { Injectable } from '@nestjs/common';
import { Message } from '@example-next/api/interfaces';

@Injectable()
export class AppService {
  getData(): Message {
    return { message: `Welcome to my-nest-app! ${(new Date).toISOString()}` };
  }
}
