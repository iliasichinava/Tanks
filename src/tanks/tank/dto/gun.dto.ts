import { ObjectType, Field } from '@nestjs/graphql';

@ObjectType()
export class GunDto {
  @Field()
  calibre: number;

  @Field()
  ammo: number;

  @Field()
  rate: number;

  @Field()
  range: number;
}
