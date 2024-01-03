import { Injectable } from '@angular/core';
import { Race } from '../models/race';
@Injectable({
  providedIn: 'root'
})
export class RaceService {

  constructor() { }

  public getRaces(): Race[] {
    //Android, Human, Kasatha, Lashunta, Shirren, Vesk, Ysoki

    let races = []
    races.push(this.createRace("Android", [0,2,0,2,0,-2]));
    races.push(this.createRace("Human", [0,0,0,0,0,0]));
    races.push(this.createRace("Kasatha", [2,0,0,-2,2,0]));
    races.push(this.createRace("Lashunta (Damaya)", [0,0,-2,2,0,2]));
    races.push(this.createRace("Lashunta (Korasha)", [2,0,0,0,-2,2]));
    races.push(this.createRace("Shirren", [0,0,2,0,2,-2]));
    races.push(this.createRace("Vesk", [2,0,2,-2,0,0]));
    races.push(this.createRace("Ysoki", [-2,2,0,2,0,0]));
    return races;   
    
  }

  private createRace(name: string, abilityMods: number[]): Race {
    return { name: name, description: "Default",
    strength_mod: abilityMods[0],
    dexterity_mod: abilityMods[1],
    constitution_mod: abilityMods[2],
    intelligence_mod: abilityMods[3],
    wisdom_mod: abilityMods[4],
    charisma_mod: abilityMods[5],
   };
  }
}
