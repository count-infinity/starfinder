import { Ability } from "./ability";
import { Mod } from "./mod";
import { Race } from "./race";


export class Player {
    abilities: { [key: string]: Ability };
    race: Race | undefined;
    discretionary: number = 10;

    constructor() {
        this.abilities = {
            "strength": { name:"Strength", value: 10},
            "dexterity": { name:"Dexterity", value: 10},
            "intelligence":{ name:"Intelligence", value: 10},
            "wisdom": { name:"Wisdom", value: 10},
            "charisma": { name:"Charisma", value: 10},
            "constitution": { name:"Constitution", value: 10}
        }

        this.race = { name:"Human", description: "A human",
            mods:[
                new Mod("strength_mod","strength","race",0),
                new Mod("dexterity_mod","dexterity","race",0),
                new Mod("constitution_mod","constitution","race",0),
                new Mod("intelligence_mod","intelligence","race",0),
                new Mod("wisdom_mod","wisdom","race",0),
                new Mod("charisma_mod","charisma","race",0)
            ]
        };
        
    }

    getRaceMod(ability: string)
    {
        let raceMod = this.race?.mods
        ?.filter((mod) => mod.for_attribute == ability)
        ?.reduce((sum, current) => sum + current.value, 0);

        return raceMod ?? 0;
        
    }

    getAbilityValue(ability: string) {

        let total = this.abilities[ability].value + this.getRaceMod(ability);
        return total;
    }


}