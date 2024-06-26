import { Component, EventEmitter, Output } from '@angular/core';
import { Character } from '../../interfaces/interfaces.component';

@Component({
  selector: 'dbz-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {

  @Output()
  public onNewCharacter: EventEmitter<Character> = new EventEmitter();


  public character: Character = {
    name:'',
    power:0
  }

  public emitCharacter() :void {
    if (this.character.name.length === 0) return;
    this.onNewCharacter.emit(this.character)

    this.character= {name:'', power:0};
  }
}
