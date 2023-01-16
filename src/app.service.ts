import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  getTest(): string {
    return "최예닮 벨로그 네스트 사랑해(하트)(찡긋)"
  }
}
