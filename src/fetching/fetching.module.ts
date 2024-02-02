import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { FetchingController } from './fetching.controller';
import { FetchingService } from './fetching.service';
import { ChamadasModule } from 'src/database/models/chamadas/chamadas.module';

@Module({
  imports: [HttpModule, ChamadasModule],
  controllers: [FetchingController],
  providers: [FetchingService],
})
export class FetchingModule {}
