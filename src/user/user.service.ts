import { Injectable } from '@nestjs/common';
import { Sequelize } from 'sequelize-typescript';
import { Usuarios } from '../database/models/usuarios.model';

@Injectable()
export class UserService {
  constructor(private sequelize: Sequelize) {
    this.sequelize.addModels([Usuarios]);
  }

  async findByUser(username: string): Promise<Usuarios> {
    const findUser = await Usuarios.findOne({
      where: { username },
    });

    return findUser;
  }
}
