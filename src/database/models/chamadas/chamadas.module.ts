// database/database.module.ts
import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import * as dotenv from 'dotenv';
import { Chamadas } from './chamadas.entity';
import { ChamadasService } from './chamadas.service';
import { ChamadasController } from './chamadas.controller';
// import { Geral } from './geral/geral.entity';

dotenv.config();

@Module({
  imports: [
    SequelizeModule.forRoot({
      dialect: 'mariadb',
      host: process.env.DB_HOST || 'localhost',
      port: parseInt(process.env.DB_PORT, 10) || 3306,
      username: process.env.DB_USERNAME || 'root',
      password: process.env.DB_PASSWORD,
      database: process.env.DB_DATABASE,
      models: [Chamadas], // Adicione os modelos diretamente
    }),
    SequelizeModule.forFeature([Chamadas]),
  ],
  providers: [ChamadasService],
  exports: [ChamadasService],
  controllers: [ChamadasController],
})
export class ChamadasModule {}
