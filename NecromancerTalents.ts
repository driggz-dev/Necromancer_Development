import {SQL, std} from "wow/wotlk";
import {REDUCE_DAMAGE_DONE_BY_2, REDUCE_DAMAGE_DONE_BY_4, REDUCE_DAMAGE_DONE_BY_6, REDUCE_DAMAGE_DONE_BY_8, REDUCE_DAMAGE_DONE_BY_10}  from "./DamageReductionSpells"
import { POISON_AND_BONES, REANIMATION, CURSES_AND_BLOOD } from "./necromancer";
const MODNAME = 'NecromancerTalents'





/******************************************************************
 * Poison and Bones Talents (Tank or Dps)
 ******************************************************************/

// Lich Flesh R1 (talent)
const LICH_FLESH_R1 = std.Spells.create(MODNAME, 'LFpassiveR1', 16931)
LICH_FLESH_R1.Name.enGB.set('Lich Flesh');
LICH_FLESH_R1.Rank.set(1,1)
LICH_FLESH_R1.SkillLines.add(POISON_AND_BONES.ID)
LICH_FLESH_R1.Attributes.IS_PASSIVE.set(1)
LICH_FLESH_R1.Effects.get(0).PointsBase.set(99)
LICH_FLESH_R1.Effects.get(0).PointsDieSides.set(1)
LICH_FLESH_R1.Description.enGB.set('Increases your armor contribution from cloth items by $s1%, and reduces damage done by 2%.')
LICH_FLESH_R1.Effects.addMod(eff => eff
    .Type.TRIGGER_SPELL.set()
    .TriggerSpell.set(REDUCE_DAMAGE_DONE_BY_2.ID)
)

// Lich Flesh R2 (talent)
const LICH_FLESH_R2 = std.Spells.create(MODNAME, 'LFpassiveR2', 16931)
LICH_FLESH_R2.Name.enGB.set('Lich Flesh');
LICH_FLESH_R2.Rank.set(1,2)
LICH_FLESH_R2.SkillLines.add(POISON_AND_BONES.ID)
LICH_FLESH_R2.Attributes.IS_PASSIVE.set(1)
LICH_FLESH_R2.Effects.get(0).PointsBase.set(199)
LICH_FLESH_R2.Effects.get(0).PointsDieSides.set(1)
LICH_FLESH_R2.Description.enGB.set('Increases your armor contribution from cloth items by $s1%, and reduces damage done by 4%.')
LICH_FLESH_R2.Effects.addMod(eff => eff
    .Type.TRIGGER_SPELL.set()
    .TriggerSpell.set(REDUCE_DAMAGE_DONE_BY_4.ID)
)

// Lich Flesh R3 (talent)
const LICH_FLESH_R3 = std.Spells.create(MODNAME, 'LFpassiveR3', 16931)
LICH_FLESH_R3.Name.enGB.set('Lich Flesh');
LICH_FLESH_R3.Rank.set(1,3)
LICH_FLESH_R3.SkillLines.add(POISON_AND_BONES.ID)
LICH_FLESH_R3.Attributes.IS_PASSIVE.set(1)
LICH_FLESH_R3.Effects.get(0).PointsBase.set(299)
LICH_FLESH_R3.Effects.get(0).PointsDieSides.set(1)
LICH_FLESH_R3.Description.enGB.set('Increases your armor contribution from cloth items by $s1%, and reduces damage done by 6%.')
LICH_FLESH_R3.Effects.addMod(eff => eff
    .Type.TRIGGER_SPELL.set()
    .TriggerSpell.set(REDUCE_DAMAGE_DONE_BY_6.ID)
)

// Lich Flesh R4 (talent)
const LICH_FLESH_R4 = std.Spells.create(MODNAME, 'LFpassiveR4', 16931)
LICH_FLESH_R4.Name.enGB.set('Lich Flesh');
LICH_FLESH_R4.Rank.set(1,4)
LICH_FLESH_R4.SkillLines.add(POISON_AND_BONES.ID)
LICH_FLESH_R4.Attributes.IS_PASSIVE.set(1)
LICH_FLESH_R4.Effects.get(0).PointsBase.set(399)
LICH_FLESH_R4.Effects.get(0).PointsDieSides.set(1)
LICH_FLESH_R4.Description.enGB.set('Increases your armor contribution from cloth items by $s1%, and reduces damage done by 8%.')
LICH_FLESH_R4.Effects.addMod(eff => eff
    .Type.TRIGGER_SPELL.set()
    .TriggerSpell.set(REDUCE_DAMAGE_DONE_BY_8.ID)
)

// Lich Flesh R5 (talent)
const LICH_FLESH_R5 = std.Spells.create(MODNAME, 'LFpassiveR5', 16931)
LICH_FLESH_R5.Name.enGB.set('Lich Flesh');
LICH_FLESH_R5.Rank.set(1,5)
LICH_FLESH_R5.SkillLines.add(POISON_AND_BONES.ID)
LICH_FLESH_R5.Attributes.IS_PASSIVE.set(1)
LICH_FLESH_R5.Effects.get(0).PointsBase.set(499)
LICH_FLESH_R5.Effects.get(0).PointsDieSides.set(1)
LICH_FLESH_R5.Description.enGB.set('Increases your armor contribution from cloth items by $s1%, and reduces damage done by 10%.')
LICH_FLESH_R5.Effects.addMod(eff => eff
    .Type.TRIGGER_SPELL.set()
    .TriggerSpell.set(REDUCE_DAMAGE_DONE_BY_10.ID)
)

// Empowered Bone Armor Visual Trigger
const EMPOWERED_BONE_ARMOR_TRIGGER = std.Spells.create(MODNAME, 'EmpoweredBoneArmorVisual', 68335)
EMPOWERED_BONE_ARMOR_TRIGGER.Name.enGB.set('Empowered Curse Bones Armor Visual');
EMPOWERED_BONE_ARMOR_TRIGGER.Attributes.HIDE_FROM_AURA_BAR.set(1)
EMPOWERED_BONE_ARMOR_TRIGGER.Effects.get(0).PointsBase.set(-26)
EMPOWERED_BONE_ARMOR_TRIGGER.Effects.get(0).PointsDieSides.set(1)
const GRYPHON_BONE_ARMOR_VISUAL = std.Spells.load(54467).Visual.getRef()
const EMPOWERED_BONE_ARMOR_TRIGGER_VISUAL = EMPOWERED_BONE_ARMOR_TRIGGER.Visual.getRefCopy()
EMPOWERED_BONE_ARMOR_TRIGGER_VISUAL.StateKit.set(GRYPHON_BONE_ARMOR_VISUAL.StateKit.get())

// Empowered Bone Armor Talent
const EMPOWERED_BONE_ARMOR = std.Spells.create(MODNAME, 'EmpoweredBoneArmor', 49222)
EMPOWERED_BONE_ARMOR.Name.enGB.set('Empowered Curse Bones Armor');
EMPOWERED_BONE_ARMOR.SkillLines.add(POISON_AND_BONES.ID)
EMPOWERED_BONE_ARMOR.Power.PowerType.set("MANA")
EMPOWERED_BONE_ARMOR.Mana.PowerCostBase.set(0)
EMPOWERED_BONE_ARMOR.Mana.PowerCostPercent.set(10)
EMPOWERED_BONE_ARMOR.Cooldown.CategoryTime.set(1000)
EMPOWERED_BONE_ARMOR.Proc.Charges.set(1)
EMPOWERED_BONE_ARMOR.Proc.Chance.set(0)
EMPOWERED_BONE_ARMOR.Duration.setSimple(-1)
EMPOWERED_BONE_ARMOR.Attributes.DISPLAY_IN_STANCE_BAR.set(1)
EMPOWERED_BONE_ARMOR.Effects.get(0).PointsBase.set(-66)
EMPOWERED_BONE_ARMOR.Effects.get(0).PointsDieSides.set(1)
EMPOWERED_BONE_ARMOR.Effects.get(0).ImplicitTargetA.UNIT_CASTER.set()
EMPOWERED_BONE_ARMOR.Effects.get(1).clear()
EMPOWERED_BONE_ARMOR.Description.enGB.set('The necromancer incases $Ghimself:herself; with a layer of 4 empowered curse bones, shielding $Ghim:her; and reducing all damage taken by $s1% and reducing damage dealt by 25%. This ability lasts until cancelled.')
EMPOWERED_BONE_ARMOR.AuraDescription.enGB.set('The necromancer is surrounded by cursed bones, reducing $Ghis:her; damage taken by $s1% and damage dealt by 25%. This ability lasts until death.')
EMPOWERED_BONE_ARMOR.Effects.addMod(eff => eff
    .Type.TRIGGER_SPELL.set()
    .TriggerSpell.set(EMPOWERED_BONE_ARMOR_TRIGGER.ID)
)
EMPOWERED_BONE_ARMOR.Effects.addMod(eff => eff
    .Type.TRIGGER_SPELL.set()
    .TriggerSpell.set(57339)
)
EMPOWERED_BONE_ARMOR.Icon.set(4075)
const EMPOWERED_BONE_ARMOR_VISUAL = EMPOWERED_BONE_ARMOR.Visual.getRefCopy()
const LIFE_TAP_VISUAL = std.Spells.load(1454).Visual.getRef()
EMPOWERED_BONE_ARMOR_VISUAL.CastKit.set(LIFE_TAP_VISUAL.CastKit.get())