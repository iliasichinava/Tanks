export interface GunProps {
    calibre: number;
    rate: number;
    range: number;
    ammo: number;
}

export class Gun {
    public constructor({ calibre, rate, range, ammo }: GunProps) {
        this.calibre = calibre;
        this.rate = rate;
        this.range = range;
        this.ammo = ammo;
    }

    public fire(): boolean {
        if(this.ammo) {
            this.ammo--;
            return true;
        }
        return false;
    }

    private _calibre: number;
    private _rate: number;
    private _range: number;
    private _ammo: number;

    public get calibre(): number { return this._calibre; }
    public get rate(): number { return this._rate; }
    public get range(): number { return this._range; }
    public get ammo(): number { return this._ammo; }

    public set calibre(value: number) { this._calibre   = value; }
    public set rate   (value: number) { this._rate      = value; }
    public set range  (value: number) { this._range     = value; }
    public set ammo   (value: number) { this._ammo      = value; }
}