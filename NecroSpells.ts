import { strictEqual } from "assert"
import { appendFile } from "fs"
import { stderr } from "process"
import { SQL } from "wow/wotlk"
import { player_class_rolesRow } from "wow/wotlk/sql/player_class_roles"


export function NecroSpells(events: TSEvents) {
    events.SpellID.OnDamageEarly(GetID("Spell","Necromancer","Bloodbolt"), (spell, damage, info, type, crit, effectmask) => {
        if (spell.GetCaster().IsPlayer()) {
            let player = spell.GetCaster().ToPlayer()
            damage.set(spell.GetCaster().ToPlayer().GetMaxHealth()*0.08)
        }
    })
    
    events.Player.OnSpellCast(GetID("Spell","Necromancer","CorpseLance"), (player,spell)) => {
         if (spell.GetTarget().ToCreature()) {
            if (player.GetCreaturesInRange(30,0,0,1))
            return
             spell.Finish()         
         }
         else {
            spell.Cancel()
            player.SendBroadcastMessage('There are no corpses nearby.')
         }
    }
    

    }
