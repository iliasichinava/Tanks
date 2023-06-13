import { Module } from '@nestjs/common';
import { AngarService } from './angar.service';
import { AngarResolver } from './angar.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TankEntity } from 'src/tanks/tank/entities/tanks.entity';
import { AngarRepository } from './angar.repository';

@Module({
  imports : [
    TypeOrmModule.forFeature([TankEntity])
  ],
  providers: [AngarService, AngarResolver,AngarRepository]
})
export class AngarModule {}
