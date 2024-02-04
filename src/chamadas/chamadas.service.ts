// chamadas/chamadas.service.ts
import { Injectable, BadRequestException, Response } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Chamadas } from './chamadas.model';
import { Sequelize } from 'sequelize-typescript';

@Injectable()
export class ChamadasService {
  constructor(private sequelize: Sequelize) {
    this.sequelize.addModels([Chamadas]);
  }

  async findAll(): Promise<Chamadas[]> {
    return Chamadas.findAll();
  }
}
