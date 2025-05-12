import { shieldType, ShipTypes } from "src/types/types";
import { Cargo } from "./cargo";

export abstract class SpaceShips {
  public readonly typeShip: ShipTypes;
  public readonly shield: shieldType;
  public readonly fuel: number;
  public readonly maxCapacity: number;
  public readonly speed: number;

  constructor(
    typeShip: ShipTypes,
    shield: shieldType,
    fuel: number,
    maxCapacity: number,
    speed: number
  ) {
    this.typeShip = typeShip;
    this.shield = shield;
    this.fuel = fuel;
    this.maxCapacity = maxCapacity;
    this.speed = speed;
  }

  canCarry(cargo: Cargo): boolean {
    return cargo.weight <= this.maxCapacity;
  }
}
