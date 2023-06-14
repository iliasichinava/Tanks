import { DTO } from "src/tanks/tank/dto/interface";
import { TankDto } from "src/tanks/tank/dto/tanks.dto";
import { TurretDto } from "src/tanks/tank/dto/turret.dto";
import { TankEntity } from "src/tanks/tank/entities/tanks.entity";
import { TankPrototype } from "src/tanks/tank/tank.prototype";

export class Mapper {
    public static prototypeToDto(prot: TankPrototype): TankDto {
        const name = prot['name'];
        const gun = prot['gun'];
        const turret = prot['turret'];
    
        const tankDto = new TankDto();
        tankDto.name = name;
        tankDto.gun = gun;
        tankDto.turret = turret;
    
        return tankDto;
    }

    public static entityToDto(e: TankEntity): TankDto {
        let result: TankDto = new TankDto();
      
        result.name = e.name;
        result.gun = {...e.gun};

        return result;
    }
      
    public static async dtoToEntity(dto: TankDto): Promise<TankEntity> {
        return new Promise((resolve, reject) => {
            try {
                let result: TankEntity = new TankEntity();
        
                result.name = dto.name;
                result.gun = {...dto.gun};
                result.turret = {...dto.turret};
                return resolve(result);                        
            } catch (error) {
                return reject(error);
            }
        })
    }

    public static objectToDto(obj: any): any {
        const dto: DTO = Object.create({});
        for (const key in obj) {
            if (obj.hasOwnProperty(key)) {
              let k = key.substring(1);
              dto[k] = obj[k];
            }
        }
        return dto;
    }

}