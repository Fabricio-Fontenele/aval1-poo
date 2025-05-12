import { Cargo } from "src/models/cargo";
import { CargoType } from "src/types/types";


export class bioSample extends Cargo {
  static readonly cargoType = CargoType.BioSample;
  static readonly bioSamploWeight = 15000

  constructor() {
    super(bioSample.bioSamploWeight, bioSample.cargoType);
  }
}

export class OxygenTank extends Cargo {
  static readonly cargoType = CargoType.OxygenTank;
  static readonly OxygenTankWeight = 30000
  constructor() {
    super(OxygenTank.OxygenTankWeight,OxygenTank.cargoType);
  }
}

export class shieldedCapsule extends Cargo {
  static readonly cargoType = CargoType.ShieldedCapsule;
  static readonly shieldedCapsuleWight = 45000

  constructor() {
    super(shieldedCapsule.shieldedCapsuleWight, shieldedCapsule.cargoType);
  }
}

export class SupplyBox extends Cargo {
  static readonly cargoType = CargoType.SupplyBox;
  static readonly supplyBoxWeight = 60000

  constructor() {
    super(SupplyBox.supplyBoxWeight, SupplyBox.cargoType);
  }
}

export class CommunicationModule extends Cargo {
  static readonly cargoType = CargoType.SupplyBox;
  static readonly communicModuleWeight = 40000

  constructor() {
    super(CommunicationModule.communicModuleWeight, CommunicationModule.cargoType);
  }
}