import { TankPrototype } from "../tank/tank.prototype";
import { TankBuilder } from "../tank/tanks.builder";

export abstract class TankFactory {
    protected builder: TankBuilder;
    protected prototype: TankPrototype;
    
    public constructor() {
        this.prototype = new TankPrototype();
        this.builder = new TankBuilder(this.prototype);
    }
}