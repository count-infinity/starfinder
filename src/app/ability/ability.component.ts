import { Component } from '@angular/core';

@Component({
  selector: 'app-ability',
  templateUrl: './ability.component.html',
  styleUrls: ['./ability.component.css']
})
export class AbilityComponent {
  abilities: { [key:string]: number}= {
  strength: 10,
  dexterity: 10,
  constitution: 10,
  wisdom: 10,
  intelligence: 10,
  charisma: 10
  };

  discretionary = 10
  

  addPoint(ability: string): void {
    let current: number = this.abilities[ability];
    if (current >= 18) return;
    
    this.abilities[ability] += 1;
    this.discretionary -= 1;

  }
  subtractPoint(ability: string): void {
    let current: number = this.abilities[ability];
    if (current <= 10) return;

    this.abilities[ability] -= 1;
    this.discretionary += 1;    
  }

}
