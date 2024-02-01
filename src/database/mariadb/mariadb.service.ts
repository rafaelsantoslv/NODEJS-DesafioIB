import { Injectable } from '@nestjs/common';
import { Connection, createConnection } from 'typeorm';
import * as dotenv from 'dotenv';

dotenv.config();

@Injectable()
export class MariaDBService {
  private connection: Connection;

  async connect(): Promise<void> {
    this.connection = await createConnection({
      type: 'mariadb',
      host: process.env.DB_HOST,
      port: parseInt(process.env.DB_PORT, 10),
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_DATABASE,
      synchronize: true,
      entities: [
        /* Add your entity classes here */
      ],
    });
  }

  async getConnection(): Promise<Connection> {
    if (!this.connection) {
      await this.connect();
    }
    return this.connection;
  }
}
