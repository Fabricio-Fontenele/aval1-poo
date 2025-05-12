import { Cargo, CargoType } from "src/models/cargo";

export class bioSample extends Cargo {
  static readonly cargoType = CargoType.BioSample;


  constructor(weigth: number) {
    super(weigth,bioSample.cargoType);
  }
}
