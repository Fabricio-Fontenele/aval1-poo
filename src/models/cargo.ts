import { CargoType } from "../types/types";

export abstract class Cargo {
  constructor(public weight: number, public cargoType: CargoType) {}
}
