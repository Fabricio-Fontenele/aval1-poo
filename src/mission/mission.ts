import {
  BioSample,
  CommunicationModule,
  OxygenTank,
  ShieldedCapsule,
  SupplyBox,
} from "src/cargos/cargos"
import { Cargo } from "src/models/cargo"
import { Planet } from "src/models/planet"
import { SpaceShips } from "src/models/spaceship"
import { Aquahell, Florite, Luminid, Nebularic, Roxil } from "src/planets/planets"
import {
  GoliathHauler,
  NovaDrift,
  PixieRunner,
  StellarCreate,
  TitanCarrier,
} from "src/ships/ships"
import { ShieldType } from "src/types/types"
import { AtmosphereCompatibility } from "src/utils/AtmosphereCompatibility"
import { randomChoice } from "src/utils/randons"

export class Mission {
  private planet: Planet
  private spaceship: SpaceShips
  private cargo: Cargo
  private missionName: string
  private fuelRemaining: number = 0
  private failureReasons: string[] = []

  private cargoDelivered: boolean = false
  private missionSuccess: boolean = false
  private shieldCompatible: boolean = false

  constructor(name: string) {
    this.missionName = name
    this.planet = this.getRandomPlanet()
    const shield = this.getShieldCompatibleWithAtmosphere(this.planet.atmosphere)
    this.spaceship = this.getRandomShip(shield)
    this.cargo = this.getRandomCompatibleCargo()

    this.evaluateMission()
  }

  private getRandomPlanet(): Planet {
    const allPlanets = [
      new Roxil(),
      new Florite(),
      new Luminid(),
      new Aquahell(),
      new Nebularic(),
    ]
    
    return randomChoice(allPlanets)
  }

  private getShieldCompatibleWithAtmosphere(atmosphere: string): ShieldType {
    const possibleShields = AtmosphereCompatibility[atmosphere]
    
    return randomChoice(possibleShields)
  }

  private getRandomShip(shield: ShieldType): SpaceShips {
    const ships = [
      new GoliathHauler(shield),
      new NovaDrift(shield),
      new PixieRunner(shield),
      new StellarCreate(shield),
      new TitanCarrier(shield),
    ]
    
    return randomChoice(ships)
  }

  private getRandomCompatibleCargo(): Cargo {
    const allCargos = [
      new BioSample(),
      new CommunicationModule(),
      new OxygenTank(),
      new ShieldedCapsule(),
      new SupplyBox(),
    ]

    const valid = allCargos.filter((cargo) =>
      this.planet.acceptedCargo.includes(cargo.cargoName)
    )

    return valid.length > 0 ? randomChoice(valid) : randomChoice(allCargos)
  }

  
  private evaluateMission(): void {
    this.shieldCompatible = this.planet.isCompatible(this.spaceship)
    const canCarry = this.spaceship.canCarry(this.cargo)
    const canReach = this.spaceship.fuel >= this.planet.distanceToEarth

    if (!this.shieldCompatible)
      this.failureReasons.push("Escudo incompatível com a atmosfera do planeta.");
    if (!canCarry)
      this.failureReasons.push("Carga excede a capacidade máxima da nave.");
    if (!canReach)
      this.failureReasons.push("Combustível insuficiente para alcançar o destino.");

    this.cargoDelivered = this.shieldCompatible && canCarry && canReach
    this.missionSuccess = this.cargoDelivered;
    this.fuelRemaining = Math.max(0, this.spaceship.fuel - this.planet.distanceToEarth)
  }

  // MÉTODO RESPONSÁVEL POR IMPRIMIR TODAS AS INFORMAÇÕES DA MISSÃO
    public showReport(): void {
    console.log(`
             RELATÓRIO OFICIAL DE MISSÃO - ${this.missionName}
================================================================
NAVE RESPONSÁVEL - ${this.spaceship.typeShip}
CAPACIDADE MÁXIMA - ${this.spaceship.maxCapacity}
================================================================
DESTINO DA ENTREGA
----------------------------------------------------------------
Planeta: ${this.planet.name}
Atmosfera: ${this.planet.atmosphere}
Distância: ${this.planet.distanceToEarth} km
================================================================
DETALHES DA ENTREGA
----------------------------------------------------------------
Missão: ${this.missionName}
Carga: ${this.cargo.cargoName}
Peso Total: ${this.cargo.weight} kg
Entrega Realizada: ${this.cargoDelivered ? "SIM" : "NÃO"}
================================================================
STATUS DA MISSÃO
----------------------------------------------------------------
STATUS: ${this.missionSuccess ? "BEM-SUCEDIDA" : "FALHOU"}
${this.missionSuccess ? `Combustível Restante: ${this.fuelRemaining} L(${Math.floor((this.fuelRemaining / this.spaceship.fuel) * 100)}%)`: ""}
${!this.missionSuccess ? `Motivo${this.failureReasons.length > 1 ? 's' : ''}:\n- ${this.failureReasons.join('\n- ')}` : ""}
${this.missionSuccess ? `Entrega de ${this.cargo.cargoName} ao planeta ${this.planet.name} realizada com sucesso` : ""}
================================================================
            FIM DO RELATÓRIO - TRANSMISSÃO ENCERRADA
================================================================`)
  }
}
