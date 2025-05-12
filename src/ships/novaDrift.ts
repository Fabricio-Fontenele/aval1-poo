import { SpaceShips } from "src/models/spaceship";
import { shieldType, ShipTypes } from "src/types/types";

export class NovaDrift extends SpaceShips {
  static readonly Ship = ShipTypes.stellarCreate;
  static readonly fuel = 50000;
  static readonly maxCapacity = 10000;
  static readonly speed = 1300;
  constructor(shield: shieldType) {
    super(
      NovaDrift.Ship,
      shield,
      NovaDrift.fuel,
      NovaDrift.maxCapacity,
      NovaDrift.speed
    );
  }
}
