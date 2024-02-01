import { Module } from '@nestjs/common';
import { MariadbController } from './mariadb.controller';
import { MariadbService } from './mariadb.service';

@Module({
  controllers: [MariadbController],
  providers: [MariadbService]
})
export class MariadbModule {}
