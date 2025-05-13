import {
  BioSample,
  CommunicationModule,
  OxygenTank,
  ShieldedCapsule,
  SupplyBox,
} from "src/cargos/cargos";
import { Cargo } from "src/models/cargo";
import { Planet } from "src/models/planet";
import { SpaceShips } from "src/models/spaceship";
import {
  Aquahell,
  Florite,
  Luminid,
  Nebularic,
  Roxil,
} from "src/planets/planets";
import {
  GoliathHauler,
  NovaDrift,
  PixieRunner,
  StellarCreate,
  TitanCarrier,
} from "src/ships/ships";
import { AtmosphereCompatibility } from "src/utils/AtmosphereCompatibility";
import { randomChoice } from "src/utils/randons";

export class Mission {
  private spaceships: SpaceShips[] = [];
  private planets: Planet[] = [];
  private cargos: Cargo[] = [];

  constructor() {}

  // MÉTODO RESPONSÁVEL POR INICIAR A MISSÃO
  start(): void {
    const planets = [
      new Roxil(),
      new Florite(),
      new Luminid(),
      new Aquahell(),
      new Nebularic(),
    ];
    const selectedPlanet = randomChoice(planets);

    const atmosphere = selectedPlanet.atmosphere;
    const compatibleShields = AtmosphereCompatibility[atmosphere];
    const selectedShield = randomChoice(compatibleShields);

    const shipOptions = [
      new GoliathHauler(selectedShield),
      new NovaDrift(selectedShield),
      new PixieRunner(selectedShield),
      new StellarCreate(selectedShield),
      new TitanCarrier(selectedShield),
    ];

    const selectedShip = randomChoice(shipOptions);

    const allCargos = [
      new BioSample(),
      new OxygenTank(),
      new ShieldedCapsule(),
      new SupplyBox(),
      new CommunicationModule(),
    ];

    const compatibleCargo = allCargos.filter(
      (cargo) =>
        selectedPlanet.acceptedCargo.includes(cargo.cargoType) &&
        selectedShip.canCarry(cargo)
    );

    if (compatibleCargo.length === 0) {
      console.log("❌ Nenhuma carga compatível com o planeta e nave.");
      return;
    }
  }

  // MÉTODO RESPONSÁVEL POR IMPRIMIR TODAS AS INFORMAÇÕES DA MISSÃO
  showReport(): void {}
}
