import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FetchingModule } from './fetching/fetching.module';
import { ChamadasModule } from './database/models/chamadas/chamadas.module';

@Module({
  imports: [FetchingModule, ChamadasModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
