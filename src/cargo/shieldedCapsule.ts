import { Cargo, CargoType } from "src/models/cargo";

export class shieldedCapsule extends Cargo {
  static readonly cargoType = CargoType.ShieldedCapsule;

  constructor(isShielded: boolean) {
    super(shieldedCapsule.cargoType, isShielded);
  }
}
