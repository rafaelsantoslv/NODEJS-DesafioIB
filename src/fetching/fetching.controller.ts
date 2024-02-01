import { Controller, Get } from '@nestjs/common';
import { FetchingService } from './fetching.service';

@Controller('/api')
export class FetchingController {
  constructor(private readonly fetchingService: FetchingService) {}

  @Get('dados')
  async fetchData(): Promise<any> {
    return this.fetchingService.fetchJsonData();
  }
}
