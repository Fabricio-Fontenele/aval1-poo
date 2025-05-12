import { shieldType, TypeAtmosphere } from "src/types/types";

export const AtmosphereCompatibility: Record<string, shieldType[]> = {
  [TypeAtmosphere[0]]: [shieldType.BioFilterShield],
  [TypeAtmosphere[1]]: [shieldType.ThermalShield],
  [TypeAtmosphere[2]]: [shieldType.PhaseShield],
  [TypeAtmosphere[3]]: [shieldType. MagneticDisruptor],
  [TypeAtmosphere[4]]: [shieldType.RadiationShield, shieldType.CryoInsulationShield],
  [TypeAtmosphere[5]]: [shieldType.ThermalShield, shieldType.CorrosionShield],
  [TypeAtmosphere[6]]: [shieldType.CorrosionShield]
};
