import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Chamadas } from './chamadas.entity';

@Injectable()
export class ChamadaService {
  constructor(
    @InjectModel(Chamadas)
    private readonly chamadasModel: typeof Chamadas,
  ) {}

  async create(chamadaData: Partial<Chamadas>): Promise<Chamadas> {
    const chamada = await this.chamadasModel.create(chamadaData);
    return chamada;
  }
  async findAll(): Promise<Chamadas[]> {
    const chamadas = await this.chamadasModel.findAll();
    return chamadas;
  }
}
