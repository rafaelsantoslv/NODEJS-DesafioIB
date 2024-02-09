// user.service.ts
import { Injectable } from '@nestjs/common';
import { Sequelize } from 'sequelize-typescript';
import { Usuarios } from '../database/models/usuarios.model';
import { DataUserCreate } from './entities/user.entity';

@Injectable()
export class UserService {
  constructor(private sequelize: Sequelize) {
    this.sequelize.addModels([Usuarios]);
  }

  async findByUser(username: string): Promise<Usuarios | null> {
    const findUser = await Usuarios.findOne({
      where: { username },
    });

    return findUser;
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
