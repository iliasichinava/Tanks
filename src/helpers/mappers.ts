import { TankDto } from "src/tanks/tank/dto/tanks.dto";
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
        const result: TankDto = new TankDto();

        //TODO: loop through field of entity and copy it to dto
        result.name = e.name;
        
        return result;
    }

    public static dtoToEntity(dto: TankDto): TankEntity {
        const result: TankEntity = new TankEntity();

        //TODO: loop through field of dto and copy it to entity 
        result.name = dto.name;
        
        return result;
        
    }
}