export class AuthenticatedUser {
  constructor(
    public id: number,
    public email: string,
    public nome: string,
    public token: string,
  ) {}
}
