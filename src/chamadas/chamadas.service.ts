// chamadas/chamadas.service.ts
import { Injectable, BadRequestException } from '@nestjs/common';
import { Chamadas } from '../database/models/chamadas.model';
import { Sequelize } from 'sequelize-typescript';
import { HttpService } from '@nestjs/axios';
import { AxiosResponse } from 'axios';
import { exists } from 'fs';

@Injectable()
export class ChamadasService {
  constructor(
    private sequelize: Sequelize,
    private readonly httpService: HttpService,
  ) {
    this.sequelize.addModels([Chamadas]);
  }

  async findAll() {
    return Chamadas.findAll();
  }

  async ChamadasInsert() {
    const dataUrl = 'https://www.ibridge.com.br/dados.json';
    const clientesArray = [];
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

      for (const clienteData of clientesArray) {
        const exists = await Chamadas.findOne({
          where: {
            data: clienteData.data,
            cliente: clienteData.cliente,
          },
        });
        if (!exists) {
          const addChamadas = await Chamadas.create(clienteData);
        }
      }
      return { clientes: 'sucess' };
    } catch (error) {
      throw new BadRequestException('Fetch Failed: ' + error);
    }
  }
}
