import { CargoType, planetName, TypeAtmosphere } from "src/types/types";
import { SpaceShips } from "./spaceship";
import { AtmosphereCompatibility } from "src/utils/AtmosphereCompatibility";

export class Planet {
  public readonly name: planetName;
  public readonly atmosphere: TypeAtmosphere
  public readonly distanceToEarth: number;
  public readonly acceptedCargo: CargoType[];

  constructor(
    name: planetName,
    atmosphere: TypeAtmosphere,
    distanceToEarth: number,
    acceptedCargo: CargoType[]
  ) {
    this.name = name;
    this.atmosphere = atmosphere;
    this.distanceToEarth = distanceToEarth;
    this.acceptedCargo = acceptedCargo;
  }

  isCompatible(ship: SpaceShips): boolean {
    return AtmosphereCompatibility[this.atmosphere].includes(ship.shield);
  }
}