import { TankPrototype } from "../tank/tank.prototype";
import { TankFactory } from "./tank.factory";

export class AmericanFactory extends TankFactory {
    public buildSherman(): TankPrototype {
      return this.builder
        .addGun({ calibre: 75, ammo: 90, range: 600, rate: 12 })
        .addTurret({ rotationSpeed: 15, armor: 63, elevation: 30, stabilization: false })
        .finish();
    }
  
    public buildM26(): TankPrototype {
      return this.builder
        .addGun({ calibre: 90, ammo: 70, range: 800, rate: 8 })
        .addTurret({ rotationSpeed: 18, armor: 101, elevation: 25, stabilization: false })
        .finish();
    }
}