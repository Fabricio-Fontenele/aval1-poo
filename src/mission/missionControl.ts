import { SpaceShips } from "src/models/spaceship";

type Mission = {
  nameMission: string; // PODO SER O NOME DO PLANETA
  resultOfMission: string;
  frota: SpaceShips[];
};

export class MissionControl {
  private mission: Mission[] = [];
  private shipDisponiboliy: SpaceShips[] = [];

  constructor() {}

  addShip(ship:SpaceShips) {
    this.shipDisponiboliy.push(ship)
  }

  private assignedShip(): void {
    for (let i = 0; i < this.shipDisponiboliy.length; i++) {
      let index = Math.floor(Math.random() * SpaceShips.length);
      const naveEscolhida = this.shipDisponiboliy[index];
    }
  }

  //*REPONSÁVEL POR INICIALIZAR A "MISSÃO",
  // CRIANDO AS INTÂNCIAS DAS CLASSES DE FORMA RANDÔMICA/
  startMisssion(): void {}

  //*RESPONSÁVEL POR INFORMAR OS 'LOGS' DA MISSÃO/
  showReport(): void {}
}
