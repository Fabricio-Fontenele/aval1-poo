import { Planet } from "src/models/planet";
import { CargoType, planetName, TypeAtmosphere } from "src/types/types";
import { randomSelection } from "src/utils/randons";


export class Nebularic extends Planet {
    static readonly distanceForEarth = randNumber(1000, 8000)
    static readonly AcceptedCargo: CargoType[] = [CargoType.ShieldedCapsule, CargoType.OxygenTank]

    constructor() {
        super(planetName.Nebularic, TypeAtmosphere.Obscuria, Nebularic.distanceForEarth, Nebularic.AcceptedCargo)
    }
}

export class Luminid extends Planet {
    static readonly distanceForEarth = randNumber(1000, 8000)
    static readonly AcceptedCargo: CargoType[] = [CargoType.CommunicationModule]

    constructor() {
        super(planetName.Luminid, TypeAtmosphere.Etheralia, Luminid.distanceForEarth, Luminid.AcceptedCargo)
    }
}

export class Florite extends Planet {
    static readonly distanceForEarth = randNumber(1000, 8000)
    static readonly AcceptedCargo: CargoType[] = [CargoType.SupplyBox, CargoType.OxygenTank, CargoType.BioSample]

    constructor() {
        super(planetName.Florite, TypeAtmosphere.Sporophic, Florite.distanceForEarth, Florite.AcceptedCargo)
    }
}

export class Aquahell extends Planet {
    static readonly distanceForEarth = randNumber(1000, 8000)
    static readonly AcceptedCargo: CargoType[] = [CargoType.OxygenTank, CargoType.ShieldedCapsule]

    constructor() {
        super(planetName.Aquahell, TypeAtmosphere.Sulfarine, Aquahell.distanceForEarth, Aquahell.AcceptedCargo)
    }
}

export class Roxil extends Planet {
    static readonly distanceForEarth = randNumber(1000, 8000)
    static readonly AcceptedCargo: CargoType[] = [CargoType.ShieldedCapsule, CargoType.BioSample, CargoType.CommunicationModule]

    constructor() {
        super(planetName.Roxil, TypeAtmosphere.Vulcarine, Roxil.distanceForEarth, Roxil.AcceptedCargo)
    }
}

