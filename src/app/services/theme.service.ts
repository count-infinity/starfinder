import { Injectable } from '@angular/core';
import { Theme } from '../models/race';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {

  constructor() { }

  public getThemes(): Theme[] {
    //Android, Human, Kasatha, Lashunta, Shirren, Vesk, Ysoki

    let themes = []
    themes.push(this.createTheme("Ace Pilot"));
    themes.push(this.createTheme("Bounty Hunter"));
    themes.push(this.createTheme("Icon"));
    themes.push(this.createTheme("Mercenary"));
    themes.push(this.createTheme("Outlaw"));
    themes.push(this.createTheme("Priest"));
    themes.push(this.createTheme("Scholar"));
    themes.push(this.createTheme("Spacefarer"));
    themes.push(this.createTheme("Xenoseeker"));
    themes.push(this.createTheme("Themeless"));
    return themes;   
    
  }

  private createTheme(name: string): Theme {

    return { name: name, description: "Default" };

  }
}

