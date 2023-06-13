import { ObjectType, Field } from '@nestjs/graphql';
import { GunDto } from './gun.dto';
import { TurretDto } from './turret.dto';

@ObjectType()
export class TankDto {
  @Field()
  name: string;

  @Field()
  gun: GunDto;

  @Field()
  turret: TurretDto;
}
