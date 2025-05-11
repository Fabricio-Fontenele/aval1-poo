import { SpaceShips } from "src/models/spaceship"

type Mission = {
    nameMission: string,      // PODO SER O NOME DO PLANETA 
    resultOfMission: string
    frota: SpaceShips[]
}

class MissionConstrol {

    mission: Mission[]
    shipDisponiboliy: SpaceShips[]

    constructor(mission: Mission[], shipDisponibolity: SpaceShips[]) {
        this.mission = mission
        this.shipDisponiboliy = shipDisponibolity
    }

    assignedShip(): void {

        for (let i; i = 0; i < this.shipDisponiboliy.length) {
        
            let index = Math.floor(Math.random() * SpaceShips.length)
            const naveEscolhida = this.shipDisponiboliy[index]
        }
        
    }
}