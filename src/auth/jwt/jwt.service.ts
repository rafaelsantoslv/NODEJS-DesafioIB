import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { DecodedToken } from '../entities/jwt.entity';

@Injectable()
export class JwtAuthService {
  constructor(private readonly jwtService: JwtService) {}

  async signPayload(payload: any): Promise<string> {
    return this.jwtService.sign(payload);
  }

  async validateToken(token: string): Promise<DecodedToken | null> {
    try {
      const decoded = this.jwtService.verify(token) as DecodedToken;
      return decoded;
    } catch (error) {
      return null;
    }
  }
}
