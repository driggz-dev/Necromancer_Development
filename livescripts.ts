import { NecroSpells } from "./NecroSpells";

export function Main(events: TSEvents) {
    onLevel(events);
    NecroSpells(events);
    

}

export function onLevel(events: TSEvents) {
    events.Player.OnLevelChanged((player,oldLevel)=>{
        player.SendAreaTriggerMessage("|cff00FFF0Congrats on leveling up to "+player.GetLevel()+"!")
        let level: int = player.GetLevel()
            if(level%5 == 0){
                player.ModifyMoney(100)
                player.AddItem(20880,level/5)
            }
            if(level == 80){
                player.SendBroadcastMessage("|cffffffff[LevelTracker]|r "+player.GetName() + " has reached max level! Congrats on reaching "+player.GetLevel()+"!")
            }
        
    });

    events.Player.OnCreateEarly((player)=>{
        if(player.GetClass() == 13) {
            player.SetLevel(60);
        }
    });
  events.Player.OnUpdateAttackPower((player,ap)=>{
        ap.set(5*player.GetLevel());
    })

    events.Maps.OnPlayerEnter((map, player) => {
        if (map.IsDungeon() || map.IsRaid()) {
            if (player.IsInGroup()) {
                let groupCount = player.GetGroup().GetMembersCount();
                if (groupCount > 4)
                    return
                map.GetCreatures().forEach((creature) => {
                    creature.AddAura(80951, creature).SetStackAmount(5 - groupCount)
                })
            } else {
                //solo
                map.GetCreatures().forEach((creature) => {
                    creature.AddAura(80951, creature).SetStackAmount(5)
                
                })
            }
        }
    })
    

    }


