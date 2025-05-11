import { Cargo, CargoType } from "src/models/cargo";

export class OxygenTank extends Cargo {
  static readonly cargoType = CargoType.OxygenTank;

  constructor(isShielded: boolean) {
    super(OxygenTank.cargoType, isShielded);
  }
}
