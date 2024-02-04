import { Controller, Get } from '@nestjs/common';
import { DatabaseService } from './database.service';

@Controller('database')
export class DatabaseController {
  constructor(private databaseService: DatabaseService) {}

  @Get('test-connection')
  async testConnection(): Promise<string> {
    return this.databaseService.testConnection();
  }
}
