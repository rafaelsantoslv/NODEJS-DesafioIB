import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { FetchingController } from './fetching.controller';
import { FetchingService } from './fetching.service';

@Module({
  imports: [HttpModule],
  controllers: [FetchingController],
  providers: [FetchingService],
})
export class FetchingModule {}
