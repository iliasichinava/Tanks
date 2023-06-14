import { ObjectType, Field } from '@nestjs/graphql';
import { DTO } from './interface';

@ObjectType()
export class GunDto implements DTO {
  @Field()
  id: number;

  @Field()
  calibre: number;

  @Field()
  ammo: number;

  @Field()
  rate: number;

  @Field()
  range: number;
}
