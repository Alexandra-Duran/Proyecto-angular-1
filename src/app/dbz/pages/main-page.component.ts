import { Character } from './../interfaces/interfaces.component';
import { Component } from "@angular/core";
import { DbzService } from '../services/dbz.service';




@Component({
  selector: 'dbz-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent{
  constructor(private dbzService: DbzService){}

  get character(): Character[]{
    return [...this.dbzService.character]
  }

  onNewCharacter(character:Character):void{
    this.dbzService.onNewCharacter(character)
  }

  deleteCharacter(id:string){
    this.dbzService.deleteCharacterByID(id)
  }

}
