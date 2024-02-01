import { HttpService } from '@nestjs/axios';
import { BadRequestException, Injectable } from '@nestjs/common';
import { AxiosResponse } from 'axios';

@Injectable()
export class FetchingService {
  constructor(private readonly httpService: HttpService) {}

  async fetchJsonData(): Promise<any> {
    const dataUrl = 'https://www.ibridge.com.br/dados.json';
    try {
      const response: AxiosResponse = await this.httpService
        .get(dataUrl)
        .toPromise();
      return response.data;
    } catch (error) {
      throw new BadRequestException('Fetch to Failed: ' + error);
    }
  }
}
