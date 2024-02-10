import { IsNotEmpty, IsString, Length } from 'class-validator';

export class RegisterDto {
  @IsNotEmpty()
  @IsString()
  @Length(3, 50)
  username: string;

  @IsString()
  @IsNotEmpty()
  @Length(8, 50)
  senha: string;

  @IsString()
  @IsNotEmpty()
  @Length(10, 50)
  email: string;

  @IsString()
  @IsNotEmpty()
  @Length(3, 50)
  nome: string;
}
