import { Injectable } from '@angular/core';
import { Race } from '../models/race';
import { Mod } from '../models/mod';
@Injectable({
  providedIn: 'root'
})
export class RaceService {
  
  private races: Race[];
  
  constructor() { 
    
    let raceList: Race[] = [];
    raceList.push(this.createRace("Android", [0,2,0,2,0,-2]));
    raceList.push(this.createRace("Human", [0,0,0,0,0,0]));
    raceList.push(this.createRace("Kasatha", [2,0,0,-2,2,0]));
    raceList.push(this.createRace("Lashunta (Damaya)", [0,0,-2,2,0,2]));
    raceList.push(this.createRace("Lashunta (Korasha)", [2,0,0,0,-2,2]));
    raceList.push(this.createRace("Shirren", [0,0,2,0,2,-2]));
    raceList.push(this.createRace("Vesk", [2,0,2,-2,0,0]));
    raceList.push(this.createRace("Ysoki", [-2,2,0,2,0,0]));
    this.races = raceList;

  }

  public getRaces(): Race[] {
    //Android, Human, Kasatha, Lashunta, Shirren, Vesk, Ysoki
    return this.races;       
  }

  private createRace(name: string, abilityMods: number[]): Race {
    return { name: name, description: "Default",
    //name: string,for_attribute: T, from: V, value: number

    mods:[
      new Mod("strength_mod","strength","race",abilityMods[0]),
      new Mod("dexterity_mod","dexterity","race",abilityMods[1]),
      new Mod("constitution_mod","constitution","race",abilityMods[2]),
      new Mod("intelligence_mod","intelligence","race",abilityMods[3]),
      new Mod("wisdom_mod","wisdom","race",abilityMods[4]),
      new Mod("charisma_mod","charisma","race",abilityMods[5])
     ]   
   };
  }
}
