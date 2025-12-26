import { Component } from '@angular/core';
import { Cards } from 'src/app/models/cards';
import { CardsService } from 'src/app/services/cards.service';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
             
export class CardsComponent {
  constructor(private service:CardsService){}
  ngOnInit(){
    this.service.getdata().subscribe(data=>this.cards=data)
  }
  cards:Cards[]=[];

}
