import { ObjectType, Field } from '@nestjs/graphql';

@ObjectType()
export class TurretDto {
  @Field()
  armor: number;

  @Field()
  elevation: number;

  @Field()
  stabilization: boolean;

  @Field()
  rotationSpeed: number;
}
