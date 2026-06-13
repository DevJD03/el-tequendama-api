import { Controller, Post, Body, HttpCode } from '@nestjs/common';
import { SuscriptoresService } from './suscriptores.service';

@Controller('suscriptores')
export class SuscriptoresController {
  constructor(private readonly suscriptoresService: SuscriptoresService) {}

  @Post()
  @HttpCode(200)
  async suscribirse(
    @Body() body: { nombre: string; email: string; telefono?: string },
  ) {
    if (!body.nombre || !body.email) {
      return { error: 'El nombre y el email son requeridos' }
    }

    return await this.suscriptoresService.crear(
      body.nombre,
      body.email,
      body.telefono,
    )
  }
}