import { Injectable } from '@angular/core';
import { Class } from '../models/race';

@Injectable({
  providedIn: 'root'
})
export class ClassService {

  constructor() { }

  public getClasses(): Class[] {    

    let classes = []
    classes.push(this.createClass("Envoy"));
    classes.push(this.createClass("Mechanic"));
    classes.push(this.createClass("Mystic"));
    classes.push(this.createClass("Operative"));
    classes.push(this.createClass("Solarian"));
    classes.push(this.createClass("Soldier"));
    classes.push(this.createClass("Technomancer"));
    return classes;   
    
  }

  private createClass(name: string): Class {

    return { name: name, description: "Default",    
   };

  }
}
