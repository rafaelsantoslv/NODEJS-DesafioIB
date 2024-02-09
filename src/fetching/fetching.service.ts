import { HttpService } from '@nestjs/axios';
import { BadRequestException, Injectable } from '@nestjs/common';
import { AxiosResponse } from 'axios';
import { ChamadasService } from 'src/Chamadas/chamadas.service';

@Injectable()
export class FetchingService {
  constructor(
    private readonly httpService: HttpService,
    private readonly chamadasService: ChamadasService,
  ) {}

  async fetchJsonData(): Promise<any> {
    const dataUrl = 'https://www.ibridge.com.br/dados.json';
    let clientesArray = []; // Mova a declaração para fora do escopo da função formatResponse
    try {
      const response: AxiosResponse = await this.httpService
        .get(dataUrl)
        .toPromise();

      const responseDataString = response.data;

      const formatResponse = (responseDataString: any) => {
        for (const cliente of responseDataString) {
          if (cliente.clientes && typeof cliente.clientes === 'object') {
            for (const key in cliente.clientes) {
              const clienteName = (cliente.clientes[key].cliente = key);
              clientesArray.push(cliente.clientes[key]);
            }
          }
        }
      };

      formatResponse(responseDataString);

      const addChamadas =
        await this.chamadasService.saveOcorrencia(clientesArray);
      return addChamadas;
    } catch (error) {
      throw new BadRequestException('Fetch Failed: ' + error);
    }
  }
}
