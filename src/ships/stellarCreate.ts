import { SpaceShips } from "src/models/spaceship";
import { shieldType, ShipTypes } from "src/types/types";

export class stellarCreate extends SpaceShips {
  static readonly Ship = ShipTypes.stellarCreate;
  static readonly fuel = 100000;
  static readonly maxCapacity = 40000;
  static readonly speed = 900;
  constructor(shield: shieldType) {
    super(
      stellarCreate.Ship,
      shield,
      stellarCreate.fuel,
      stellarCreate.maxCapacity,
      stellarCreate.speed
    );
  }
}
