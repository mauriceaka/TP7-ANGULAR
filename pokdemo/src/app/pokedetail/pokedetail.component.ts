import {Component, Input, OnInit} from '@angular/core';
import {PokeDetail} from "../pokemon";

@Component({
  selector: 'app-pokedetail',
  templateUrl: './pokedetail.component.html',
  styleUrls: ['./pokedetail.component.css']
})
export class PokedetailComponent implements OnInit {

  @Input('detail')
  detail: PokeDetail | undefined ;



  constructor() { }

  ngOnInit(): void {
    // @ts-ignore
    console.log(this.detail.abilities)
  }

}
