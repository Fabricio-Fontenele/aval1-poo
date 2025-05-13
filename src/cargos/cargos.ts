import { Cargo } from "src/models/cargo";
import { CargoType } from "src/types/types";

export class BioSample extends Cargo {
  static readonly cargoType = CargoType.BioSample
  static readonly bioSamploWeight = 15000

  constructor() {
    super(BioSample.bioSamploWeight, BioSample.cargoType);
  }
}

export class OxygenTank extends Cargo {
  static readonly cargoType = CargoType.OxygenTank;
  static readonly OxygenTankWeight = 30000;
  constructor() {
    super(OxygenTank.OxygenTankWeight, OxygenTank.cargoType);
  }
}

export class ShieldedCapsule extends Cargo {
  static readonly cargoType = CargoType.ShieldedCapsule;
  static readonly shieldedCapsuleWeight = 45000;

  constructor() {
    super(ShieldedCapsule.shieldedCapsuleWeight, ShieldedCapsule.cargoType);
  }
}

export class SupplyBox extends Cargo {
  static readonly cargoType = CargoType.SupplyBox;
  static readonly supplyBoxWeight = 60000;

  constructor() {
    super(SupplyBox.supplyBoxWeight, SupplyBox.cargoType);
  }
}

export class CommunicationModule extends Cargo {
  static readonly cargoType = CargoType.CommunicationModule;
  static readonly communicModuleWeight = 40000;

  constructor() {
    super(
      CommunicationModule.communicModuleWeight,
      CommunicationModule.cargoType
    );
  }
}
