import { TankPrototype } from "../tank/tank.prototype";
import { TankFactory } from "./tank.factory";

export class SovietFactory extends TankFactory {
  public buildT34(): TankPrototype {
    return this.builder
      .addName("T34")
      .addGun({ calibre: 76, ammo: 100, range: 500, rate: 5 })
      .addTurret({ rotationSpeed: 12, armor: 45, elevation: 85, stabilization: false })
      .finish();
  }

  public buildIS2(): TankPrototype {
    return this.builder
      .addName("IS2")
      .addGun({ calibre: 122, ammo: 28, range: 700, rate: 3 })
      .addTurret({ rotationSpeed: 8, armor: 120, elevation: 45, stabilization: false })
      .finish();
  }
}
