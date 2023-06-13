import { GunDto } from "./dto/gun.dto";
import { TurretDto } from "./dto/turret.dto";
import { Gun, Turret } from "./parts";

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
    const dto: GunDto = new GunDto();
    dto.calibre = gun.calibre;
    dto.range = gun.range;
    dto.rate = gun.rate;
    dto.ammo = gun.ammo;

    this.gun = dto;

    return this;
  } 

  public addTurret(turret: Turret): this {
    const dto: TurretDto = new TurretDto();
    dto.rotationSpeed = turret.rotationSpeed;
    dto.elevation = turret.elevation;
    dto.armor = turret.armor;
    dto.stabilization = turret.stabilization;

    this.turret = dto;

    return this;
  }

  public finish() {
    return this;
  }
}
