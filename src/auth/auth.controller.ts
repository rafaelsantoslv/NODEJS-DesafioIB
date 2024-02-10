import { Body, Controller, Post, UnauthorizedException } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthDto } from './dto/auth.dto';
import { AuthenticatedUser } from './entities/authenticated-user.entity';
import { RegisterUser } from './entities/register-user.entity';
import { DataUserCreate } from './entities/user.entity';
import { RegisterDto } from './dto/register.dto';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('login')
  async login(@Body() authDto: AuthDto): Promise<AuthenticatedUser> {
    const { username, password } = authDto;
    const user = await this.authService.login(username, password);

    if (!user) {
      throw new UnauthorizedException('Credenciais inválidas');
    }
    return user;
  }

  @Post('register')
  async register(@Body() registerDto: RegisterDto): Promise<RegisterUser> {
    try {
      const { nome, username, senha, email } = registerDto;
      const create = await this.authService.createUser(registerDto);
      return create;
    } catch (error) {
      throw new UnauthorizedException('Erro ao criar usuários', error.message);
    }
  }
}
