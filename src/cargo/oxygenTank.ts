import { Cargo, CargoType } from "src/models/cargo";

export class OxygenTank extends Cargo {
  static readonly cargoType = CargoType.OxygenTank;

  constructor(weigth: number) {
    super(weigth,OxygenTank.cargoType);
  }
}
