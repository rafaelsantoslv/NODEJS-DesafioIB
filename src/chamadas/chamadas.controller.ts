import { Controller, Get } from '@nestjs/common';
import { Sequelize } from 'sequelize-typescript';
import { ChamadasService } from './chamadas.service';

@Controller('chamadas')
export class ChamadasController {
  constructor(private readonly chamadasService: ChamadasService) {}

  @Get()
  async testConnectionDatabase(): Promise<any> {
    return this.chamadasService.findAll();
  }
}
