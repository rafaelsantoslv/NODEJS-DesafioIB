import { Controller, Get } from '@nestjs/common';
import { Sequelize } from 'sequelize-typescript';

@Controller('chamadas')
export class ChamadasController {
  constructor(private readonly sequelize: Sequelize) {}

  @Get('test-database')
  async testConnectionDatabase(): Promise<string> {
    try {
      await this.sequelize.authenticate();
      return 'connection sucess';
    } catch (error) {
      return 'unable connection: ' + error.message;
    }
  }
}
