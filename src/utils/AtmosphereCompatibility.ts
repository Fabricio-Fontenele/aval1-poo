import { ShieldType} from "src/types/types"

export const AtmosphereCompatibility: Record<string, ShieldType[]> = {
  'corrosive': [ShieldType.corrosionResistant],
  'toxic': [ShieldType.biohazardSealed],
  'explosive': [ShieldType.chemicalResistant],
  'radiactive': [ShieldType.radiationShielded],
  'thin': [ShieldType.radiationShielded],
  'dense': [ShieldType.reinforcedHull]
}
