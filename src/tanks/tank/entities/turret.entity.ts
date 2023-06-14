import { Entity, Column, PrimaryGeneratedColumn, OneToOne } from 'typeorm';

@Entity()
export class TurretEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  armor: number;

  @Column()
  elevation: number;

  @Column()
  stabilization: boolean;

  @Column()
  rotationSpeed: number;


}
