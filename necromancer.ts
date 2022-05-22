const MODNAME = 'Necromancer'
import { SQL, std } from "wow/wotlk";

// Starting Gear Creation
const NECRO_STARTER_ROBE = std.Items
    .create(MODNAME,'NECROSTARTERROBE',10001)
    NECRO_STARTER_ROBE.Name.enGB.set("Apprentice Necromancer'S Robes");
    NECRO_STARTER_ROBE.Quality.set("WHITE")
    NECRO_STARTER_ROBE.Stats.clearAll()
    NECRO_STARTER_ROBE.Bonding.NO_BOUNDS.set()
    NECRO_STARTER_ROBE.Price.setAsCopper(1,1,1)
    NECRO_STARTER_ROBE.RequiredLevel.set(1)
    NECRO_STARTER_ROBE.Armor.set(3)

    const NECRO_STARTER_PANTS = std.Items
    .create(MODNAME,'NECROSTARTERPANTS',9999)
    NECRO_STARTER_PANTS.Name.enGB.set("Apprentice Necromancer'S Pants");
    NECRO_STARTER_PANTS.Quality.set("WHITE")
    NECRO_STARTER_PANTS.Stats.clearAll()
    NECRO_STARTER_PANTS.Bonding.NO_BOUNDS.set()
    NECRO_STARTER_PANTS.Price.setAsCopper(1,1,1)
    NECRO_STARTER_PANTS.RequiredLevel.set(1)
    NECRO_STARTER_PANTS.Armor.set(2)

    const NECRO_STARTER_BOOTS = std.Items.create( MODNAME, 'NECROSTARTERSHOES', 10026)
    NECRO_STARTER_BOOTS.Name.enGB.set("Apprentice Necromancer's Shoes");
    NECRO_STARTER_BOOTS.Quality.set("WHITE")
    NECRO_STARTER_BOOTS.Stats.clearAll()
    NECRO_STARTER_BOOTS.Bonding.NO_BOUNDS.set()
    NECRO_STARTER_BOOTS.Price.setAsCopper(1,1,1)
    NECRO_STARTER_BOOTS.RequiredLevel.set(1)
    NECRO_STARTER_BOOTS.Armor.set(1)

    const NECRO_STARTER_SCYTHE = std.Items.create( MODNAME, 'NECROSTARTERSCYTHE', 20978)
    NECRO_STARTER_SCYTHE.Name.enGB.set("Apprentice's Scythe");
    NECRO_STARTER_SCYTHE.Quality.set("WHITE")
    NECRO_STARTER_SCYTHE.Bonding.NO_BOUNDS.set()
    NECRO_STARTER_SCYTHE.Stats.clearAll()
    NECRO_STARTER_SCYTHE.DisplayInfo.set(39287)
    NECRO_STARTER_SCYTHE.Price.setAsCopper(1,1,1)
    NECRO_STARTER_SCYTHE.RequiredLevel.set(1)
    NECRO_STARTER_SCYTHE.Damage.clearAll()
    NECRO_STARTER_SCYTHE.Damage.addPhysical(3,5)


/******************************************************************
 * Necromancer Class
 ******************************************************************/

// Class Creation & Description
const NECROMANCER = std.Classes.create(MODNAME, 'Necromancer', 'MAGE')
NECROMANCER.Name.enGB.set('Necromancer');
NECROMANCER.Races.add(['HUMAN', 'ORC', 'UNDEAD', 'TROLL'])
NECROMANCER.UI.Color.set(0x770077);

NECROMANCER.UI.Info.add('- Role: Damage, Tank')
NECROMANCER.UI.Info.add('- Light Armor (Cloth)')
NECROMANCER.UI.Info.add('- Can control the dead')
NECROMANCER.UI.Info.add('- Master of the Dark Arts')
NECROMANCER.UI.Info.add('- Uses mana as a resource')
NECROMANCER.UI.Description
    .set("Necromancers have been feared in Azeroth long before the reign of destruction the Lich King has wrought upon the world's nations. They are said to once be mages, who have an unnatural talent and obsession with the Dark Arts and practice them in utmost secrecy. The most foul, Reanimation, is the most well known practice of Necromancy. This is not their only focus though, Necromancers also can specialize in Poison, Bones, Curses, and Blood Magic. There are rumors spreading that a group of subordinates under Kel'Thuzad have left the Cult of the Damned, and they joined forces with the Alliance and Horde factions to attempt to stop the Lich King's influence once and for all. One has to wonder though, is this their true goal?")

// Class Starting Skills
std.EquipSkills.Maces1H.enableAutolearn(NECROMANCER.Mask)
std.EquipSkills.Swords1H.enableAutolearn(NECROMANCER.Mask)
std.EquipSkills.Staves.enableAutolearn(NECROMANCER.Mask)
std.EquipSkills.Daggers.enableAutolearn(NECROMANCER.Mask)
std.EquipSkills.Cloth.enableAutolearn(NECROMANCER.Mask)

// Class Starting Gear
NECROMANCER.Races.forEach(x=>{
    x.Outfits.both(gear=>{
        gear.Items.clearAll()
        gear.Items.add(NECRO_STARTER_ROBE.ID)
        gear.Items.add(NECRO_STARTER_PANTS.ID)
        gear.Items.add(NECRO_STARTER_BOOTS.ID)
        gear.Items.add(NECRO_STARTER_SCYTHE.ID)   
    })
})


/******************************************************************
 * Necromancer Skill Lines
 ******************************************************************/

export const REANIMATION = std.SkillLines
    .create(MODNAME, 'Reanimation-skill')
    .Category.CLASS.set()
    .RaceClassInfos.add([NECROMANCER.Mask])
    .Name.enGB.set('Reanimation')
REANIMATION.Icon.set(221)

export const POISON_AND_BONES = std.SkillLines
    .create(MODNAME, 'Poison-and-Bones-skill')
    .Category.CLASS.set()
    .RaceClassInfos.add([NECROMANCER.Mask])
    .Name.enGB.set('Poison and Bones')
    POISON_AND_BONES.Icon.set(3259)

export const CURSES_AND_BLOOD = std.SkillLines
    .create(MODNAME, 'Curses-and-Blood-skill')
    .Category.CLASS.set()
    .RaceClassInfos.add([NECROMANCER.Mask])
    .Name.enGB.set('Curses and Blood')
    CURSES_AND_BLOOD.Icon.set(3223)

// Custom Weapon Type - Scythe
std.DBC.ItemSubClass.add(12, 14)
    .DisplayName.enGB.set('Scythe')
    .WeaponAttackSeq.set(293123)











/******************************************************************
 * Reanimation Spells
 ******************************************************************/


// Raise Skeleton Initiate
export const RAISE_SKELETON_INITIATE = std.Spells.create(MODNAME, 'Raise-Skeleton-Initiate', 688)
RAISE_SKELETON_INITIATE.Name.enGB.set('Raise Skeleton Initiate');
RAISE_SKELETON_INITIATE.Description.enGB.set('Reanimate an Initiate Skeleton Warrior from its postmortem slumber. The skeleton will fight for the Necromancer and protect $Ghim:her; until its demise.');
RAISE_SKELETON_INITIATE.Power.PowerCostPercent.set(50)
RAISE_SKELETON_INITIATE.CastTime.setSimple(5000)
RAISE_SKELETON_INITIATE.Effects.get(0).PointsBase.set(1)
RAISE_SKELETON_INITIATE.Effects.get(0).PointsDieSides.set(1)
RAISE_SKELETON_INITIATE.Visual.modRefCopy((value) => {
    value.CastKit.modRefCopy((castKit) => {
        castKit.Sound.set(2517)
    });
});
const RAISE_SKELETON_INITIATE_ABILITY = RAISE_SKELETON_INITIATE.SkillLines.add(REANIMATION.ID)
RAISE_SKELETON_INITIATE_ABILITY.AutoLearn.add(1, NECROMANCER.Mask)
export const SKELETONINITIATE = std.CreatureTemplates.create(MODNAME, 'Risen-Skeleton-Initiate', 11258)
SQL.creature_equip_template.add(SKELETONINITIATE.ID, 1)
    .ItemID1.set(49778)

SKELETONINITIATE.Name.enGB.set('Risen Skeleton Initiate')
SKELETONINITIATE.Scale.set(1.1)
SKELETONINITIATE.Type.UNDEAD.set()
SKELETONINITIATE.UnitClass.WARRIOR.set()
SKELETONINITIATE.Stats.DamageMod.set(4.5);
SKELETONINITIATE.Stats.HealthMod.set(2.0)
SKELETONINITIATE.AttackTime.MeleeBase.set(3400)
RAISE_SKELETON_INITIATE.Effects.get(0).MiscValueA.set(SKELETONINITIATE.ID);
RAISE_SKELETON_INITIATE.Icon.set(1611)
SKELETONINITIATE.Rank.NORMAL.set()
const CREATURE_SPELL_DATA_ID = 700000
SKELETONINITIATE.row.PetSpellDataId.set(CREATURE_SPELL_DATA_ID)
const csd = std.DBC.CreatureSpellData.add(CREATURE_SPELL_DATA_ID)
csd.Spells.set([69566, 70428, 57339])
csd.Availability.set([0, 0])
const RAISE_SKELETON_INITIATE_VISUAL = RAISE_SKELETON_INITIATE.Visual.getRefCopy()
const SHADOW_CHANNELING_VISUAL = std.Spells.load(46757).Visual.getRef()
RAISE_SKELETON_INITIATE_VISUAL.ChannelKit.set(SHADOW_CHANNELING_VISUAL.ChannelKit.get())

// Summon Abomination Spell (Talent)

export const SUMMON_ABOMINATION = std.Spells
    // base the spell on "Summon Imp"
    .create(MODNAME, 'Summon-Abomination', 688)
SUMMON_ABOMINATION.Name.enGB.set('Summon Abomination');
SUMMON_ABOMINATION.Description.enGB.set('Summon an Abomination under the command of the Necromancer');
// Changes the summoned creature
SUMMON_ABOMINATION.Effects.get(0).MiscValueA.set(8543);
SUMMON_ABOMINATION.SkillLines.add(REANIMATION.ID)
SUMMON_ABOMINATION.Icon.setFullPath('Interface\\Icons\\Achievement_Boss_patchwerk.blp')











/******************************************************************
 * Poison and Bones Spells
 ******************************************************************/


// TRIGGER SPELL VISUAL FOR Corpse Lance
export const SHATTERED_BONES = std.Spells.create(MODNAME, 'SHATTEREDBONES', 67996)
SHATTERED_BONES.Name.set({ enGB: 'Corpse Lance Visual Trigger' })
SHATTERED_BONES.Power.PowerType.set("MANA")
SHATTERED_BONES.Power.PowerCostPercent.set(0)
SHATTERED_BONES.Mana.PowerCostBase.set(0)
SHATTERED_BONES.Effects.get(0).PointsBase.set(0)
SHATTERED_BONES.Effects.get(0).PointsDieSides.set(0)
SHATTERED_BONES.Visual.getRefCopy().cloneFromVisual(15032)
const SHATTERED_BONES_VISUAL = SHATTERED_BONES.Visual.getRefCopy()


// Corpse Lance (Rank 1)
export const Corpse_Lance = std.Spells.create(MODNAME, 'CorpseLance', 23922)
Corpse_Lance.Name.set({ enGB: 'Corpse Lance' })
Corpse_Lance.AutoLearn.add(18, NECROMANCER.Mask)
Corpse_Lance.SkillLines.add(POISON_AND_BONES.ID)
Corpse_Lance.Description.enGB.set('The Necromancer consumes a nearby corpse within 30 yards to summon five razor sharp bone spears to bypass armor and puncture $Ghis:her; target for $s2 damage as Physical. Requires a nearby corpse.')
Corpse_Lance.Power.PowerType.set("MANA")
Corpse_Lance.Mana.PowerCostPercent.set(0)
Corpse_Lance.Mana.PowerCostBase.set(55)
Corpse_Lance.Cooldown.set(16000)
Corpse_Lance.Range.setSimple(0, 30)
Corpse_Lance.CastTime.setSimple(0)
Corpse_Lance.CustomAttributes.IGNORE_ARMOR.set(1)
Corpse_Lance.Rank.set(1, 1)
Corpse_Lance.ItemEquips.set(-1, 0, 0)
Corpse_Lance.Effects.get(1).PointsBase.set(132)
Corpse_Lance.Effects.get(1).PointsDieSides.set(30)
Corpse_Lance.Attributes.IMPOSSIBLE_TO_DODGE_PARRY_BLOCK.set(1)
Corpse_Lance.Visual.getRefCopy().cloneFromVisual(15032)
Corpse_Lance.Visual.modRefCopy(visual => visual
    .CastKit.modRefCopy(kit => kit
        .Animation.SPELL_CAST_DIRECTED.set()
    )
)
const Corpse_Lance_VISUAL = Corpse_Lance.Visual.getRefCopy()
const REND_VISUAL = std.Spells.load(772).Visual.getRef()
Corpse_Lance.Effects.addMod(eff => eff
    .Type.TRIGGER_SPELL.set()
    .TriggerSpell.set(SHATTERED_BONES.ID)
)

// Cast Kit
Corpse_Lance_VISUAL.ImpactKit.set(REND_VISUAL.ImpactKit.get())
Corpse_Lance.Icon.set(160)

// Cast Kit for Visual Spell
SHATTERED_BONES_VISUAL.ImpactKit.set(REND_VISUAL.ImpactKit.get())


// TRIGGER SPELL VISUAL FOR BONE SPEAR
export const NIGHTBANE_BONE_SPEAR = std.Spells.create(MODNAME, 'NIGHTBANEBONESPEAR', 67996)
NIGHTBANE_BONE_SPEAR.Name.set({ enGB: 'Bone Spear Visual Trigger' })
NIGHTBANE_BONE_SPEAR.Power.PowerType.set("MANA")
NIGHTBANE_BONE_SPEAR.Power.PowerCostPercent.set(0)
NIGHTBANE_BONE_SPEAR.Mana.PowerCostBase.set(0)
NIGHTBANE_BONE_SPEAR.Effects.get(0).PointsBase.set(0)
NIGHTBANE_BONE_SPEAR.Effects.get(0).PointsDieSides.set(0)
std.Spells.load(48430).Visual.getRef().Missile.Model.getRef().Scale.set(.6, .6, .6)
NIGHTBANE_BONE_SPEAR.Visual.getRefCopy().cloneFromVisual(10772)

// Corpse Explosion (Rank 1)
export const Corpse_Explosion = std.Spells.create(MODNAME, 'CorpseExplosion', 49158)
Corpse_Explosion.Name.set({ enGB: 'Corpse Explosion' })
Corpse_Explosion.AutoLearn.add(18, NECROMANCER.Mask)
Corpse_Explosion.SkillLines.add(POISON_AND_BONES.ID)
Corpse_Explosion.Subtext.enGB.set('Rank 1')
Corpse_Explosion.Description.enGB.set('Detonate a corpse within 30 yards to deal $s1 Shadow damage to enemies within 10 yards of the explosion. Requires a nearby corpse.')
Corpse_Explosion.Power.PowerType.set("MANA")
Corpse_Explosion.Mana.PowerCostPercent.set(0)
Corpse_Explosion.Mana.PowerCostBase.set(55)
Corpse_Explosion.Range.setSimple(0, 30)
Corpse_Explosion.Rank.set(1, 1)
Corpse_Explosion.Icon.set(134)
Corpse_Explosion.Visual.modRefCopy(visual => visual
    .CastKit.modRefCopy(kit => kit
        .Animation.SPELL_CAST_DIRECTED.set()
    )
)

// Bone Spear (Rank 1)
export const BONE_SPEAR = std.Spells.create(MODNAME, 'Bone_Spear', 23922)
BONE_SPEAR.Name.set({ enGB: 'Bone Spear' })
BONE_SPEAR.AutoLearn.add(12, NECROMANCER.Mask)
BONE_SPEAR.SkillLines.add(POISON_AND_BONES.ID)
BONE_SPEAR.Description.enGB.set('The Necromancer summons a large, razor sharp bone spear to bypass armor and puncture the target for $s2 damage as Physical.')
BONE_SPEAR.Power.PowerType.set("MANA")
BONE_SPEAR.Mana.PowerCostPercent.set(0)
BONE_SPEAR.Mana.PowerCostBase.set(36)
BONE_SPEAR.Attributes.CANT_BE_REFLECTED.set(1)
BONE_SPEAR.Cooldown.set(0)
BONE_SPEAR.Range.setSimple(0, 30)
BONE_SPEAR.CustomAttributes.IGNORE_ARMOR.set(1)
BONE_SPEAR.InterruptFlags.ON_MOVEMENT.set(1)
BONE_SPEAR.CastTime.setSimple(2700)
BONE_SPEAR.Rank.set(1, 1)
BONE_SPEAR.ItemEquips.set(-1, 0, 0)
BONE_SPEAR.Effects.get(1).PointsBase.set(39)
BONE_SPEAR.Effects.get(1).PointsDieSides.set(30)
BONE_SPEAR.Attributes.IMPOSSIBLE_TO_DODGE_PARRY_BLOCK.set(1)
BONE_SPEAR.Visual.modRefCopy(visual => visual
    .PrecastKit.modRefCopy(kit => kit
        .Animation.SPELL_CAST.set()
    )
)
BONE_SPEAR.Visual.modRefCopy(visual => visual
    .CastKit.modRefCopy(kit => kit
        .Animation.SPELL_CAST_DIRECTED.set()
    )
)
// Attaching the Visual Trigger Spell
BONE_SPEAR.Effects.addMod(eff => eff
    .Type.TRIGGER_SPELL.set()
    .TriggerSpell.set(NIGHTBANE_BONE_SPEAR.ID)
)
const BONE_SPEAR_VISUAL = BONE_SPEAR.Visual.getRefCopy()
const SB_VISUAL = std.Spells.load(75384).Visual.getRef()
BONE_SPEAR_VISUAL.ImpactKit.set(REND_VISUAL.ImpactKit.get())
BONE_SPEAR_VISUAL.PrecastKit.set(SB_VISUAL.PrecastKit.get())
BONE_SPEAR_VISUAL.CastKit.set(SB_VISUAL.CastKit.get())
BONE_SPEAR.Icon.set(600)

// TRIGGER SPELL FOR TEETH
export const TEETH_TRIGGER_DAMAGE = std.Spells.create(MODNAME, 'TEETHTRIGGER', 54771)
TEETH_TRIGGER_DAMAGE.Name.set({ enGB: 'Teeth' })
TEETH_TRIGGER_DAMAGE.Power.PowerType.set("MANA")
TEETH_TRIGGER_DAMAGE.Attributes.IMPOSSIBLE_TO_DODGE_PARRY_BLOCK.set(1)
TEETH_TRIGGER_DAMAGE.Attributes.CANT_BE_REFLECTED.set(1)
TEETH_TRIGGER_DAMAGE.Power.PowerCostPercent.set(0)
TEETH_TRIGGER_DAMAGE.Mana.PowerCostBase.set(0)
TEETH_TRIGGER_DAMAGE.Effects.get(0).PointsBase.set(1)
TEETH_TRIGGER_DAMAGE.Effects.get(0).PointsDieSides.set(3)


// Teeth
export const TEETH = std.Spells.create(MODNAME, 'Teeth', 54770)
TEETH.Name.set({ enGB: 'Teeth' })
TEETH.AutoLearn.add(3, NECROMANCER.Mask)
TEETH.SkillLines.add(POISON_AND_BONES.ID)
TEETH.Description.enGB.set('The Necromancer summons a large, razor sharp bone spear to bypass armor and puncture the target for $s1 damage as Physical.')
TEETH.Power.PowerType.set("MANA")
TEETH.Rank.set(TEETH.ID,1)
TEETH.Subtext.enGB.set('Rank 1')
TEETH.Mana.PowerCostPercent.set(0)
TEETH.Mana.PowerCostBase.set(25)
TEETH.Attributes.CANT_BE_REFLECTED.set(1)
TEETH.Attributes.IMPOSSIBLE_TO_DODGE_PARRY_BLOCK.set(1)
TEETH.Effects.get(1).clear()
TEETH.Cooldown.set(14000)
TEETH.Range.setSimple(0, 30) 
TEETH.Effects.get(0).PointsBase.set(1)
TEETH.Effects.get(0).PointsDieSides.set(3)
TEETH.Effects.get(0).TriggerSpell.set(TEETH_TRIGGER_DAMAGE.ID)


// TRIGGER SPELL FOR TEETH (Rank 2)
export const TEETH_TRIGGER_DAMAGE2 = std.Spells.create(MODNAME, 'TEETHTRIGGER2', 54771)
TEETH_TRIGGER_DAMAGE2.Name.set({ enGB: 'Teeth' })
TEETH_TRIGGER_DAMAGE2.Power.PowerType.set("MANA")
TEETH_TRIGGER_DAMAGE2.Attributes.IMPOSSIBLE_TO_DODGE_PARRY_BLOCK.set(1)
TEETH_TRIGGER_DAMAGE2.Attributes.CANT_BE_REFLECTED.set(1)
TEETH_TRIGGER_DAMAGE2.Power.PowerCostPercent.set(0)
TEETH_TRIGGER_DAMAGE2.Mana.PowerCostBase.set(0)
TEETH_TRIGGER_DAMAGE2.Effects.get(0).PointsBase.set(5)
TEETH_TRIGGER_DAMAGE2.Effects.get(0).PointsDieSides.set(9)


// Teeth (Rank 2)
export const TEETH2 = std.Spells.create(MODNAME, 'Teeth2', 54770)
TEETH2.Name.set({ enGB: 'Teeth' })
TEETH2.AutoLearn.add(10, NECROMANCER.Mask)
TEETH2.SkillLines.add(POISON_AND_BONES.ID)
TEETH2.Description.enGB.set('The Necromancer summons a large, razor sharp bone spear to bypass armor and puncture the target for $s1 damage as Physical.')
TEETH2.Power.PowerType.set("MANA")
TEETH2.Rank.set(TEETH.ID,2)
TEETH2.Subtext.enGB.set('Rank 2')
TEETH2.Mana.PowerCostPercent.set(0)
TEETH2.Mana.PowerCostBase.set(25)
TEETH2.Attributes.CANT_BE_REFLECTED.set(1)
TEETH2.Attributes.IMPOSSIBLE_TO_DODGE_PARRY_BLOCK.set(1)
TEETH2.Effects.get(0).PointsBase.set(5)
TEETH2.Effects.get(0).PointsDieSides.set(9)
TEETH2.Effects.get(1).clear()
TEETH2.Cooldown.set(14000)
TEETH2.Range.setSimple(0, 30) 
TEETH2.Effects.get(0).TriggerSpell.set(TEETH_TRIGGER_DAMAGE2.ID)

// Bone Armor (Rank 1)
const BONE_ARMOR = std.Spells.create(MODNAME, 'BoneArmor', 11445)
BONE_ARMOR.Name.enGB.set('Bone Armor');
const BONE_ARMOR_ABILITY = BONE_ARMOR.SkillLines.add(POISON_AND_BONES.ID)
BONE_ARMOR_ABILITY.AutoLearn.add(5, NECROMANCER.Mask)
BONE_ARMOR.Mana.PowerCostBase.set(50)
BONE_ARMOR.Rank.set(BONE_ARMOR.ID,1)
BONE_ARMOR.Subtext.enGB.set('Rank 1')
BONE_ARMOR.Effects.get(0).PointsBase.set(24)
BONE_ARMOR.Effects.get(0).PointsDieSides.set(8)
BONE_ARMOR.Cooldown.set(45000)
BONE_ARMOR.Duration.setSimple(120000)
BONE_ARMOR.Description.enGB.set('The necromancer incases $Ghimself:herself; with a layer of 3 bones, shielding $Ghim:her; for $s1 damage absorption for $d1. While the bone armor holds, spellcasting may not be interrupted by damage.')
BONE_ARMOR.AuraDescription.enGB.set('A layer of 3 bones protects the Necromancer, absorbing $s1 damage for $d1 or until broken.')
BONE_ARMOR.Icon.set(2696)

// Bone Armor (Rank 2)
const BONE_ARMOR2 = std.Spells.create(MODNAME, 'BoneArmor2', 11445)
BONE_ARMOR2.Name.enGB.set('Bone Armor');
const BONE_ARMOR2_ABILITY = BONE_ARMOR2.SkillLines.add(POISON_AND_BONES.ID)
BONE_ARMOR2_ABILITY.AutoLearn.add(10, NECROMANCER.Mask)
BONE_ARMOR2.Mana.PowerCostBase.set(50)
BONE_ARMOR2.Rank.set(BONE_ARMOR.ID,2)
BONE_ARMOR2.Subtext.enGB.set('Rank 2')
BONE_ARMOR2.Effects.get(0).PointsBase.set(48)
BONE_ARMOR2.Effects.get(0).PointsDieSides.set(16)
BONE_ARMOR2.Cooldown.set(45000)
BONE_ARMOR2.Duration.setSimple(120000)
BONE_ARMOR2.Description.enGB.set('The necromancer incases $Ghimself:herself; with a layer of 3 bones, shielding $Ghim:her; for $s1 damage absorption for $d1. While the bone armor holds, spellcasting may not be interrupted by damage.')
BONE_ARMOR2.AuraDescription.enGB.set('A layer of 3 bones protects the Necromancer, absorbing $s1 damage for $d1 or until broken.')
BONE_ARMOR2.Icon.set(2696)

// Bone Armor (Rank 3)
const BONE_ARMOR3 = std.Spells.create(MODNAME, 'BoneArmor3', 11445)
BONE_ARMOR3.Name.enGB.set('Bone Armor');
const BONE_ARMOR3_ABILITY = BONE_ARMOR3.SkillLines.add(POISON_AND_BONES.ID)
BONE_ARMOR3_ABILITY.AutoLearn.add(15, NECROMANCER.Mask)
BONE_ARMOR3.Mana.PowerCostBase.set(50)
BONE_ARMOR3.Rank.set(BONE_ARMOR.ID,3)
BONE_ARMOR3.Subtext.enGB.set('Rank 3')
BONE_ARMOR3.Effects.get(0).PointsBase.set(96)
BONE_ARMOR3.Effects.get(0).PointsDieSides.set(32)
BONE_ARMOR3.Cooldown.set(45000)
BONE_ARMOR3.Duration.setSimple(120000)
BONE_ARMOR3.Description.enGB.set('The necromancer incases $Ghimself:herself; with a layer of 3 bones, shielding $Ghim:her; for $s1 damage absorption for $d1. While the bone armor holds, spellcasting may not be interrupted by damage.')
BONE_ARMOR3.AuraDescription.enGB.set('A layer of 3 bones protects the Necromancer, absorbing $s1 damage for $d1 or until broken.')
BONE_ARMOR3.Icon.set(2696)

// Bone Armor (Rank 4)
const BONE_ARMOR4 = std.Spells.create(MODNAME, 'BoneArmor4', 11445)
BONE_ARMOR4.Name.enGB.set('Bone Armor');
const BONE_ARMOR4_ABILITY = BONE_ARMOR4.SkillLines.add(POISON_AND_BONES.ID)
BONE_ARMOR4_ABILITY.AutoLearn.add(20, NECROMANCER.Mask)
BONE_ARMOR4.Mana.PowerCostBase.set(50)
BONE_ARMOR4.Rank.set(BONE_ARMOR.ID,4)
BONE_ARMOR4.Subtext.enGB.set('Rank 4')
BONE_ARMOR4.Effects.get(0).PointsBase.set(156)
BONE_ARMOR4.Effects.get(0).PointsDieSides.set(48)
BONE_ARMOR4.Cooldown.set(45000)
BONE_ARMOR4.Duration.setSimple(120000)
BONE_ARMOR4.Description.enGB.set('The necromancer incases $Ghimself:herself; with a layer of 3 bones, shielding $Ghim:her; for $s1 damage absorption for $d1. While the bone armor holds, spellcasting may not be interrupted by damage.')
BONE_ARMOR4.AuraDescription.enGB.set('A layer of 3 bones protects the Necromancer, absorbing $s1 damage for $d1 or until broken.')
BONE_ARMOR4.Icon.set(2696)

// Bone Armor (Rank 5)
const BONE_ARMOR5 = std.Spells.create(MODNAME, 'BoneArmor5', 11445)
BONE_ARMOR5.Name.enGB.set('Bone Armor');
const BONE_ARMOR5_ABILITY = BONE_ARMOR5.SkillLines.add(POISON_AND_BONES.ID)
BONE_ARMOR5_ABILITY.AutoLearn.add(30, NECROMANCER.Mask)
BONE_ARMOR5.Mana.PowerCostBase.set(50)
BONE_ARMOR5.Rank.set(BONE_ARMOR.ID,5)
BONE_ARMOR5.Subtext.enGB.set('Rank 5')
BONE_ARMOR5.Effects.get(0).PointsBase.set(226)
BONE_ARMOR5.Effects.get(0).PointsDieSides.set(48)
BONE_ARMOR5.Cooldown.set(45000)
BONE_ARMOR5.Duration.setSimple(120000)
BONE_ARMOR5.Description.enGB.set('The necromancer incases $Ghimself:herself; with a layer of 3 bones, shielding $Ghim:her; for $s1 damage absorption for $d1. While the bone armor holds, spellcasting may not be interrupted by damage.')
BONE_ARMOR5.AuraDescription.enGB.set('A layer of 3 bones protects the Necromancer, absorbing $s1 damage for $d1 or until broken.')
BONE_ARMOR5.Icon.set(2696)

// Bone Armor (Rank 6)
const BONE_ARMOR6 = std.Spells.create(MODNAME, 'BoneArmor6', 11445)
BONE_ARMOR6.Name.enGB.set('Bone Armor');
const BONE_ARMOR6_ABILITY = BONE_ARMOR6.SkillLines.add(POISON_AND_BONES.ID)
BONE_ARMOR6_ABILITY.AutoLearn.add(40, NECROMANCER.Mask)
BONE_ARMOR6.Mana.PowerCostBase.set(50)
BONE_ARMOR6.Rank.set(BONE_ARMOR.ID,6)
BONE_ARMOR6.Subtext.enGB.set('Rank 6')
BONE_ARMOR6.Effects.get(0).PointsBase.set(378)
BONE_ARMOR6.Effects.get(0).PointsDieSides.set(64)
BONE_ARMOR6.Cooldown.set(45000)
BONE_ARMOR6.Duration.setSimple(120000)
BONE_ARMOR6.Description.enGB.set('The necromancer incases $Ghimself:herself; with a layer of 3 bones, shielding $Ghim:her; for $s1 damage absorption for $d1. While the bone armor holds, spellcasting may not be interrupted by damage.')
BONE_ARMOR6.AuraDescription.enGB.set('A layer of 3 bones protects the Necromancer, absorbing $s1 damage for $d1 or until broken.')
BONE_ARMOR6.Icon.set(2696)

// Bone Armor (Rank 7)
const BONE_ARMOR7 = std.Spells.create(MODNAME, 'BoneArmor7', 11445)
BONE_ARMOR7.Name.enGB.set('Bone Armor');
const BONE_ARMOR7_ABILITY = BONE_ARMOR7.SkillLines.add(POISON_AND_BONES.ID)
BONE_ARMOR7_ABILITY.AutoLearn.add(50, NECROMANCER.Mask)
BONE_ARMOR7.Mana.PowerCostBase.set(50)
BONE_ARMOR7.Rank.set(BONE_ARMOR.ID,7)
BONE_ARMOR7.Subtext.enGB.set('Rank 7')
BONE_ARMOR7.Effects.get(0).PointsBase.set(578)
BONE_ARMOR7.Effects.get(0).PointsDieSides.set(64)
BONE_ARMOR7.Cooldown.set(45000)
BONE_ARMOR7.Duration.setSimple(120000)
BONE_ARMOR7.Description.enGB.set('The necromancer incases $Ghimself:herself; with a layer of 3 bones, shielding $Ghim:her; for $s1 damage absorption for $d1. While the bone armor holds, spellcasting may not be interrupted by damage.')
BONE_ARMOR7.AuraDescription.enGB.set('A layer of 3 bones protects the Necromancer, absorbing $s1 damage for $d1 or until broken.')
BONE_ARMOR7.Icon.set(2696)

// Bone Armor (Rank 8)
const BONE_ARMOR8 = std.Spells.create(MODNAME, 'BoneArmor8', 11445)
BONE_ARMOR8.Name.enGB.set('Bone Armor');
const BONE_ARMOR8_ABILITY = BONE_ARMOR8.SkillLines.add(POISON_AND_BONES.ID)
BONE_ARMOR8_ABILITY.AutoLearn.add(60, NECROMANCER.Mask)
BONE_ARMOR8.Mana.PowerCostBase.set(50)
BONE_ARMOR8.Rank.set(BONE_ARMOR.ID,8)
BONE_ARMOR8.Subtext.enGB.set('Rank 8')
BONE_ARMOR8.Effects.get(0).PointsBase.set(878)
BONE_ARMOR8.Effects.get(0).PointsDieSides.set(64)
BONE_ARMOR8.Cooldown.set(45000)
BONE_ARMOR8.Duration.setSimple(120000)
BONE_ARMOR8.Description.enGB.set('The necromancer incases $Ghimself:herself; with a layer of 3 bones, shielding $Ghim:her; for $s1 damage absorption for $d1. While the bone armor holds, spellcasting may not be interrupted by damage.')
BONE_ARMOR8.AuraDescription.enGB.set('A layer of 3 bones protects the Necromancer, absorbing $s1 damage for $d1 or until broken.')
BONE_ARMOR8.Icon.set(2696)

// Bone Armor (Rank 9)
const BONE_ARMOR9 = std.Spells.create(MODNAME, 'BoneArmor9', 11445)
BONE_ARMOR9.Name.enGB.set('Bone Armor');
const BONE_ARMOR9_ABILITY = BONE_ARMOR9.SkillLines.add(POISON_AND_BONES.ID)
BONE_ARMOR9_ABILITY.AutoLearn.add(65, NECROMANCER.Mask)
BONE_ARMOR9.Mana.PowerCostBase.set(50)
BONE_ARMOR9.Rank.set(BONE_ARMOR.ID,9)
BONE_ARMOR9.Subtext.enGB.set('Rank 9')
BONE_ARMOR9.Effects.get(0).PointsBase.set(1024)
BONE_ARMOR9.Effects.get(0).PointsDieSides.set(42)
BONE_ARMOR9.Cooldown.set(45000)
BONE_ARMOR8.Duration.setSimple(120000)
BONE_ARMOR9.Description.enGB.set('The necromancer incases $Ghimself:herself; with a layer of 3 bones, shielding $Ghim:her; for $s1 damage absorption for $d1. While the bone armor holds, spellcasting may not be interrupted by damage.')
BONE_ARMOR9.AuraDescription.enGB.set('A layer of 3 bones protects the Necromancer, absorbing $s1 damage for $d1 or until broken.')
BONE_ARMOR9.Icon.set(2696)

// Bone Armor (Rank 10)
const BONE_ARMOR10 = std.Spells.create(MODNAME, 'BoneArmor10', 11445)
BONE_ARMOR10.Name.enGB.set('Bone Armor');
const BONE_ARMOR10_ABILITY = BONE_ARMOR10.SkillLines.add(POISON_AND_BONES.ID)
BONE_ARMOR10_ABILITY.AutoLearn.add(70, NECROMANCER.Mask)
BONE_ARMOR10.Mana.PowerCostBase.set(50)
BONE_ARMOR10.Rank.set(BONE_ARMOR.ID,10)
BONE_ARMOR10.Subtext.enGB.set('Rank 10')
BONE_ARMOR10.Effects.get(0).PointsBase.set(1124)
BONE_ARMOR10.Effects.get(0).PointsDieSides.set(42)
BONE_ARMOR10.Cooldown.set(45000)
BONE_ARMOR10.Duration.setSimple(120000)
BONE_ARMOR10.Description.enGB.set('The necromancer incases $Ghimself:herself; with a layer of 3 bones, shielding $Ghim:her; for $s1 damage absorption for $d1. While the bone armor holds, spellcasting may not be interrupted by damage.')
BONE_ARMOR10.AuraDescription.enGB.set('A layer of 3 bones protects the Necromancer, absorbing $s1 damage for $d1 or until broken.')
BONE_ARMOR10.Icon.set(2696)

// Bone Armor (Rank 11)
const BONE_ARMOR11 = std.Spells.create(MODNAME, 'BoneArmor11', 11445)
BONE_ARMOR11.Name.enGB.set('Bone Armor');
const BONE_ARMOR11_ABILITY = BONE_ARMOR11.SkillLines.add(POISON_AND_BONES.ID)
BONE_ARMOR11_ABILITY.AutoLearn.add(75, NECROMANCER.Mask)
BONE_ARMOR11.Mana.PowerCostBase.set(50)
BONE_ARMOR11.Rank.set(BONE_ARMOR.ID,11)
BONE_ARMOR11.Subtext.enGB.set('Rank 11')
BONE_ARMOR11.Effects.get(0).PointsBase.set(1824)
BONE_ARMOR11.Effects.get(0).PointsDieSides.set(42)
BONE_ARMOR11.Cooldown.set(45000)
BONE_ARMOR11.Duration.setSimple(120000)
BONE_ARMOR11.Description.enGB.set('The necromancer incases $Ghimself:herself; with a layer of 3 bones, shielding $Ghim:her; for $s1 damage absorption for $d1. While the bone armor holds, spellcasting may not be interrupted by damage.')
BONE_ARMOR11.AuraDescription.enGB.set('A layer of 3 bones protects the Necromancer, absorbing $s1 damage for $d1 or until broken.')
BONE_ARMOR11.Icon.set(2696)

// Bone Armor (Rank 12)
const BONE_ARMOR12 = std.Spells.create(MODNAME, 'BoneArmor12', 11445)
BONE_ARMOR12.Name.enGB.set('Bone Armor');
const BONE_ARMOR12_ABILITY = BONE_ARMOR12.SkillLines.add(POISON_AND_BONES.ID)
BONE_ARMOR12_ABILITY.AutoLearn.add(80, NECROMANCER.Mask)
BONE_ARMOR12.Mana.PowerCostBase.set(50)
BONE_ARMOR12.Rank.set(BONE_ARMOR.ID,12)
BONE_ARMOR12.Subtext.enGB.set('Rank 12')
BONE_ARMOR12.Effects.get(0).PointsBase.set(2024)
BONE_ARMOR12.Effects.get(0).PointsDieSides.set(136)
BONE_ARMOR12.Cooldown.set(45000)
BONE_ARMOR12.Duration.setSimple(120000)
BONE_ARMOR12.Description.enGB.set('The necromancer incases $Ghimself:herself; with a layer of 3 bones, shielding $Ghim:her; for $s1 damage absorption for $d1. While the bone armor holds, spellcasting may not be interrupted by damage.')
BONE_ARMOR12.AuraDescription.enGB.set('A layer of 3 bones protects the Necromancer, absorbing $s1 damage for $d1 or until broken.')
BONE_ARMOR12.Icon.set(2696)

/******************************************************************
 * Curses & Blood Spells
 ******************************************************************/

// Bloodbolt Spell (Starter Spell, Only Rank since % based)
const BLOODBOLT = std.Spells.create(MODNAME, 'Bloodbolt', 686)
BLOODBOLT.Name.enGB.set('Bloodbolt');
const BLOODBOLT_ABILITY = BLOODBOLT.SkillLines.add(CURSES_AND_BLOOD.ID)
BLOODBOLT_ABILITY.AutoLearn.add(1, NECROMANCER.Mask)

const BLOODBOLT_VISUAL = BLOODBOLT.Visual.getRefCopy()
const VAMPIRIC_BOLT_VISUAL = std.Spells.load(51016).Visual.getRef()
const BLOOD_NOVA_VISUAL = std.Spells.load(73058).Visual.getRef()

// Precast Kit
BLOODBOLT_VISUAL.PrecastKit.set(BLOOD_NOVA_VISUAL.PrecastKit.get())

// Missile Kit
BLOODBOLT_VISUAL.Missile.Model.set(VAMPIRIC_BOLT_VISUAL.Missile.Model.get())

// Cast Kit
BLOODBOLT_VISUAL.CastKit.set(VAMPIRIC_BOLT_VISUAL.CastKit.get())

// Impact Visual Kit
BLOODBOLT_VISUAL.ImpactKit.set(VAMPIRIC_BOLT_VISUAL.ImpactKit.get())

//Spell Mods
BLOODBOLT_ABILITY.Power.PowerType.set("HEALTH")
BLOODBOLT.Power.PowerCostPercent.set(10)
BLOODBOLT.Description.enGB.set('Manifest Shadow energy, and empower it with your own blood. The act consumes 5% of your maximum health to deal double the amount of health lost as Shadow damage. You cannot cast this ability with less than 5% health.')
BLOODBOLT.CastTime.setSimple(1000)
BLOODBOLT.Rank.set(0, 0)
BLOODBOLT.Effects.get(0).PointsDieSides.set(0)
BLOODBOLT.Icon.set(153)

// Blood Rush
const BLOOD_RUSH = std.Spells.create(MODNAME, 'Blood Rush', 31439)
BLOOD_RUSH.Name.enGB.set('Blood Rush');
const BLOOD_RUSH_ABILITY = BLOOD_RUSH.SkillLines.add(CURSES_AND_BLOOD.ID)
BLOOD_RUSH_ABILITY.AutoLearn.add(20, NECROMANCER.Mask)

const BLOOD_RUSH_VISUAL = BLOOD_RUSH.Visual.getRefCopy()

// Precast Kit
BLOOD_RUSH_VISUAL.PrecastKit.set(BLOOD_NOVA_VISUAL.PrecastKit.get())

// Cast Kit
BLOOD_RUSH_VISUAL.CastKit.set(BLOOD_NOVA_VISUAL.CastKit.get())

// Impact Visual Kit
BLOOD_RUSH_VISUAL.ImpactKit.set(VAMPIRIC_BOLT_VISUAL.ImpactKit.get())

//Spell Mods
BLOOD_RUSH_ABILITY.Power.PowerType.set("HEALTH")
BLOOD_RUSH.Power.PowerCostPercent.set(12.5)
BLOOD_RUSH.Cooldown.set(0)
BLOOD_RUSH.Icon.set(1741)
BLOOD_RUSH.Description.enGB.set('The necromancer sheds $Ghis:her; mortal flesh to reappear 20 yards in $Ghis:her; front facing direction.')

// Blood Siphon (Rank 1)
export const BLOOD_SIPHON = std.Spells.create(MODNAME, 'Blood_Siphon', 59015)
BLOOD_SIPHON.Name.set({ enGB: 'Blood Siphon' })
BLOOD_SIPHON.AutoLearn.add(15, NECROMANCER.Mask)
BLOOD_SIPHON.SkillLines.add(CURSES_AND_BLOOD.ID)
BLOOD_SIPHON.Description.enGB.set('The Necromancer siphons the blood from all enemies in a 25yd cone in front of $Ghim:her; dealing $s1 Shadow Damage, and healing the Necromancer for triple the damage dealt.')
BLOOD_SIPHON.Power.PowerType.set("MANA")
BLOOD_SIPHON.Rank.set(BLOOD_SIPHON.ID,1)
BLOOD_SIPHON.Subtext.enGB.set('Rank 1')
BLOOD_SIPHON.Mana.PowerCostPercent.set(0)
BLOOD_SIPHON.Mana.PowerCostBase.set(70)
BLOOD_SIPHON.Cooldown.set(45000)
BLOOD_SIPHON.Effects.get(0).PointsBase.set(14)
BLOOD_SIPHON.Effects.get(0).PointsDieSides.set(19)
BLOOD_SIPHON.Icon.set(3008)
BLOOD_SIPHON.Visual.getRefCopy().cloneFromVisual(9310)
const BLOOD_SIPHON_VISUAL = BLOOD_SIPHON.Visual.getRefCopy()
BLOOD_SIPHON_VISUAL.CastKit.set(BLOOD_NOVA_VISUAL.CastKit.get())

// Blood Siphon Visual Trigger
export const BLOOD_SIPHONVISUAL = std.Spells.create(MODNAME, 'Blood_Siphon_Visual', 59015)
BLOOD_SIPHONVISUAL.Name.set({ enGB: 'Blood Siphon Visual Trigger' })
BLOOD_SIPHONVISUAL.Effects.get(0).PointsBase.set(0)
BLOOD_SIPHONVISUAL.Mana.PowerCostBase.set(0)
BLOOD_SIPHONVISUAL.Effects.get(0).PointsDieSides.set(0)

// Attaching the Visual Trigger Spell
BLOOD_SIPHON.Effects.addMod(eff => eff
    .Type.TRIGGER_SPELL.set()
    .TriggerSpell.set(BLOOD_SIPHONVISUAL.ID)
)

// Decrepify
const DECREPIFY = std.Spells.create(MODNAME, 'Decrepify', 51340)
DECREPIFY.Name.enGB.set('Decrepify');
const DECREPIFY_ABILITY = DECREPIFY.SkillLines.add(CURSES_AND_BLOOD.ID)
DECREPIFY_ABILITY.AutoLearn.add(7, NECROMANCER.Mask)
DECREPIFY.Effects.get(0).PointsBase.set(-11)
DECREPIFY.Effects.get(0).PointsDieSides.set(1)
DECREPIFY.Duration.setSimple(30000,0,30000)
DECREPIFY.Effects.get(1).Aura.MOD_DECREASE_SPEED.set()
DECREPIFY.Effects.get(1).PointsBase.set(-26)
DECREPIFY.Effects.get(1).PointsDieSides.set(1)
DECREPIFY.Effects.get(2).Aura.MOD_MELEE_HASTE.set()
DECREPIFY.Effects.get(2).PointsBase.set(-11)
DECREPIFY.Effects.get(2).PointsDieSides.set(1)
DECREPIFY.Description.enGB.set('Cast upon the target a devastating curse, reducing damage dealt by $s1%, movement speed by $s2%, and also reduces melee attack speed by $s3%.')
DECREPIFY.AuraDescription.enGB.set('Damage dealt is reduced by $s1%, movement speed by $s2%, and also reduces melee attack speed by $s3%.')
DECREPIFY.Icon.set(1910)
// Decrepify needs trigger spell bc slow doesnt work, need to test to see if the damage works etc too

// Simulacrum Trigger Spell
const Simulacrum_Trigger = std.Spells.create(MODNAME, 'Simulacrum_Trigger', 58836)
Simulacrum_Trigger.Name.enGB.set('Simulacrum Trigger');
Simulacrum_Trigger.SkillLines.add(CURSES_AND_BLOOD.ID)

// Simulacrum Spell
const Simulacrum = std.Spells.create(MODNAME, 'Simulacrum', 55342)
Simulacrum.Name.enGB.set('Simulacrum');
Simulacrum.SkillLines.add(CURSES_AND_BLOOD.ID)









/******************************************************************
 * TRAINER
 ******************************************************************/
export const NECROMANCER_TRAINER_HUMAN = std.CreatureTemplates
    .create(MODNAME, 'Necromancer-Trainer', 28373)
    .Name.enGB.set('Necromancy Trainer')
    .Subname.enGB.set('Master of the Dark Arts')
    .NPCFlags.TRAINER.set(true)
    .FactionTemplate.NEUTRAL_PASSIVE.set()
    .Gossip.set(0)
const trainer = NECROMANCER_TRAINER_HUMAN.Trainer.getRef()
    .Greeting.enGB.set(`What do you require?`)
    .RequirementType.CLASS.set()
    .RequiredClass.set(NECROMANCER.ID)


NECROMANCER_TRAINER_HUMAN.Spawns.add( MODNAME, 'trainer-instance', { map: 0, x: -8898.656250, y: -130.632767, z: 81.285889, o: 1.766019 })

