import { Cargo, CargoType } from "src/models/cargo";

export class bioSample extends Cargo {
    
    static readonly cargoType = CargoType.BioSample
    
    constructor(isShielded: boolean) {
        super(bioSample.cargoType, isShielded)
    }
}