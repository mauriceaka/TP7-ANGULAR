import { Component, OnInit } from '@angular/core';
import {PokeDetail, Pokemon} from '../pokemon';
import {PokeAPIServiceService} from '../poke-apiservice.service';
import {PokeShareInfoService} from '../poke-share-info.service';

@Component({
  selector: 'app-my-component',
  templateUrl: './my-component.component.html',
  styleUrls: ['./my-component.component.css'],
  providers: [PokeAPIServiceService, PokeShareInfoService]
})
export class MyComponentComponent implements OnInit {
  id = '';
  selectedPokeId = '';
  searchPokeName = '';
  pokes: Pokemon[] = [];
  pokeDetail: PokeDetail | undefined;

  constructor(private pokeService: PokeAPIServiceService, private pokeShareInfoService: PokeShareInfoService) {

  }

  ngOnInit(): void {
    this.pokeService.getPokemons().subscribe((data) => {
      data.results.forEach((e, index) => {
        this.pokes.push(new Pokemon('' + index, e.name, e.url));
      });
    });
  }


  // tslint:disable-next-line:typedef
  go() {
    // tslint:disable-next-line:triple-equals
    if (this.selectedPokeId != ''){
      this.pokeService.getPokemonsInfo(this.selectedPokeId).subscribe(data => this.pokeDetail = data);
      this.pokeShareInfoService.setValue(this.selectedPokeId);
    }
  }
}
