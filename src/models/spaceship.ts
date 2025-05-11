
import { shieldType, ShipTypes } from "src/types/types";

export abstract class SpaceShips {
  public readonly typeShip: ShipTypes;
  public readonly shield: shieldType;
  public readonly fuel: number;
  public readonly capacity: number;
  public readonly speed: number;

  constructor(
    typeShip: ShipTypes,
    shield: shieldType,
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
}
