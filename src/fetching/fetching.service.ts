import { HttpService } from '@nestjs/axios';
import { BadRequestException, Injectable } from '@nestjs/common';
import { AxiosResponse } from 'axios';
import { ChamadasService } from 'src/chamadas/chamadas.service';

@Injectable()
export class FetchingService {
  constructor(
    private readonly httpService: HttpService,
    private readonly chamadasService: ChamadasService,
  ) {}

  async fetchJsonData(): Promise<any> {
    const dataUrl = 'https://www.ibridge.com.br/dados.json';
    try {
      const response: AxiosResponse = await this.httpService
        .get(dataUrl)
        .toPromise();

      const responseDataString = response.data;

      const formatResponse = (responseDataString: any) => {
        let clientesArray = [];
        for (const clienteKey of responseDataString) {
          clientesArray.push(clienteKey.clientes);
        }
        return clientesArray;
      };

      // Chamando a função formatResponse e retornando o resultado
      return formatResponse(responseDataString);
    } catch (error) {
      throw new BadRequestException('Fetch Failed: ' + error);
    }
  }
}
