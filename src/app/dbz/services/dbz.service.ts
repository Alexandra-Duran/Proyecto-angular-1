import { Injectable } from "@angular/core";
import {v4} from "uuid"

import { Character } from '../interfaces/interfaces.component';

@Injectable({
  providedIn:'root'
})
export class DbzService{

  public character: Character[] = [{
    id: v4(),
    name: 'krilin',
    power: 1000
  },
 {
  id: v4(),
  name: 'Goku',
  power: 15000
 }]

 onNewCharacter(character: Character): void {
    const newCharacter: Character = {id: v4(), ...character}
    this.character.push(newCharacter);
  }

  // onDeleteCharater(id:number):void {
  //   this.character.splice(id, 1)
  // }

  deleteCharacterByID(id:string){
    this.character = this.character.filter( character => character.id != id);
  }
}
