import { Injectable } from '@nestjs/common';
import { log } from 'console';
import { TankDto } from 'src/tanks/tank/dto/tanks.dto';
import { TankEntity } from 'src/tanks/tank/entities/tanks.entity';
import { AngarRepository } from './angar.repository';
import { Mapper } from 'src/helpers/mappers';

import { 
  GermanFactory,
  SovietFactory,
  JapaneseFactory,
  AmericanFactory,
  BritishFactory,
  TankFactory 
} from 'src/tanks/factories';


@Injectable()
export class AngarService {
  private readonly NaziFactory: GermanFactory;
  private readonly UssrFactory: SovietFactory;
  private readonly JapanFactory: JapaneseFactory;
  private readonly UsaFactory: AmericanFactory;
  private readonly UkFactory: BritishFactory;
  
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
    result.set("JAPAN", this.JapanFactory);
    result.set("USA", this.UsaFactory);
    result.set("UK", this.UkFactory);

    return result;
  }
}
