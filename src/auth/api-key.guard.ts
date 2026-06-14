import { CanActivate, ExecutionContext, Injectable, UnauthorizedException } from '@nestjs/common';

@Injectable()
export class ApiKeyGuard implements CanActivate {
  canActivate(context: ExecutionContext): boolean {
    const request = context.switchToHttp().getRequest();
    const apiKey = request.headers['authorization'];

    const claveValida = `Bearer ${process.env.API_KEY}`;

    if (!apiKey || apiKey !== claveValida) {
      throw new UnauthorizedException('Clave inválida');
    }

    return true;
  }
}