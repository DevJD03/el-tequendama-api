import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn } from 'typeorm';

@Entity('suscriptores')
export class Suscriptor {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ length: 100 })
  nombre!: string;

  @Column({ unique: true, length: 255 })
  email!: string;

  @Column({ length: 20, nullable: true })
  telefono!: string;

  @CreateDateColumn({ name: 'fecha_suscripcion' })
  fechaSuscripcion!: Date;
}