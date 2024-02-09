import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { Chamadas } from '../database/models/chamadas.model';
import { ChamadasService } from './chamadas.service';
import { ChamadasController } from './chamadas.controller';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports: [SequelizeModule.forFeature([Chamadas]), HttpModule],
  providers: [ChamadasService],
  controllers: [ChamadasController],
  exports: [ChamadasService],
})
export class ChamadasModule {}
