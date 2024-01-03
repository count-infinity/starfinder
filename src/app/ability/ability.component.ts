import { Component } from '@angular/core';
import { PlayerService } from '../services/player.service';
import { Observable } from 'rxjs';
import { Player } from '../models/player';

@Component({
  selector: 'app-ability',
  templateUrl: './ability.component.html',
  styleUrls: ['./ability.component.css']
})
export class AbilityComponent {
  
  player$: Observable<Player>;
  
  constructor(private playerService: PlayerService) {
    this.player$ = playerService.player$;
  }

  addPoint(ability: string): void {
    this.playerService.addPoint(ability);
  }
  subtractPoint(ability: string): void {
    this.playerService.subtractPoint(ability);    
  }

}
