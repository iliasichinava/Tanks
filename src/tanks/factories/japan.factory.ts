import { TankPrototype } from "../tank/tank.prototype";
import { TankFactory } from "./tank.factory";

export class JapaneseFactory extends TankFactory {
  public buildType97(): TankPrototype {
    return this.builder
      .addGun({ calibre: 57, ammo: 122, range: 400, rate: 4 })
      .addTurret({ rotationSpeed: 20, armor: 25, elevation: 25, stabilization: false })
      .finish();
  }

  public buildType95(): TankPrototype {
    return this.builder
      .addGun({ calibre: 37, ammo: 162, range: 250, rate: 8 })
      .addTurret({ rotationSpeed: 15, armor: 20, elevation: 20, stabilization: false })
      .finish();
  }
}