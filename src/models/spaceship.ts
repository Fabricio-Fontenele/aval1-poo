import { ShipTypes } from "src/types/ShipType"

export abstract class SpaceShips {
    public readonly typeShip: ShipTypes
    public readonly fuel: number
    public readonly capacity: number
    public readonly speed: number

    constructor(typeShip: ShipTypes, fuel: number, capacity: number, speed: number) {
        this.typeShip = typeShip
        this.fuel = fuel
        this.capacity = capacity
        this.speed = speed
    }

    canTravelTo(planet: Planet): boolean {
        //** Se o planeta recebe a carga == True, se a atmosfera for compatível com as condiçoes da nave == True
        // Se não == FALSE*/
    }
    
}