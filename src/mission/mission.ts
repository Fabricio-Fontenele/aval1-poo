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
import { ShieldType } from "src/types/types";
import { AtmosphereCompatibility } from "src/utils/AtmosphereCompatibility";
import { alignLine, alignText } from "src/utils/formatedText";
import { randomChoice } from "src/utils/randons";

export class Mission {
  private planet: Planet;
  private spaceship: SpaceShips;
  private cargo: Cargo;
  private missionName: string;
  private fuelRemaining: number = 0;
  private failureReasons: string[] = [];

  private cargoDelivered: boolean = false;
  private missionSuccess: boolean = false;
  private shieldCompatible: boolean = false;

  constructor(name: string) {
    this.missionName = name;
    this.planet = this.getRandomPlanet();
    const shield = this.getShieldCompatibleWithAtmosphere(
      this.planet.atmosphere
    );
    this.spaceship = this.getRandomShip(shield);
    this.cargo = this.getRandomCompatibleCargo();

    this.evaluateMission();
  }

  private getRandomPlanet(): Planet {
    const allPlanets = [
      new Roxil(),
      new Florite(),
      new Luminid(),
      new Aquahell(),
      new Nebularic(),
    ];

    return randomChoice(allPlanets);
  }

  private getShieldCompatibleWithAtmosphere(atmosphere: string): ShieldType {
    const possibleShields = AtmosphereCompatibility[atmosphere];

    return randomChoice(possibleShields);
  }

  private getRandomShip(shield: ShieldType): SpaceShips {
    const ships = [
      new GoliathHauler(shield),
      new NovaDrift(shield),
      new PixieRunner(shield),
      new StellarCreate(shield),
      new TitanCarrier(shield),
    ];

    return randomChoice(ships);
  }

  private getRandomCompatibleCargo(): Cargo {
    const allCargos = [
      new BioSample(),
      new CommunicationModule(),
      new OxygenTank(),
      new ShieldedCapsule(),
      new SupplyBox(),
    ];

    const valid = allCargos.filter((cargo) =>
      this.planet.acceptedCargo.includes(cargo.cargoName)
    );

    return valid.length > 0 ? randomChoice(valid) : randomChoice(allCargos);
  }

  private evaluateMission(): void {
    this.shieldCompatible = this.planet.isCompatible(this.spaceship);
    const canCarry = this.spaceship.canCarry(this.cargo);
    const canReach = this.spaceship.fuel >= this.planet.distanceToEarth;

    if (!this.shieldCompatible)
      this.failureReasons.push(
        "Escudo incompatível com a atmosfera do planeta."
      );
    if (!canCarry)
      this.failureReasons.push("Carga excede a capacidade máxima da nave.");
    if (!canReach)
      this.failureReasons.push(
        "Combustível insuficiente para alcançar o destino."
      );

    this.cargoDelivered = this.shieldCompatible && canCarry && canReach;
    this.missionSuccess = this.cargoDelivered;
    this.fuelRemaining = Math.max(
      0,
      this.spaceship.fuel - this.planet.distanceToEarth
    );
  }

  // MÉTODO RESPONSÁVEL POR IMPRIMIR TODAS AS INFORMAÇÕES DA MISSÃO
  public showReport(): void {
    const failedDueToWeight = this.failureReasons.includes(
      "Carga excede a capacidade máxima da nave."
    );

    console.log(
      alignText(`RELATÓRIO DA MISSÃO - ${this.missionName}`, [">50"])
    );
    console.log(alignLine("=", [63]));

    console.log(
      alignText(`NAVE RESPONSÁVEL - ${this.spaceship.typeShip}`, ["<63"])
    );
    console.log(
      alignText(`CAPACIDADE MÁXIMA - ${this.spaceship.maxCapacity}`, ["<63"])
    );
    console.log(alignLine("=", [63]));

    console.log(alignText("DESTINO DA ENTREGA", ["<63"]));
    console.log(alignLine("-", [63]));
    console.log(alignText("Planeta: Florite", ["<63"]));
    console.log(alignText("Atmosfera: radioactive", ["<63"]));
    console.log(alignText("Distância: 4216 km", ["<63"]));
    console.log(alignLine("=", [63]));

    console.log(alignText("DETALHES DA ENTREGA", [""]));
    console.log(alignLine("-", [63]));
    console.log(alignText(`Missão: ${this.missionName}`, ["<63"]));
    console.log(alignText(`Carga: ${this.cargo.cargoName}`, ["<63"]));
    console.log(alignText(`Peso Total: ${this.cargo.weight} kg`, ["<63"]));
    console.log(
      alignText(`Entrega Realizada: ${this.cargoDelivered ? "SIM" : "NÃO"}`, [
        "<63",
      ])
    );
    console.log(alignLine("=", [63]));

    console.log(
      alignText(`STATUS: ${this.missionSuccess ? "BEM-SUCEDIDA" : "FALHOU"}`, [
        "<63",
      ])
    );
    console.log(alignLine("-", [63]));
    console.log(
      alignText(
        `${
          this.missionSuccess
            ? `Combustível Restante: ${this.fuelRemaining} L (${Math.floor(
                (this.fuelRemaining / this.spaceship.fuel) * 100
              )}%)`
            : !failedDueToWeight
            ? `Combustível Restante: ${this.fuelRemaining} L (${Math.floor(
                (this.fuelRemaining / this.spaceship.fuel) * 100
              )}%)`
            : ""
        }
${
  !this.missionSuccess
    ? `Motivo${
        this.failureReasons.length > 1 ? "s" : ""
      }:\n- ${this.failureReasons.join("\n- ")}`
    : ""
}
${
  this.missionSuccess
    ? `${this.cargo.cargoName} entrega ao planeta ${this.planet.name} bem sucedida`
    : ""
}`,
        ["<63"]
      )
    );
    console.log();

    console.log(alignText("FIM DO RELATÓRIO - TRANSMISSÃO ENCERRADA", [">50"]));
    console.log(alignLine("=", [63]))
    console.log()
  }
}
