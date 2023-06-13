import { Query, Resolver, Mutation, Args } from '@nestjs/graphql';
import { AngarService } from './angar.service';
import { TankDto } from '../tanks/tank/dto/tanks.dto';
import { TankEntity } from 'src/tanks/tank/entities/tanks.entity';


@Resolver(() => TankDto)
export class AngarResolver {
  public constructor(private readonly angarService: AngarService) {}

  @Query(() => [TankDto])
  public getTanks() {
    return this.angarService.readTanks();
  }

  @Mutation(() => TankDto)
  public async createTank(@Args('country') country: string, @Args("tank") tank: string): Promise<TankEntity> {
    return this.angarService.create(country, tank);
  }

}
