import { ShipTypes } from "src/types/ShipType";
import { Planet } from "./planet";
import { Cargo } from "./cargo";
import { shieldType } from "src/types/shieldType";

export abstract class SpaceShips {
  public readonly typeShip: ShipTypes;
  public readonly shield: shieldType[];
  public readonly fuel: number;
  public readonly capacity: number;
  public readonly speed: number;

  constructor(
    typeShip: ShipTypes,
    shield: shieldType[],
    fuel: number,
    capacity: number,
    speed: number
  ) {
    this.typeShip = typeShip;
    this.shield = shield;
    this.fuel = fuel;
    this.capacity = capacity;
    this.speed = speed;
  }

  canTravelTo(planet: Planet, cargo: Cargo): boolean {
    //** Se o planeta recebe a carga == True, se a atmosfera for compatível com as condiçoes da nave == True
    // Se não == FALSE*/
    if (planet.acceptedCargo.includes(cargo.cargoType)) {
      return true;
    } else {
      return false;
    }
  }
}
