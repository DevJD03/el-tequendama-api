import { Injectable, ConflictException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Suscriptor } from './suscriptor.entity';

@Injectable()
export class SuscriptoresService {
  constructor(
    @InjectRepository(Suscriptor)
    private suscriptoresRepo: Repository<Suscriptor>,
  ) {}

  async crear(nombre: string, email: string, telefono?: string) {
    const existe = await this.suscriptoresRepo.findOneBy({ email })

    if (existe) {
      throw new ConflictException('Este email ya está suscrito')
    }

    const suscriptor = this.suscriptoresRepo.create({ nombre, email, telefono })
    return await this.suscriptoresRepo.save(suscriptor)
  }
}