import { CargoType } from "src/types/types";

export class Cargo {
  public readonly cargoType: CargoType;
  public readonly isShielded: boolean;

  constructor(cargoType: CargoType, isShielded: boolean) {
    this.cargoType = cargoType;
    this.isShielded = isShielded;
  }
}

export { CargoType };
