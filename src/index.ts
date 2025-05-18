// FORMA DE USO ESPERADO!!!!!!!!!!!

// *AUTORES: string[] = [
// 'Ruan Pedro de Araujo Anjos,
// 'Denis do Nascimento Rodrigues,
// 'Fabrício Fontenele Vieira.]* //

import * as mission from "./mission/mission"

const mission1 = new mission.Mission('Interestellar')
mission1.showReport()

const mission2 = new mission.Mission('Super')
mission2.showReport()

const mission3 = new mission.Mission('Subnáutica')
mission3.showReport()