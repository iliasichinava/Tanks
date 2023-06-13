import { Injectable } from '@nestjs/common';
import { log } from 'console';
import { GermanFactory } from 'src/tanks/factories/nazi.factory';
import { SovietFactory } from 'src/tanks/factories/soviet.factory';
import { TankDto } from 'src/tanks/tank/dto/tanks.dto';
import { TankEntity } from 'src/tanks/tank/entities/tanks.entity';
import { AngarRepository } from './angar.repository';
import { TankFactory } from 'src/tanks/factories/tank.factory';
import { Mapper } from 'src/helpers/mappers';

@Injectable()
export class AngarService {
  private readonly NaziFactory: GermanFactory;
  private readonly UssrFactory: SovietFactory;
  private readonly countryToFactory: Map<string, TankFactory>;

  /* PUBLIC FIELDS */

  public constructor(private readonly angarRepository: AngarRepository) {
    this.NaziFactory = new GermanFactory();
    this.UssrFactory = new SovietFactory();
    this.countryToFactory = this.fillMap();
  }

  public async readTanks(): Promise<TankDto[]> {
    const response: TankDto[] = new Array<TankDto>();
    const data: TankEntity[] = await this.angarRepository.readTanks();
    
    for(let tank of data) {
      let dto = Mapper.entityToDto(tank);
      response.push(dto);
    }

    return response;
  }

  public async create(country: string, tank: string): Promise<TankEntity> {
    let result: TankDto;
    
    let countryToFactory = this.countryToFactory.get(country);
    result = this.buildTank(countryToFactory, tank);
    
    if (!result) return null;

    return this.angarRepository.createTank(result);;
  }

  /* PRIVATE FIELDS */

  private buildTank(factory: TankFactory, tank: string) {
    let tankdto: TankDto;
  
    const factoryMethods = Object.getOwnPropertyNames(Object.getPrototypeOf(factory));
    const matchingMethod = factoryMethods.find((method) => method.toUpperCase() === `BUILD${tank.toUpperCase()}`);
  
    if (!matchingMethod) {
      log(`Failed to find matching tank builder for ${tank}`);
      return null;
    }
  
    const tankPrototype = factory[matchingMethod]();
  
    tankdto = Mapper.prototypeToDto(tankPrototype);
  
    log(`${tank} created!`);
    return tankdto;
  }

  private fillMap(): Map<string, TankFactory> {
    let result = new Map<string, TankFactory>();

    result.set("GERMANY", this.NaziFactory);
    result.set("USSR", this.UssrFactory);

    return result;
  }
}
