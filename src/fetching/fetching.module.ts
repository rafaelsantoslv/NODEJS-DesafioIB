import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { FetchingController } from './fetching.controller';
import { FetchingService } from './fetching.service';
import { ChamadasModule } from 'src/chamadas/chamadas.module';
import { DatabaseModule } from 'src/database/database.module';

@Module({
  imports: [HttpModule, ChamadasModule, DatabaseModule],
  controllers: [FetchingController],
  providers: [FetchingService],
})
export class FetchingModule {}
