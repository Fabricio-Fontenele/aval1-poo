import { SpaceShips } from "src/models/spaceship";
import { shieldType, ShipTypes } from "src/types/types";

export class GoliathHauler extends SpaceShips {
  static readonly Ship = ShipTypes.GoliathHauler;
  static readonly fuel = 100000;
  static readonly maxCapacity = 40000;
  static readonly speed = 900;
  constructor(shield: shieldType) {
    super(
      GoliathHauler.Ship,
      shield,
      GoliathHauler.fuel,
      GoliathHauler.maxCapacity,
      GoliathHauler.speed
    );
  }
}
