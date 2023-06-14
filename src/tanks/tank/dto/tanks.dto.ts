import { ObjectType, Field } from '@nestjs/graphql';
import { GunDto } from './gun.dto';
import { TurretDto } from './turret.dto';
import { DTO } from './interface';

@ObjectType()
export class TankDto implements DTO {
  @Field()
  id: number;

  @Field()
  name: string;

  @Field()
  gun: GunDto;

  @Field()
  turret: TurretDto;
}
