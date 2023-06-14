import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { GunEntity } from "./gun.entity";
import { TurretEntity } from "./turret.entity";

@Entity('tanks')
export class TankEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @OneToOne(type => GunEntity)
    @JoinColumn()
    gun: GunEntity;

    @OneToOne(type => TurretEntity)
    @JoinColumn()
    turret: TurretEntity;
}