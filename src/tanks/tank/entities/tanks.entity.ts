import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('tanks')

export class TankEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;
}