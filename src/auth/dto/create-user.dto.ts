import { IsNotEmpty, IsString, Length } from 'class-validator';

export class CreateUserDto {
  @IsString()
  @IsNotEmpty()
  @Length(8, 50)
  password: string;

  @IsString()
  @IsNotEmpty()
  @Length(10, 50)
  email: string;

  @IsString()
  @IsNotEmpty()
  @Length(3, 50)
  nome: string;
}
