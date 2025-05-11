
import { CargoType, PlanetType } from "src/types/types";

export abstract class Planet {
  name: string;
  planetType: PlanetType;
  distanceToEarth: number;
  landViability: boolean;
  acceptedCargo: CargoType[];

  constructor(
    name: string,
    planetType: PlanetType,
    distanceToEarth: number,
    landViability: boolean,
    acceptedCargo: CargoType[]
  ) {
    this.name = name;
    this.planetType = planetType;
    this.distanceToEarth = distanceToEarth;
    this.landViability = landViability;
    this.acceptedCargo = acceptedCargo;
  }

  addAcceptCargos(cargo: CargoType): void {
    this.acceptedCargo.push(cargo);
  }
}
