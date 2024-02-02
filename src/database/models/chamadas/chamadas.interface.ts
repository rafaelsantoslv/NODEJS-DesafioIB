export interface ChamadasData {
  cliente: string;
  data: string;
  hora: string;
  chamadas_total: number;
  chamadas_telefone_incorreto: number;
  chamadas_nao_atendida: number;
  chamadas_atendimento_maquina: number;
  chamadas_atendimento_humano: number;
  chamadas_abandono_pre_fila: number;
  chamadas_abandono_fila: number;
  chamadas_atendimento_pa: number;
  ocorrencias_total: number;
  ocorrencias_sem_contato: number;
  ocorrencias_com_contato: number;
  ocorrencias_abordagem: number;
  ocorrencias_fechamento: number;
}
