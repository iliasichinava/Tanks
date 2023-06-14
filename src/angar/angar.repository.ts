import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { TankDto } from '../tanks/tank/dto/tanks.dto';
import { TankEntity, GunEntity, TurretEntity } from 'src/tanks/tank/entities';
import { Mapper } from 'src/helpers/mappers';

interface IAngarRepository {
  createTank(dto: TankDto): Promise<TankEntity>; 
  readTanks(): Promise<TankEntity[]>
}

@Injectable()
export class AngarRepository implements IAngarRepository {

  public constructor(
    @InjectRepository(TankEntity) private readonly tankRepository: Repository<TankEntity>,
    @InjectRepository(GunEntity) private readonly gunRepo: Repository<GunEntity>,
    @InjectRepository(TurretEntity) private readonly turretRepo: Repository<TurretEntity>
  ) {}

  public async createTank(dto: TankDto): Promise<TankEntity> {
    const result: TankEntity = await Mapper.dtoToEntity(dto);
    const turret = this.turretRepo.create(result.turret);

    const gun = this.gunRepo.create(result.gun);
    await this.turretRepo.save(turret);
    await this.gunRepo.save(gun);

    result.gun = gun;
    result.turret = turret;

    return await this.tankRepository.save(result);
  }

  public async readTanks(): Promise<TankEntity[]> {
    return await this.tankRepository.find({ relations: { turret: true, gun: true } });
  }
}
