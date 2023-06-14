import { Module } from '@nestjs/common';
import { AngarService } from './angar.service';
import { AngarResolver } from './angar.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AngarRepository } from './angar.repository';
import { TankEntity, GunEntity, TurretEntity } from 'src/tanks/tank/entities';

@Module({
  imports : [
    TypeOrmModule.forFeature([TankEntity, GunEntity, TurretEntity])
  ],
  providers: [AngarService, AngarResolver,AngarRepository]
})
export class AngarModule {}
