import { Table, Column, Model, BelongsTo } from 'sequelize-typescript';
import { Geral } from '../geral/geral.entity';
@Table
export class Chamadas extends Model {
  @Column({ primaryKey: true, autoIncrement: true })
  id: number;

  @Column
  cha_cliente: string;

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

  @BelongsTo(() => Geral)
  geral: Geral;
}