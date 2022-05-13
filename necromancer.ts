const MODNAME = 'Necromancer'
import { clear } from "console";
import { SQL, std } from "wow/wotlk";
import { SchoolDamage } from "wow/wotlk/std/Spell/EffectTemplates/EffectTemplates";
import { Spell } from "wow/wotlk/std/Spell/Spell";


/******************************************************************
 * Necromancer Class
 ******************************************************************/
const NECROMANCER = std.Classes.create(MODNAME,'Necromancer','MAGE')
NECROMANCER.Name.enGB.set('Necromancer');
NECROMANCER.Races.add(['HUMAN','ORC','UNDEAD','TROLL'])
NECROMANCER.UI.Color.set(0x770077);

NECROMANCER.UI.Info.add('- Role: Damage, Tank')
NECROMANCER.UI.Info.add('- Light Armor (Cloth)')
NECROMANCER.UI.Info.add('- Can control the dead')
NECROMANCER.UI.Info.add('- Master of the Dark Arts')
NECROMANCER.UI.Info.add('- Uses mana as a resource')
NECROMANCER.UI.Description
    .set("Necromancers specialize entirely in the Dark Arts. Their most iconic feature is the unique mastery they have over reanimation, but this is not their only strength. Necromancers can also utilize blood magic, curses, plague and disease, and finally, bone magic. BEWARE, they are frighteningly powerful.. and should not be trifled with under any circumstances.")

// Necromancer Class Starting Skills
std.EquipSkills.Maces1H.enableAutolearn(NECROMANCER.Mask)
std.EquipSkills.Swords1H.enableAutolearn(NECROMANCER.Mask)
std.EquipSkills.Staves.enableAutolearn(NECROMANCER.Mask)
std.EquipSkills.Daggers.enableAutolearn(NECROMANCER.Mask)
std.EquipSkills.Cloth.enableAutolearn(NECROMANCER.Mask)


/******************************************************************
 * Necromancer Skill Lines
 ******************************************************************/
 const REANIMATION = std.SkillLines
 .create('Necromancer','Reanimation-skill')
 .Category.CLASS.set()
 .RaceClassInfos.add([NECROMANCER.Mask])
 .Name.enGB.set('Reanimation')
 REANIMATION.Icon.set(221)

 const POISON_AND_BONES = std.SkillLines
 .create('Necromancer','Poison-and-Bones-skill')
 .Category.CLASS.set()
 .RaceClassInfos.add([NECROMANCER.Mask])
 .Name.enGB.set('Poison and Bones')

 const CURSES_AND_BLOOD = std.SkillLines
 .create('Necromancer','Curses-and-Blood-skill')
 .Category.CLASS.set()
 .RaceClassInfos.add([NECROMANCER.Mask])
 .Name.enGB.set('Curses and Blood')

 // Custom Weapon Type - Scythe
 std.DBC.ItemSubClass.add(12,14)
    .DisplayName.enGB.set('Scythe')
    .WeaponAttackSeq.set(293123)

/******************************************************************
 * Reanimation Spells
 ******************************************************************/

// Raise Skeleton Initiate
export const RAISE_SKELETON_INITIATE = std.Spells.create('Necromancer','Raise-Skeleton-Initiate', 688)
RAISE_SKELETON_INITIATE.Name.enGB.set('Raise Skeleton Initiate');
RAISE_SKELETON_INITIATE.Description.enGB.set('Reanimate an Initiate Skeleton Warrior from its postmortem slumber. The skeleton will fight for the Necromancer and protect $Ghim:her; until its demise.');
RAISE_SKELETON_INITIATE.Power.PowerCostPercent.set(50)
RAISE_SKELETON_INITIATE.CastTime.setSimple(5000)
const RAISE_SKELETON_INITIATE_ABILITY = RAISE_SKELETON_INITIATE.SkillLines.add(REANIMATION.ID)
RAISE_SKELETON_INITIATE_ABILITY.AutoLearn.add(1, NECROMANCER.Mask)
    export const SKELETONINITIATE = std.CreatureTemplates.create('Necromancer','Risen-Skeleton-Initiate',11258)
    SQL.creature_equip_template.add(SKELETONINITIATE.ID,1)
    .ItemID1.set(49778)

    SKELETONINITIATE.Name.enGB.set('Risen Skeleton Initiate')
    SKELETONINITIATE.Scale.set(1.1)
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
    csd.Spells.set([57339,69566,70428])
    csd.Availability.set([0,0])
    const RAISE_SKELETON_INITIATE_VISUAL = RAISE_SKELETON_INITIATE.Visual.getRefCopy()
    const SHADOW_CHANNELING_VISUAL = std.Spells.load(46757).Visual.getRef()
   RAISE_SKELETON_INITIATE_VISUAL.ChannelKit.set(SHADOW_CHANNELING_VISUAL.ChannelKit.get())

// Summon Abomination Spell (Talent)

export const SUMMON_ABOMINATION = std.Spells
    // base the spell on "Summon Imp"
    .create('tswow-necromancer','summon-abomination', 688)
SUMMON_ABOMINATION.Name.enGB.set('Summon Abomination');
SUMMON_ABOMINATION.Description.enGB.set('Summon an Abomination under the command of the Necromancer');
// Changes the summoned creature
SUMMON_ABOMINATION.Effects.get(0).MiscValueA.set(8543);
SUMMON_ABOMINATION.SkillLines.add(REANIMATION.ID)
SUMMON_ABOMINATION.Icon.setFullPath('Interface\\Icons\\Achievement_Boss_patchwerk.blp')

/******************************************************************
 * Poison and Bones Spells
 ******************************************************************/


// Necrotic Shield (Talent)
export const NECRO_SHIELD = std.Spells.create('tswow-introduction','NecroShield',49222)
NECRO_SHIELD.Name.set({enGB: 'Necrotic Shield'})
NECRO_SHIELD.SkillLines.add(POISON_AND_BONES.ID)
NECRO_SHIELD.Description.set({enGB:"Surrounds the caster with whirling bones While at least 1 bone remains, $Ghe:she; takes $s1% less damage from all sources and deals $s2% more damage with all attacks, spells and abilities.  Each damaging attack that lands consumes 1 bone.  Lasts $d."})
NECRO_SHIELD.Icon.setPath('Inv_armor_shield_naxxramas_d_01')
NECRO_SHIELD.Power.PowerType.set("MANA")
NECRO_SHIELD.Mana.PowerCostPercent.set(10)
NECRO_SHIELD.Effects.get(0).PointsBase.set(314)
NECRO_SHIELD.Effects.get(0).PointsDieSides.set(1)
NECRO_SHIELD.Effects.get(0).ImplicitTargetA.UNIT_CASTER.set()
NECRO_SHIELD.Effects.get(1).PointsBase.set(0)
NECRO_SHIELD.Effects.get(1).PointsDieSides.set(1)
NECRO_SHIELD.Effects.get(1).ImplicitTargetA.UNIT_CASTER.set()
NECRO_SHIELD.Proc.Charges.set(10)
NECRO_SHIELD.Proc.Chance.set(100)

// Plague Barrier (Rank 1)
export const PLAGUE_BARRIER = std.Spells.create('Necromancer','PlagueBarrier',54512)
PLAGUE_BARRIER.Name.set({enGB: 'Plague Barrier'})
PLAGUE_BARRIER.AutoLearn.add(6, NECROMANCER.Mask)
PLAGUE_BARRIER.SkillLines.add(POISON_AND_BONES.ID)
PLAGUE_BARRIER.Description.set({enGB:"The Necromancer channels death energy, surroudning $Ghimself:herself; with a thick layer of plague mist. $GHe:She; absorbs $s1 damage for $d or until the barrier is shattered by absorbing the maximum amount of damage."})
PLAGUE_BARRIER.AuraDescription.enGB.set("The barrier will absorb $s1 damage until it is shattered by absorbing the maximum amount of damage, or until it expires.")
PLAGUE_BARRIER.Power.PowerType.set("MANA")
PLAGUE_BARRIER.Mana.PowerCostPercent.set(25)
PLAGUE_BARRIER.Effects.get(0).PointsBase.set(45)
PLAGUE_BARRIER.Duration.setSimple(45000)
PLAGUE_BARRIER.Attributes.USE_SPELL_CAST_EVENT.set(1)
PLAGUE_BARRIER.Cooldown.set(45000)
PLAGUE_BARRIER.Rank.set(1,1)
PLAGUE_BARRIER.Attributes.CANNOT_USE_IN_COMBAT.set(0)
const PLAGUE_BARRIER_VISUAL = PLAGUE_BARRIER.Visual.getRefCopy()
const HEALING_TOUCH_VISUAL = std.Spells.load(30999).Visual.getRef()
PLAGUE_BARRIER_VISUAL.CastKit.set(HEALING_TOUCH_VISUAL.CastKit.get())
PLAGUE_BARRIER.Icon.set(2025)

// Corpse Lance (Rank 1)
export const Corpse_Lance = std.Spells.create('Necromancer','CorpseLance',23922)
Corpse_Lance.Name.set({enGB: 'Corpse Lance'})
Corpse_Lance.AutoLearn.add(14, NECROMANCER.Mask)
Corpse_Lance.SkillLines.add(POISON_AND_BONES.ID)
Corpse_Lance.Description.enGB.set('The Necromancer summons four razor sharp bone spears to bypass armor and puncture the target for $s2 damage as Physical.')
Corpse_Lance.Power.PowerType.set("MANA")
Corpse_Lance.Mana.PowerCostPercent.set(0)
Corpse_Lance.Mana.PowerCostBase.set(55)
Corpse_Lance.Cooldown.set(7000)
Corpse_Lance.Range.setSimple(0,30)
Corpse_Lance.CastTime.setSimple(0)
Corpse_Lance.CustomAttributes.IGNORE_ARMOR.set(1)
Corpse_Lance.Rank.set(1,1)
Corpse_Lance.ItemEquips.set(-1, 0, 0)
Corpse_Lance.Effects.get(1).PointsBase.set(44)
Corpse_Lance.Effects.get(1).PointsDieSides.set(10)
Corpse_Lance.Attributes.IMPOSSIBLE_TO_DODGE_PARRY_BLOCK.set(1)
Corpse_Lance.Visual.getRefCopy().cloneFromVisual(15032) 
Corpse_Lance.Visual.modRefCopy(visual => visual
    .CastKit.modRefCopy(kit => kit
        .Animation.SPELL_CAST_DIRECTED.set()
    )
)
const Corpse_Lance_VISUAL = Corpse_Lance.Visual.getRefCopy()
const REND_VISUAL = std.Spells.load(772).Visual.getRef()
Corpse_Lance.Effects.addMod(eff=>eff
    .Type.TRIGGER_SPELL.set()
    // This Trigger Spell may need the ID changed. Look up "Corpse Lance Visual Trigger" if the ID is wrong, and set to the respective spell ID.
    .TriggerSpell.set(80905)
)

// Cast Kit
Corpse_Lance_VISUAL.ImpactKit.set(REND_VISUAL.ImpactKit.get())
Corpse_Lance.Icon.set(160)

// TRIGGER SPELL VISUAL FOR Corpse Lance
export const SHATTERED_BONES = std.Spells.create('Necromancer','SHATTEREDBONES',67996)
SHATTERED_BONES.Name.set({enGB: 'Corpse Lance Visual Trigger'})
SHATTERED_BONES.Power.PowerType.set("MANA")
SHATTERED_BONES.Power.PowerCostPercent.set(0)
SHATTERED_BONES.Mana.PowerCostBase.set(0)
SHATTERED_BONES.Effects.get(0).PointsBase.set(0)
SHATTERED_BONES.Effects.get(0).PointsDieSides.set(0)
SHATTERED_BONES.Visual.getRefCopy().cloneFromVisual(15032) 
const SHATTERED_BONES_VISUAL = SHATTERED_BONES.Visual.getRefCopy()

// Cast Kit
SHATTERED_BONES_VISUAL.ImpactKit.set(REND_VISUAL.ImpactKit.get())

// Bone Spear (Rank 1)
export const BONE_SPEAR = std.Spells.create('Necromancer','Bone_Spear',23922)
BONE_SPEAR.Name.set({enGB: 'Bone Spear'})
BONE_SPEAR.AutoLearn.add(12, NECROMANCER.Mask)
BONE_SPEAR.SkillLines.add(POISON_AND_BONES.ID)
BONE_SPEAR.Description.enGB.set('The Necromancer summons a large, razor sharp bone spear to bypass armor and puncture the target for $s2 damage as Physical.')
BONE_SPEAR.Power.PowerType.set("MANA")
BONE_SPEAR.Mana.PowerCostPercent.set(0)
BONE_SPEAR.Mana.PowerCostBase.set(36)
BONE_SPEAR.Cooldown.set(0)
BONE_SPEAR.Range.setSimple(0,30)
BONE_SPEAR.CustomAttributes.IGNORE_ARMOR.set(1)
BONE_SPEAR.InterruptFlags.ON_MOVEMENT.set(1)
BONE_SPEAR.CastTime.setSimple(2000)
BONE_SPEAR.Rank.set(1,1)
BONE_SPEAR.ItemEquips.set(-1, 0, 0)
BONE_SPEAR.Effects.get(1).PointsBase.set(39)
BONE_SPEAR.Effects.get(1).PointsDieSides.set(30)
BONE_SPEAR.Attributes.IMPOSSIBLE_TO_DODGE_PARRY_BLOCK.set(1)
BONE_SPEAR.Visual.modRefCopy(visual => visual
    .CastKit.modRefCopy(kit => kit
        .Animation.SPELL_CAST_DIRECTED.set()
    )
)
// Trigger Spell
BONE_SPEAR.Effects.addMod(eff=>eff
    .Type.TRIGGER_SPELL.set()
    // This Trigger Spell may need the ID changed. Look up "Bone Spear Visual Trigger" if the ID is wrong, and set to the respective spell ID.
    .TriggerSpell.set(80926)
)
const BONE_SPEAR_VISUAL = BONE_SPEAR.Visual.getRefCopy()
const THROW_SPEAR_VISUAL = std.Spells.load(75423).Visual.getRef()
BONE_SPEAR_VISUAL.ImpactKit.set(REND_VISUAL.ImpactKit.get())
BONE_SPEAR_VISUAL.PrecastKit.set(THROW_SPEAR_VISUAL.PrecastKit.get())
BONE_SPEAR.Icon.set(600)

// TRIGGER SPELL VISUAL FOR BONE SPEAR
export const NIGHTBANE_BONE_SPEAR = std.Spells.create('Necromancer','NIGHTBANEBONESPEAR',67996)
NIGHTBANE_BONE_SPEAR.Name.set({enGB: 'Bone Spear Visual Trigger'})
NIGHTBANE_BONE_SPEAR.Power.PowerType.set("MANA")
NIGHTBANE_BONE_SPEAR.Power.PowerCostPercent.set(0)
NIGHTBANE_BONE_SPEAR.Mana.PowerCostBase.set(0)
NIGHTBANE_BONE_SPEAR.Effects.get(0).PointsBase.set(0)
NIGHTBANE_BONE_SPEAR.Effects.get(0).PointsDieSides.set(0)
std.Spells.load(48430).Visual.getRef().Missile.Model.getRef().Scale.set(.6,.6,.6)
NIGHTBANE_BONE_SPEAR.Visual.getRefCopy().cloneFromVisual(10772) 

/******************************************************************
 * Curses & Blood Spells
 ******************************************************************/

// Bloodbolt Spell (Rank 1)

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
BLOODBOLT.CastTime.setSimple(1500)
BLOODBOLT.Rank.set(0,0)
BLOODBOLT.Effects.get(0).PointsDieSides.set(0)
BLOODBOLT.Icon.set(153)

// Blood Rush

const BLOOD_RUSH = std.Spells.create(MODNAME, 'Blood Rush', 31439)
BLOOD_RUSH.Name.enGB.set('Blood Rush');
const BLOOD_RUSH_ABILITY = BLOOD_RUSH.SkillLines.add(CURSES_AND_BLOOD.ID)
BLOOD_RUSH_ABILITY.AutoLearn.add(1, NECROMANCER.Mask)

const BLOOD_RUSH_VISUAL = BLOOD_RUSH.Visual.getRefCopy()

// Precast Kit
BLOOD_RUSH_VISUAL.PrecastKit.set(BLOOD_NOVA_VISUAL.PrecastKit.get())

// Cast Kit
BLOOD_RUSH_VISUAL.CastKit.set(BLOOD_NOVA_VISUAL.CastKit.get())

// Impact Visual Kit
BLOOD_RUSH_VISUAL.ImpactKit.set(VAMPIRIC_BOLT_VISUAL.ImpactKit.get())

// Impact Area Visual Kit
BLOOD_RUSH_VISUAL.ImpactAreaKit.set(0)

//Spell Mods
BLOOD_RUSH_ABILITY.Power.PowerType.set("HEALTH")
BLOOD_RUSH.Power.PowerCostPercent.set(12.5)
BLOOD_RUSH.Cooldown.set(0)
BLOOD_RUSH.Icon.set(1741)
BLOOD_RUSH.Description.enGB.set('The necromancer sheds $Ghis:her; mortal flesh to reappear 20 yards in $Ghis:her; front facing direction.')



/******************************************************************
 * TRAINER
 ******************************************************************/
 export const NECROMANCER_TRAINER_HUMAN = std.CreatureTemplates
 .create('Necromancer','Necromancer-Trainer',11326)
 .Name.enGB.set('Necromancy Trainer')
 .Subname.enGB.set('Master of the Dark Arts')
 .NPCFlags.TRAINER.set(true)
.Gossip.set(0)
 const trainer = NECROMANCER_TRAINER_HUMAN.Trainer.getRef()
 .Greeting.enGB.set(`What do you require?`)
 .RequirementType.CLASS.set()
 .RequiredClass.set(NECROMANCER.ID)

 
 NECROMANCER_TRAINER_HUMAN
    .Spawns.add(
          'tswow-introduction'
        , 'trainer-instance'
        , {map:0,x:-8898.656250,y:-130.632767,z:81.285889,o:1.766019}
    )


/******************************************************************
 * TALENTS
 ******************************************************************/
 
