import { ShieldType} from "src/types/types"

export const AtmosphereCompatibility: Record<string, ShieldType[]> = {
  'corrosive': [ShieldType.corrosionResistant],
  'toxic': [ShieldType.biohazardSealed,],
  'explosive': [ShieldType.chemicalResistant],
  'radioactive': [ShieldType.radiationShielded],
  'thin': [ShieldType.radiationShielded],
  'dense': [ShieldType.reinforcedHull]
}
