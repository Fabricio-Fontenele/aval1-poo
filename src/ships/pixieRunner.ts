import { SpaceShips } from "src/models/spaceship";
import { shieldType, ShipTypes } from "src/types/types";

export class PixieRunner extends SpaceShips {
  static readonly Ship = ShipTypes.PixieRunner;
  static readonly fuel = 25000;
  static readonly maxCapacity = 2000;
  static readonly speed = 1800;
  constructor(shield: shieldType) {
    super(
      PixieRunner.Ship,
      shield,
      PixieRunner.fuel,
      PixieRunner.maxCapacity,
      PixieRunner.speed
    );
  }
}
