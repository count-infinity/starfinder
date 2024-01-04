import { Ability } from "./ability";
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
        strength_mod: 0,
        dexterity_mod: 0,
        constitution_mod: 0,
        intelligence_mod: 0,
        wisdom_mod: 0,
        charisma_mod: 0
        };
        
    }

    getAbilityValue(ability: string) {
        if (ability == "strength") {
            console.log("Strength");
            let race_mod = this.race?.strength_mod ?? 0;
            return race_mod + this.abilities[ability]?.value;
        }
        else if (ability == "dexterity") {
            console.log("dexterity");
            let race_mod = this.race?.dexterity_mod ?? 0;
            return race_mod + this.abilities[ability]?.value;
        }
        else if (ability == "constitution") {
            console.log("Strength");
            let race_mod = this.race?.constitution_mod ?? 0;
            return race_mod + this.abilities[ability]?.value;
        }
        else if (ability == "intelligence") {
            console.log("intelligence");
            let race_mod = this.race?.intelligence_mod ?? 0;
            return race_mod + this.abilities[ability]?.value;
        }
        else if (ability == "wisdom") {
            console.log("wisdom");
            let race_mod = this.race?.wisdom_mod ?? 0;
            return race_mod + this.abilities[ability]?.value;
        }
        else if (ability == "charisma") {
            console.log("charisma");
            let race_mod = this.race?.charisma_mod ?? 0;
            return race_mod + this.abilities[ability]?.value;
        }
        return 0;
    }


}