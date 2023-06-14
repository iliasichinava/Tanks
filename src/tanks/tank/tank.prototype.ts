import { Mapper } from "src/helpers/mappers";
import { Gun, Turret } from "./parts";
import { GunDto, TurretDto } from "./dto";

export class TankPrototype {
  private name: string;
  private gun: GunDto | null;
  private turret: TurretDto | null;

  public constructor() { }

  public addName(n: string): this {
    this.name = n;
    return this;
  }

  public addGun(gun: Gun): this {
    this.gun = Mapper.objectToDto(gun);
    return this;
  } 

  public addTurret(turret: Turret): this {
    this.turret = Mapper.objectToDto(turret);
    return this;
  }

  public finish() {
    return this;
  }
}
