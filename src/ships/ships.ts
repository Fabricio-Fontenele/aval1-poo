import { SpaceShips } from "src/models/spaceship";
import { ShieldType, ShipTypes } from "src/types/types";

export class PixieRunner extends SpaceShips {
  static readonly Ship = ShipTypes[0];
  static readonly fuel = 2500;
  static readonly maxCapacity = 2000;

  constructor(shield: ShieldType) {
    super(PixieRunner.Ship, shield, PixieRunner.fuel, PixieRunner.maxCapacity);
  }
}
export class StellarCreate extends SpaceShips {
  static readonly Ship = ShipTypes[1];
  static readonly fuel = 6000;
  static readonly maxCapacity = 40000;

  constructor(shield: ShieldType) {
    super(
      StellarCreate.Ship,
      shield,
      StellarCreate.fuel,
      StellarCreate.maxCapacity
    );
  }
}
export class NovaDrift extends SpaceShips {
  static readonly Ship = ShipTypes[2];
  static readonly fuel = 4000;
  static readonly maxCapacity = 10000;

  constructor(shield: ShieldType) {
    super(NovaDrift.Ship, shield, NovaDrift.fuel, NovaDrift.maxCapacity);
  }
}

export class GoliathHauler extends SpaceShips {
  static readonly Ship = ShipTypes[3];
  static readonly fuel = 6000;
  static readonly maxCapacity = 40000;

  constructor(shield: ShieldType) {
    super(
      GoliathHauler.Ship,
      shield,
      GoliathHauler.fuel,
      GoliathHauler.maxCapacity
    );
  }
}

export class TitanCarrier extends SpaceShips {
  static readonly Ship = ShipTypes[4];
  static readonly fuel = 8000;
  static readonly maxCapacity = 120000;

  constructor(shield: ShieldType) {
    super(
      TitanCarrier.Ship,
      shield,
      TitanCarrier.fuel,
      TitanCarrier.maxCapacity
    );
  }
}
