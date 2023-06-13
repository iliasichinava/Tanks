import { Gun, GunProps, Turret, TurretProps } from "./parts";
import { TankPrototype as Prototype } from "./tank.prototype";

export class TankBuilder {
  
  private product: Prototype;

  public constructor(TankPrototype: Prototype) {
    this.product = TankPrototype;
  }

  public addName(s: string) {
    this.product.addName(s);
    return this;
  }

  public addGun({ calibre, ammo, range, rate }: GunProps): this {
    let new_gun = new Gun({ calibre, ammo, range, rate});
    this.product.addGun(new_gun);
    return this;
  }

  public addTurret({ rotationSpeed, armor, elevation, stabilization }: TurretProps): this {
    let new_turret = new Turret({ rotationSpeed, armor, elevation, stabilization });
    this.product.addTurret(new_turret);
    return this;
  }

  public finish(): Prototype {
    return this.product;
  }
}