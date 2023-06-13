import { TankPrototype } from "../tank/tank.prototype";
import { TankFactory } from "./tank.factory";

export class GermanFactory extends TankFactory {

    public buildLeopard(): TankPrototype {
        return this.builder
            .addName("Leopard")
            .addGun({ calibre: 105, ammo: 42, range: 2500, rate: 10 })
            .addTurret({ rotationSpeed: 36, armor: 50, elevation: 20, stabilization: true })
            .finish();
    }

    public buildTiger(): TankPrototype {
        return this.builder
            .addName("Tiger")
            .addGun({ calibre: 88, ammo: 92, range: 1700, rate: 6 })
            .addTurret({ rotationSpeed: 25, armor: 100, elevation: 18, stabilization: false })
            .finish();
    }

}
