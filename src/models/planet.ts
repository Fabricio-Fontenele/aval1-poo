import { CargoType } from "src/types/cargoType"
import { PlanetType } from "src/types/planetType"

export abstract class Planet {
    name: string
    planetType: PlanetType
    distance: number
    atmosphere: string
    acceptedCargo: CargoType[]

    constructor(name: string, planetType: PlanetType, distance: number, atmosphere: string, acceptedCargo: CargoType[]) {
        this.name = name
        this.planetType = planetType
        this.distance = distance
        this.atmosphere = atmosphere
        this.acceptedCargo = acceptedCargo
    }

    addAcceptCargos(cargo: CargoType) {
        this.acceptedCargo.push(cargo)
    }

    
}
