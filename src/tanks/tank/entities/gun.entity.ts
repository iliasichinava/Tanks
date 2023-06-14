import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class GunEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  calibre: number;

  @Column()
  ammo: number;

  @Column()
  rate: number;

  @Column()
  range: number;
}
