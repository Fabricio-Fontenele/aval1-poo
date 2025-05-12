import { SpaceShips } from "src/models/spaceship";
import { shieldType, ShipTypes } from "src/types/types";

export class TitanCarrier extends SpaceShips {
  static readonly Ship = ShipTypes.TitanCarrier;
  static readonly fuel = 200000;
  static readonly maxCapacity = 120000;
  static readonly speed = 600;
  constructor(shield: shieldType) {
    super(
      TitanCarrier.Ship,
      shield,
      TitanCarrier.fuel,
      TitanCarrier.maxCapacity,
      TitanCarrier.speed
    );
  }
}
