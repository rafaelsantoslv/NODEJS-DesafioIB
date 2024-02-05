import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { Chamadas } from './chamadas.model';
import { ChamadasService } from './chamadas.service';
import { ChamadasController } from './chamadas.controller';

@Module({
  imports: [SequelizeModule.forFeature([Chamadas])],
  providers: [ChamadasService],
  controllers: [ChamadasController],
  exports: [ChamadasService],
})
export class ChamadasModule {}
