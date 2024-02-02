// chamadas/chamadas.service.ts
import { Injectable, BadRequestException } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Chamadas } from './chamadas.entity';
import { ModelCtor } from 'sequelize-typescript';
import { ChamadasData } from './chamadas.interface';

@Injectable()
export class ChamadasService {
  constructor(
    @InjectModel(Chamadas)
    private readonly chamadasModel: ModelCtor<Chamadas>,
  ) {}

  async saveChamadasData(chamadasData: ChamadasData[]): Promise<void> {
    const chamadasEntries = chamadasData.map((data) => ({
      cliente: data.cliente,
      data: data.data,
      hora: data.hora,
      chamadas_total: data.chamadas_total,
      chamadas_telefone_incorreto: data.chamadas_telefone_incorreto,
      chamadas_nao_atendida: data.chamadas_nao_atendida,
      chamadas_atendimento_maquina: data.chamadas_atendimento_maquina,
      chamadas_atendimento_humano: data.chamadas_atendimento_humano,
      chamadas_abandono_pre_fila: data.chamadas_abandono_pre_fila,
      chamadas_abandono_fila: data.chamadas_abandono_fila,
      chamadas_atendimento_pa: data.chamadas_atendimento_pa,
      ocorrencias_total: data.ocorrencias_total,
      ocorrencias_sem_contato: data.ocorrencias_sem_contato,
      ocorrencias_com_contato: data.ocorrencias_com_contato,
      ocorrencias_abordagem: data.ocorrencias_abordagem,
      ocorrencias_fechamento: data.ocorrencias_fechamento,
    }));

    try {
      await this.chamadasModel.bulkCreate(chamadasEntries);
    } catch (error) {
      throw new BadRequestException('Insert into DB Error: ' + error);
    }
  }
}
