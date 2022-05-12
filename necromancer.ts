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

 const CURSES_AND_SHADOWS = std.SkillLines
 .create('Necromancer','Curses-and-Shadows-skill')
 .Category.CLASS.set()
 .RaceClassInfos.add([NECROMANCER.Mask])
 .Name.enGB.set('Curses and Shadow')

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
PLAGUE_BARRIER.Cooldown.set(45000)
PLAGUE_BARRIER.Rank.set(1,1)
PLAGUE_BARRIER.Attributes.CANNOT_USE_IN_COMBAT.set(0)
const PLAGUE_BARRIER_VISUAL = PLAGUE_BARRIER.Visual.getRefCopy()
const HEALING_TOUCH_VISUAL = std.Spells.load(30999).Visual.getRef()
PLAGUE_BARRIER_VISUAL.CastKit.set(HEALING_TOUCH_VISUAL.CastKit.get())
PLAGUE_BARRIER.Icon.set(210)

// Bone Spears
export const BONE_SPEARS = std.Spells.create('Necromancer','BoneSpear',23922)
BONE_SPEARS.Name.set({enGB: 'Invoke Bone Spears'})
BONE_SPEARS.AutoLearn.add(14, NECROMANCER.Mask)
BONE_SPEARS.SkillLines.add(POISON_AND_BONES.ID)
BONE_SPEARS.Description.enGB.set('The Necromancer summons four razor sharp bone spears to bypass armor and puncture the target for $s2 damage as Physical.')
BONE_SPEARS.Power.PowerType.set("MANA")
BONE_SPEARS.Mana.PowerCostPercent.set(5)
BONE_SPEARS.Cooldown.set(7000)
BONE_SPEARS.Range.setSimple(0,30)
BONE_SPEARS.CastTime.setSimple(0)
BONE_SPEARS.Rank.set(1,1)
BONE_SPEARS.ItemEquips.set(-1, 0, 0)
BONE_SPEARS.Effects.get(1).PointsBase.set(44)
BONE_SPEARS.Effects.get(1).PointsDieSides.set(10)
BONE_SPEARS.Attributes.IMPOSSIBLE_TO_DODGE_PARRY_BLOCK.set(1)
BONE_SPEARS.Visual.getRefCopy().cloneFromVisual(15032) 
BONE_SPEARS.Visual.modRefCopy(visual => visual
    .CastKit.modRefCopy(kit => kit
        .Animation.SPELL_CAST_DIRECTED.set()
    )
)
const BONE_SPEARS_VISUAL = BONE_SPEARS.Visual.getRefCopy()
const REND_VISUAL = std.Spells.load(772).Visual.getRef()
BONE_SPEARS.Effects.addGetTriggerSpell('NECROMANCER','SHATTEREDBONES4',80927)

// Cast Kit
BONE_SPEARS_VISUAL.ImpactKit.set(REND_VISUAL.ImpactKit.get())

// TRIGGER SPELL VISUAL FOR BONE SPEARS
export const SHATTERED_BONES = std.Spells.create('Necromancer','SHATTEREDBONES',67996)
SHATTERED_BONES.Name.set({enGB: 'Bone Spears Visual Trigger'})
SHATTERED_BONES.Power.PowerType.set("MANA")
SHATTERED_BONES.Power.PowerCostPercent.set(0)
SHATTERED_BONES.Mana.PowerCostBase.set(0)
SHATTERED_BONES.Effects.get(0).PointsBase.set(0)
SHATTERED_BONES.Effects.get(0).PointsDieSides.set(0)
SHATTERED_BONES.Visual.getRefCopy().cloneFromVisual(15032) 
const SHATTERED_BONES_VISUAL = SHATTERED_BONES.Visual.getRefCopy()

// Cast Kit
SHATTERED_BONES_VISUAL.ImpactKit.set(REND_VISUAL.ImpactKit.get())


/******************************************************************
 * Curses & Shadow Spells
 ******************************************************************/

// Bloodbolt Spell (Rank 1)

const BLOODBOLT = std.Spells.create(MODNAME, 'Bloodbolt', 686)
BLOODBOLT.Name.enGB.set('Bloodbolt');
const BLOODBOLT_ABILITY = BLOODBOLT.SkillLines.add(CURSES_AND_SHADOWS.ID)
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
 
