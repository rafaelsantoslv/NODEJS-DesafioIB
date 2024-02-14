import { Table, Column, Model, Index } from 'sequelize-typescript';

@Table({
  tableName: 'chamadas',
  indexes: [
    {
      name: 'idx_cliente',
      using: 'BTREE',
      fields: ['cliente'],
    },
    {
      name: 'idx_data',
      using: 'BTREE',
      fields: ['data'],
    },
  ],
})
export class Chamadas extends Model {
  @Column({ primaryKey: true, autoIncrement: true })
  id: number;

  @Column
  cliente: string;

  @Column
  chamadas_total: number;

  @Column
  chamadas_atendimento_pa: number;

  @Column
  chamadas_nao_atendida: number;

  @Column
  chamadas_atendimento_maquina: number;

  @Column
  chamadas_atendimento_humano: number;

  @Column
  chamadas_abandono_pre_fila: number;

  @Column
  chamadas_abandono_fila: number;

  @Column
  chamadas_falha_operadora: number;

  @Column
  chamadas_telefone_incorreto: number;

  @Column
  ocorrencias_total: number;

  @Column
  ocorrencias_sem_contato: number;

  @Column
  ocorrencias_com_contato: number;

  @Column
  ocorrencias_abordagem: number;

  @Column
  ocorrencias_fechamento: number;

  @Column
  data: string;

  @Column
  hora: string;
}
