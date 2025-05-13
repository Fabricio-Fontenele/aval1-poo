import { ShieldType, ShipTypes } from "src/types/types";
import { Cargo } from "./cargo";

export class SpaceShips {
  public readonly typeShip: string
  public readonly shield: ShieldType
  public readonly fuel: number
  public readonly maxCapacity: number

  constructor(
    typeShip: string,
    shield: ShieldType,
    fuel: number,
    maxCapacity: number
  ) {
    this.typeShip = typeShip
    this.shield = shield
    this.fuel = fuel
    this.maxCapacity = maxCapacity
  }

  canCarry(cargo: Cargo): boolean {
    return cargo.weight <= this.maxCapacity;
  }
}
