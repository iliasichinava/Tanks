export interface TurretProps {
    rotationSpeed: number;
    armor: number;
    elevation: number;
    stabilization: boolean;
}
  
export class Turret {
    private _rotationSpeed: number;
    private _armor: number;
    private _elevation: number;
    private _stabilization: boolean;

    public constructor(props: TurretProps) {
        this._rotationSpeed = props.rotationSpeed;
        this._armor = props.armor;
        this._elevation = props.elevation;
        this._stabilization = props.stabilization;
    }

    public get rotationSpeed(): number {
        return this._rotationSpeed;
    }

    public get armor(): number {
        return this._armor;
    }

    public get elevation(): number {
        return this._elevation;
    }

    public get stabilization(): boolean {
        return this._stabilization;
    }
}
  