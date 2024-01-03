import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Player } from '../models/player';

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

    let current: number = player.abilities[ability].value;
    if (current >= 18) return;
    
    player.abilities[ability].value += 1;
    player.discretionary -= 1;

    this.playerSubject.next(player);

  }
  subtractPoint(ability: string): void {
    let player = this.playerSubject.getValue();

    let current: number = player.abilities[ability].value;
    if (current <= 10) return;

    player.abilities[ability].value -= 1;
    player.discretionary += 1;    

    this.playerSubject.next(player);
  }
}
