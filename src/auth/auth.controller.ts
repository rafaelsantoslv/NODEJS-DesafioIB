import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('login')
  async login(
    @Body('username') username: string,
    @Body('password') password: string,
  ): Promise<any> {
    const user = await this.authService.login(username, password);
    if (!user) {
      return { message: 'Credenciais Inválidas' };
    }
    return user;
  }
}
