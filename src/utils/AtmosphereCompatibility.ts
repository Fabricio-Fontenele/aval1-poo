import { ShieldType, TypeAtmosphere } from "src/types/types";

export const AtmosphereCompatibility: Record<TypeAtmosphere, ShieldType[]> = {
  [TypeAtmosphere.Corrosive]: [ShieldType.corrosionResistant],
  [TypeAtmosphere.Toxic]: [ShieldType.biohazardSealed],
  [TypeAtmosphere.Explosive]: [ShieldType.chemicalResistant],
  [TypeAtmosphere.Radioactive]: [ShieldType.radiationShielded],
  [TypeAtmosphere.Thin]: [ShieldType.radiationShielded],
  [TypeAtmosphere.Dense]: [ShieldType.reinforcedHull]
};
