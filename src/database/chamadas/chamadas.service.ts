import { Injectable, BadRequestException } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Chamadas } from './chamadas.entity';
import { ModelCtor } from 'sequelize-typescript';

@Injectable()
export class ChamadasService {
  constructor(
    @InjectModel(Chamadas) private chamadasModel: ModelCtor<Chamadas>,
  ) {}

  async saveChamadasData(chamadasData: any): Promise<void> {
    const chamadasEntries = Object.entries(chamadasData).map(
      ([cliente, data]) => ({
        cliente,
        data: data.data,
        hora: data.hora,
        chamadas_total: data.chamadas_total,
        chamadas_telefone_incorreto: data.telefone_incorreto,
        chamadas_nao_atendida: data.nao_atendida,
        chamadas_atendimento_maquina: data.atendimento_maquina,
        chamadas_atendimento_humano: data.atendimento_humano,
        chamadas_abandono_pre_fila: data.abandono_pre_fila,
        chamadas_abandono_fila: data.abandono_fila,
        chamadas_atendimento_pa: data.atendimento_pa,
        ocorrencias_total: data.ocorrencia_total,
        ocorrencias_sem_contato: data.ocorrencia_sem_contato,
        ocorrencias_com_contato: data.ocorrencia_com_contato,
        ocorrencias_abordagem: data.ocorrencia_abordagem,
        ocorrencias_fechamento: data.ocorrencia_fechamento,
      }),
    );
    try {
      await this.chamadasModel.bulkCreate(chamadasEntries);
    } catch (error) {
      throw new BadRequestException('Insert into DB Error: ' + error);
    }
  }
}
