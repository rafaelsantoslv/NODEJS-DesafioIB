import { Injectable } from '@nestjs/common';
import { UserService } from 'src/User/user.service';
import { JwtAuthService } from './jwt/jwt.service';
import { AuthenticatedUser } from './entities/authenticated-user.entity';

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UserService,
    private readonly jwtAuthService: JwtAuthService,
  ) {}

  async login(
    username: string,
    password: string,
  ): Promise<AuthenticatedUser | null> {
    const user = await this.userService.findByUser(username);

    if (user && user.senha === password) {
      const payload = await this.jwtAuthService.signPayload({
        sub: user.id,
        username: user.username,
      });
      return {
        id: user.id,
        email: user.email,
        nome: user.nome,
        token: payload,
      };
    }
  }
}
