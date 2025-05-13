import { Planet } from "src/models/planet";
import { CargoType, planetName, TypeAtmosphere } from "src/types/types";
import { random, randomChoice } from "src/utils/randons";

export class Nebularic extends Planet {
  static readonly randomAtmosphere = randomChoice(TypeAtmosphere);
  static readonly distanceForEarth = random(8000);
  static readonly AcceptedCargo: CargoType[] = [
    CargoType.ShieldedCapsule,
    CargoType.OxygenTank,
  ];

  constructor() {
    super(
      planetName.Nebularic,
      Nebularic.randomAtmosphere,
      Nebularic.distanceForEarth,
      Nebularic.AcceptedCargo
    );
  }
}

export class Luminid extends Planet {
  static readonly randomAtmosphere = randomChoice(TypeAtmosphere, 1);
  static readonly distanceForEarth = random(8000);
  static readonly AcceptedCargo: CargoType[] = [CargoType.CommunicationModule];

  constructor() {
    super(
      planetName.Luminid,
      Luminid.randomAtmosphere,
      Luminid.distanceForEarth,
      Luminid.AcceptedCargo
    );
  }
}

export class Florite extends Planet {
  static readonly randomAtmosphere = randomChoice(TypeAtmosphere);
  static readonly distanceForEarth = random(8000);
  static readonly AcceptedCargo: CargoType[] = [
    CargoType.SupplyBox,
    CargoType.OxygenTank,
    CargoType.BioSample,
  ];

  constructor() {
    super(
      planetName.Florite,
      Florite.randomAtmosphere,
      Florite.distanceForEarth,
      Florite.AcceptedCargo
    );
  }
}

export class Aquahell extends Planet {
  static readonly randomAtmosphere = randomChoice(TypeAtmosphere);
  static readonly distanceForEarth = random(8000);
  static readonly AcceptedCargo: CargoType[] = [
    CargoType.OxygenTank,
    CargoType.ShieldedCapsule,
  ];

  constructor() {
    super(
      planetName.Aquahell,
      Aquahell.randomAtmosphere,
      Aquahell.distanceForEarth,
      Aquahell.AcceptedCargo
    );
  }
}

export class Roxil extends Planet {
  static readonly randomAtmosphere = randomChoice(TypeAtmosphere);
  static readonly distanceForEarth = random(8000);
  static readonly AcceptedCargo: CargoType[] = [
    CargoType.ShieldedCapsule,
    CargoType.BioSample,
    CargoType.CommunicationModule,
  ];

  constructor() {
    super(
      planetName.Roxil,
      Roxil.randomAtmosphere,
      Roxil.distanceForEarth,
      Roxil.AcceptedCargo
    );
  }
}
