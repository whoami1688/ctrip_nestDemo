import { Controller, Get, Req, Res } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }
  @Get()
  async getData(): Promise<any> {
    let data = await this.appService.getData();
    return data
  }
  @Get("/hello")
  getHello(): string {
    return this.appService.getHello();
  }
}
