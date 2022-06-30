import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private baseUrl:string = `https://pokeapi.co/api/v2/`;

  constructor(
    private http: HttpClient
  ) { }

  //Get Pokemons
  getPokemons(){
    return this.http.get(this.baseUrl + `pokemon?limit=100`);
  }

  //Get More Data On Pokemons
  getPokemonsDetails(name: string){
    return this.http.get(this.baseUrl + `pokemon/${name}`);
  }
}
