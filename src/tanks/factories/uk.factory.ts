import { TankPrototype } from "../tank/tank.prototype";
import { TankFactory } from "./tank.factory";

export class BritishFactory extends TankFactory {
    public buildCromwell(): TankPrototype {
      return this.builder
        .addGun({ calibre: 75, ammo: 64, range: 600, rate: 10 })
        .addTurret({ rotationSpeed: 16, armor: 76, elevation: 25, stabilization: false })
        .finish();
    }
  
    public buildChurchill(): TankPrototype {
      return this.builder
        .addGun({ calibre: 75, ammo: 84, range: 500, rate: 6 })
        .addTurret({ rotationSpeed: 10, armor: 152, elevation: 20, stabilization: false })
        .finish();
    }
}
  