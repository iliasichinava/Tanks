import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { AngarModule } from './angar/angar.module';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { TypeOrmModule } from "@nestjs/typeorm";
import { join } from 'path';
import { TankEntity } from './tanks/tank/entities/tanks.entity';
import { TurretEntity } from './tanks/tank/entities/turret.entity';
import { GunEntity } from './tanks/tank/entities/gun.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: process.env.MY_PASSWORD,
      database:'wot',
      entities : [TankEntity,TurretEntity,GunEntity],
      synchronize: true
    }),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
      playground: true,
      sortSchema: true
    }),
    AngarModule
  ],
  providers: [],
})
export class AppModule {}