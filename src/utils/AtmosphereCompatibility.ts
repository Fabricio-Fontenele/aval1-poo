import { shieldType } from "src/types/shieldType";
import { TypeAtmosphere } from "src/types/typeAtmosphere";


export const AtmosphereCompatibility: Record<TypeAtmosphere, shieldType[]> = {
  [TypeAtmosphere.Sporophic]: [shieldType.BioFilterShield],
  [TypeAtmosphere.Mercurial]: [shieldType.ThermalShield],
  [TypeAtmosphere.Etheralia]: [shieldType.PhaseShield],
  [TypeAtmosphere.Obscuria]: [shieldType. MagneticDisruptor],
  [TypeAtmosphere.Chernofrost]: [shieldType.RadiationShield, shieldType.CryoInsulationShield],
  [TypeAtmosphere.Vulcarine]: [shieldType.ThermalShield, shieldType.CorrosionShield],
  [TypeAtmosphere.Sulfarine]: [shieldType.CorrosionShield]
};
