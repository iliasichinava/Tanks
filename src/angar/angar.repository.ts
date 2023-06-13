import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { TankDto } from '../tanks/tank/dto/tanks.dto';
import { TankEntity } from '../tanks/tank/entities/tanks.entity';
import { Mapper } from 'src/helpers/mappers';

interface IAngarRepository {
  createTank(dto: TankDto): Promise<TankEntity>; 
  readTanks(): Promise<TankEntity[]>
}

@Injectable()
export class AngarRepository implements IAngarRepository {
  public constructor(@InjectRepository(TankEntity) private readonly tankRepository: Repository<TankEntity>) {}

  public async createTank(dto: TankDto): Promise<TankEntity> {
    const entity = Mapper.dtoToEntity(dto);

    return await this.tankRepository.save(entity);
  }

  public async readTanks(): Promise<TankEntity[]> {
    return await this.tankRepository.find();
  }
}
