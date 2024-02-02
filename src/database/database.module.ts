import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import * as dotenv from 'dotenv';
import { Chamadas } from './chamadas/chamadas.entity';
import { ChamadasService } from './chamadas/chamadas.service';

dotenv.config();

@Module({
  imports: [
    SequelizeModule.forRoot({
      dialect: 'mariadb',
      host: process.env.DB_HOST || 'localhost',
      port: parseInt(process.env.DB_PORT, 10) || 3306,
      username: process.env.DB_USERNAME || 'root',
      password: process.env.DB_PASSWORD || 'root',
      database: process.env.DB_DATABASE,
      // models: [],
    }),
    SequelizeModule.forFeature([Chamadas]),
  ],
  providers: [ChamadasService],
  exports: [ChamadasService],
})
export class DatabaseModule {}
