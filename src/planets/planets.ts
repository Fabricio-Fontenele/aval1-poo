import { Planet } from "src/models/planet";
import { CargoType, planetName, TypeAtmosphere } from "src/types/types";
import { randNumber, randomSelection } from "src/utils/randons";


export class Nebularic extends Planet {
    static readonly nebularicAtmosphere = randomSelection(TypeAtmosphere, 1)
    static readonly distanceForEarth = randNumber(1000, 8000)
    static readonly AcceptedCargo: CargoType[] = [CargoType.ShieldedCapsule, CargoType.OxygenTank]

    constructor() {
        super(planetName[0], Nebularic.nebularicAtmosphere, Nebularic.distanceForEarth, Nebularic.AcceptedCargo)
    }
}

export class Luminid extends Planet {
    static readonly nebularicAtmosphere = randomSelection(TypeAtmosphere, 1)
    static readonly distanceForEarth = randNumber(1000, 8000)
    static readonly AcceptedCargo: CargoType[] = [CargoType.CommunicationModule]

    constructor() {
        super(planetName[1], Luminid.nebularicAtmosphere, Luminid.distanceForEarth, Luminid.AcceptedCargo)
    }
}

export class Florite extends Planet {
    static readonly nebularicAtmosphere = randomSelection(TypeAtmosphere, 1)
    static readonly distanceForEarth = randNumber(1000, 8000)
    static readonly AcceptedCargo: CargoType[] = [CargoType.SupplyBox, CargoType.OxygenTank, CargoType.BioSample]

    constructor() {
        super(planetName[0], Florite.nebularicAtmosphere, Florite.distanceForEarth, Florite.AcceptedCargo)
    }
}

export class Aquahell extends Planet {
    static readonly nebularicAtmosphere = randomSelection(TypeAtmosphere, 1)
    static readonly distanceForEarth = randNumber(1000, 8000)
    static readonly AcceptedCargo: CargoType[] = [CargoType.OxygenTank, CargoType.ShieldedCapsule]

    constructor() {
        super(planetName[0], Aquahell.nebularicAtmosphere, Aquahell.distanceForEarth, Aquahell.AcceptedCargo)
    }
}

export class Roxil extends Planet {
    static readonly nebularicAtmosphere = randomSelection(TypeAtmosphere, 1)
    static readonly distanceForEarth = randNumber(1000, 8000)
    static readonly AcceptedCargo: CargoType[] = [CargoType.ShieldedCapsule, CargoType.BioSample, CargoType.CommunicationModule]

    constructor() {
        super(planetName[0], Roxil.nebularicAtmosphere, Roxil.distanceForEarth, Roxil.AcceptedCargo)
    }
}

