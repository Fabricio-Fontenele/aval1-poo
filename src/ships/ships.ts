import { SpaceShips } from "src/models/spaceship";
import { shieldType, ShipTypes } from "src/types/types";

export class GoliathHauler extends SpaceShips {
  static readonly Ship = ShipTypes.GoliathHauler;
  static readonly fuel = 6000;
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

export class NovaDrift extends SpaceShips {
  static readonly Ship = ShipTypes.stellarCreate;
  static readonly fuel = 4000;
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

export class PixieRunner extends SpaceShips {
  static readonly Ship = ShipTypes.PixieRunner;
  static readonly fuel = 2500;
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

export class stellarCreate extends SpaceShips {
  static readonly Ship = ShipTypes.stellarCreate;
  static readonly fuel = 6000;
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

export class TitanCarrier extends SpaceShips {
  static readonly Ship = ShipTypes.TitanCarrier;
  static readonly fuel = 8000;
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
