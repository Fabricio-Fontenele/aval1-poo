import { CargoType } from "../types/types";

export abstract class Cargo {
  constructor(public readonly weight: number, public readonly cargoType: CargoType) {}
}
