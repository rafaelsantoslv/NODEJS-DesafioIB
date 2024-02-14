import { BadRequestException, Injectable } from '@nestjs/common';
// import { UserService } from 'src/User/user.service';
import * as bcrypt from 'bcrypt';
import { Sequelize } from 'sequelize-typescript';
import { Usuarios } from '../database/models/usuarios.model';
import { CreateUserDto } from './dto/create-user.dto';
import { JwtAuthService } from './jwt/jwt.service';
import { AuthDto } from './dto/auth-user.dto';

@Injectable()
export class AuthService {
  constructor(
    // private readonly userService: UserService,
    private readonly jwtAuthService: JwtAuthService,
    private sequelize: Sequelize,
  ) {
    this.sequelize.addModels([Usuarios]);
  }

  async login(authDto: AuthDto) {
    const user = await Usuarios.findOne({ where: { email: authDto.email } });

    if (!user) {
      throw new BadRequestException('Email ou senha inválido');
    }

    const isPasswordValid = await bcrypt.compare(
      authDto.password,
      user.password,
    );

    if (!isPasswordValid) {
      throw new BadRequestException('Email ou senha inválido');
    }

    const token = await this.jwtAuthService.signPayload({
      sub: user.dataValues.id,
      email: user.dataValues.email,
    });
    return {
      ...user.dataValues,
      password: undefined,
      token,
    };
  }

  async createUser(createUserDto: CreateUserDto) {
    try {
      const existingUser = await Usuarios.findOne({
        where: { email: createUserDto.email },
      });
      if (existingUser) {
        throw new BadRequestException(
          'O email utilizado já está sendo utilizado por outro usuário',
        );
      }
      const user = {
        ...createUserDto,
        password: await bcrypt.hash(createUserDto.password, 10),
      };
      const createdUser = await Usuarios.create(user);
      return user;
    } catch (error) {
      throw error;
    }
  }
}
