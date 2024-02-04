import { Injectable } from '@nestjs/common';
import { Sequelize } from 'sequelize-typescript';

@Injectable()
export class DatabaseService {
  constructor(private sequelize: Sequelize) {}

  async testConnection(): Promise<string> {
    try {
      await this.sequelize.authenticate();
      return 'Connection has been established successfully.';
    } catch (error) {
      return `Unable to connect to the database: ${error.message}`;
    }
  }
}
