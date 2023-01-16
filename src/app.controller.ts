import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();  // this를 붙여서 왜 굳이 의존성주입을 해주었을까? (유지보수,가독성,디자인패턴에 맞게 하려고 분리를 함)
  } // nest.js는 모듈단위로 움직이기 때문에
  
  @Get("test")
  getTest(): string {
    return this.appService.getTest();
  }
}
