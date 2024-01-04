import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Player } from '../models/player';
import { Race } from '../models/race';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {

  private playerSubject :BehaviorSubject<Player>;
  public player$: Observable<Player>;

  constructor() { 

    const defaultPlayer = new Player();
    this.playerSubject = new BehaviorSubject<Player>(defaultPlayer);
    this.player$ = this.playerSubject.asObservable();

  }

  addPoint(ability: string): void {
    let player = this.playerSubject.getValue();

    if (player.discretionary <= 0) return;

    let current: number = player.getAbilityValue(ability);
    if (current >= 18) return;
    
    player.abilities[ability].value += 1;
    player.discretionary -= 1;

    this.playerSubject.next(player);

  }
  subtractPoint(ability: string): void {
    let player = this.playerSubject.getValue();

    let current: number = player.getAbilityValue(ability);
    if (current <= 10) return;

    player.abilities[ability].value -= 1;
    player.discretionary += 1;    

    this.playerSubject.next(player);
  }
  selectRace(race: Race | undefined): void 
  {
    let player = this.playerSubject.getValue();
    player.race=race;
    
    this.checkAttributeValue("strength");
    this.checkAttributeValue("dexterity");
    this.checkAttributeValue("constitution");
    this.checkAttributeValue("intelligence");
    this.checkAttributeValue("wisdom");
    this.checkAttributeValue("charisma");
      
    
    this.playerSubject.next(player);
    
  }

  checkAttributeValue(attributeName:string) {
    let player = this.playerSubject.getValue();
    let total_ability = player.getAbilityValue(attributeName);
    if ( total_ability > 18) {
      player.discretionary += (total_ability-18);
      player.abilities[attributeName].value -= (total_ability-18);
    }

  }

  
}
