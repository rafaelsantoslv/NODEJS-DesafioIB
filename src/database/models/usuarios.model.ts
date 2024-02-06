import { Column, Table, Model } from 'sequelize-typescript';

@Table({ tableName: 'usuarios' })
export class Usuarios extends Model {
  password(password: string, password1: any) {
    throw new Error('Method not implemented.');
  }
  @Column({ primaryKey: true, autoIncrement: true })
  id: number;

  @Column
  nome: string;

  @Column
  username: string;

  @Column
  email: string;

  @Column
  senha: string;
}
