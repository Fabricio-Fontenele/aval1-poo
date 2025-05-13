import { Planet } from "src/models/planet"
import { CargoType, planetName, TypeAtmosphere } from "src/types/types"
import { random, randomChoice } from "src/utils/randons"

export class Nebularic extends Planet {
  static readonly randomAtmosphere = randomChoice(TypeAtmosphere)
  static readonly distanceForEarth = random(8000)
  static readonly AcceptedCargo: CargoType[] = [
    CargoType.ShieldedCapsule,
    CargoType.OxygenTank,
  ]

  constructor() {
    super(
      planetName[3],
      Nebularic.randomAtmosphere,
      Nebularic.distanceForEarth,
      Nebularic.AcceptedCargo
    );
  }
}

export class Luminid extends Planet {
  static readonly randomAtmosphere = randomChoice(TypeAtmosphere);
  static readonly distanceForEarth = random(8000);
  static readonly AcceptedCargo: CargoType[] = [CargoType.CommunicationModule];

  constructor() {
    super(
      planetName[1],
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
      planetName[2],
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
      planetName[3],
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
      planetName[4],
      Roxil.randomAtmosphere,
      Roxil.distanceForEarth,
      Roxil.AcceptedCargo
    );
  }
}
