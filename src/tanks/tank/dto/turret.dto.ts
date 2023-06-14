import { ObjectType, Field } from '@nestjs/graphql';
import { DTO } from './interface';

@ObjectType()
export class TurretDto implements DTO {
  @Field()
  id: number;

  @Field()
  armor: number;

  @Field()
  elevation: number;

  @Field()
  stabilization: boolean;

  @Field()
  rotationSpeed: number;
}
