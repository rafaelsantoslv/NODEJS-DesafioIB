import { Injectable } from '@nestjs/common';
// import { UserService } from 'src/User/user.service';
import { JwtAuthService } from './jwt/jwt.service';
import { AuthenticatedUser } from './entities/authenticated-user.entity';
import { Usuarios } from '../database/models/usuarios.model';
import { Sequelize } from 'sequelize-typescript';
import { DataUserCreate } from 'src/User/entities/user.entity';

@Injectable()
export class AuthService {
  constructor(
    // private readonly userService: UserService,
    private readonly jwtAuthService: JwtAuthService,
    private sequelize: Sequelize,
  ) {
    this.sequelize.addModels([Usuarios]);
  }

  async login(
    username: string,
    password: string,
  ): Promise<AuthenticatedUser | null> {
    const user = await Usuarios.findOne({
      where: { username },
    });

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
  async createUser(dataUserCreate: DataUserCreate): Promise<Usuarios | null> {
    try {
      const createUser = await Usuarios.create({ dataUserCreate });
      return createUser;
    } catch (error) {
      console.error('Erro ao criar usuário:', error.message);
      throw new Error('Erro ao criar usuário');
    }
  }
}
