import { Controller, Get, Query, Param, ParseIntPipe } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('api')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('leads')
  async getLeads(@Query('query') query: string) {
    return this.appService.getLeads(query);
  }

  @Get('pipelines')
  async getPipelines() {
    return await this.appService.getPipelines();
  }

  @Get('users/:id')
  async getUserById(@Param('id', ParseIntPipe) id: number) {
    return await this.appService.getUserById(id);
  }
}
