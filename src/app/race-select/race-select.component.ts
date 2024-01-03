import { Component } from '@angular/core';
import { Class, Race, Theme } from '../models/race';
import { RaceService } from '../services/race-service.service';
import { ClassService } from '../services/class.service';
import { ThemeService } from '../services/theme.service';
import { PlayerService } from '../services/player.service';

@Component({
  selector: 'app-race-select',
  templateUrl: './race-select.component.html',
  styleUrls: ['./race-select.component.css']
})
export class RaceSelectComponent {

  selectedRace : Race | undefined;
  selectedTheme : Theme | undefined;
  selectedClass : Class | undefined;

  races: Race[] | undefined;
  classes: Class[] | undefined;
  themes: Theme[] | undefined;

  constructor(private raceService: RaceService, private classService: ClassService, private themeService: ThemeService, private playerService: PlayerService) {
    this.races=this.raceService.getRaces();
    this.themes=this.themeService.getThemes();
    this.classes=this.classService.getClasses();
  }

  onSelectRace(race: Race) {
    if (this.selectedRace?.name === race.name)
    {
      this.selectedRace = undefined;
    }
    else {
      this.selectedRace = race;
    }
    this.playerService.selectRace(this.selectedRace);
  }
  onSelectTheme(theme: Theme) {
    if (this.selectedTheme?.name === theme.name)
    {
      this.selectedTheme = undefined;
    }
    else {
      this.selectedTheme = theme;
    }
  }
  onSelectClass(clazz: Class) {
    if (this.selectedClass?.name === clazz.name)
    {
      this.selectedClass = undefined;
    }
    else {
      this.selectedClass = clazz;
    }
  }

}
