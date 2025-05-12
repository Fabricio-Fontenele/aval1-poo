import { CargoType, PlanetType, TypeAtmosphere } from "src/types/types";
import { SpaceShips } from "./spaceship";
import { AtmosphereCompatibility } from "src/utils/AtmosphereCompatibility";

export abstract class Planet {
  name: string;
  atmosphereType: TypeAtmosphere;
  planetType: PlanetType;
  distanceToEarth: number;
  acceptedCargo: CargoType[];

  constructor(
    name: string,
    atmosphereType: TypeAtmosphere,
    planetType: PlanetType,
    distanceToEarth: number,
    acceptedCargo: CargoType[]
  ) {
    this.name = name;
    this.atmosphereType = atmosphereType;
    this.planetType = planetType;
    this.distanceToEarth = distanceToEarth;
    this.acceptedCargo = acceptedCargo;
  }

  isCompatible(ship: SpaceShips): boolean {
    return AtmosphereCompatibility[this.atmosphereType].includes(ship.shield);
  }
}
