import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {


  public heroName: string[] = ['Spidermam', 'Ironman', 'Hulk', 'she Hulk', 'Thor'];
  public deleteHero?: string = '';

  removeLastHero():void{
    this.deleteHero = this.heroName.pop();
  }
}
