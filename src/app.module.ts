import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FetchingModule } from './fetching/fetching.module';

@Module({
  imports: [FetchingModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
