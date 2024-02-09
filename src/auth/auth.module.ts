import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { UserModule } from 'src/User/user.module';
import { JwtAuthModule } from './jwt/jwt.module';

@Module({
  imports: [UserModule, JwtAuthModule],
  providers: [AuthService],
  controllers: [AuthController],
  exports: [AuthService],
})
export class AuthModule {}
