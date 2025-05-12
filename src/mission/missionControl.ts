import { SpaceShips } from "src/models/spaceship";

export class MissionConstrol {
  private mission: Mission[] = [];
  private shipDisponiboliy: SpaceShips[] = [];

  constructor() {}

  private assignedShip(): SpaceShips {
    const index = Math.floor(Math.random() * this.shipDisponiboliy.length);
    const chosenShip = this.shipDisponiboliy[index];
    return chosenShip;
  }

  //*REPONSÁVEL POR INICIALIZAR A "MISSÃO",
  // CRIANDO AS INTÂNCIAS DAS CLASSES DE FORMA RANDÔMICA/
  startMisssion(): void {

    console.log('')
  }

  //*RESPONSÁVEL POR INFORMAR OS 'LOGS' DA MISSÃO/
  showReport(): void {}
}
