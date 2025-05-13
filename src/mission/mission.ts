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
  stellarCreate,
  TitanCarrier,
} from "src/ships/ships";
import { shieldType } from "src/types/types";

export class Mission {
  private ship: SpaceShips | null = null;
  private planet: Planet | null = null;

  constructor(
    private planets: (new () => Planet)[] = [
      Nebularic,
      Luminid,
      Florite,
      Aquahell,
      Roxil,
    ],

    private shipDisponibolity: (new (shield: shieldType) => SpaceShips)[] = [
      GoliathHauler,
      NovaDrift,
      PixieRunner,
      stellarCreate,
      TitanCarrier,
    ]
  ) {}

  // MÉTODOS RESPONSÁVEIS POR FAZER AS ESCOLHAS ALEATÓROIAS DOS PLANETAS E DAS NAVES

  public assignedShip(): SpaceShips {
    const index = Math.floor(Math.random() * this.shipDisponibolity.length);
    const chosenShip = this.shipDisponibolity[index];

    const availableShields: shieldType[] = [
      shieldType.BioFilterShield,
      shieldType.ThermalShield,
      shieldType.RadiationShield,
      shieldType.PhaseShield,
      shieldType.CorrosionShield,
      shieldType.CryoInsulationShield,
      shieldType.MagneticDisruptor,
    ];

    const randomShield =
      availableShields[Math.floor(Math.random() * availableShields.length)];

    return new chosenShip(randomShield);
  }

  public assignedPlanet(): Planet {
    const index = Math.floor(Math.random() * this.planets.length);
    const chosenPlanet = this.planets[index];

    return new chosenPlanet();
  }

  /////////////////////////////////////////////////////////////////////////////////////

  // MÉTODO RESPONSÁVEL POR INICIAR A MISSÃO
  start(): void {}

  // MÉTODO RESPONSÁVEL POR IMPRIMIR TODAS AS INFORMAÇÕES DA MISSÃO
  showReport(): void {}
}
