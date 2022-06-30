import { AfterViewInit, Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-pokemon-card',
  templateUrl: './pokemon-card.component.html',
  styleUrls: ['./pokemon-card.component.css']
})
export class PokemonCardComponent implements OnInit, AfterViewInit, OnChanges {
  pokemons: any[] = [];
   pokeArray: any[] = []
  @Input() word:string = '';
  constructor(
    private dataService: DataService
  ) { }
  ngOnChanges(changes: SimpleChanges): void {
    console.log(this.word)
    if (this.word){
    
      const fill =  this.pokeArray.filter((data) => {return data.name ===this.word})
      this.pokemons= fill
      console.log("dhdhdh", fill)
    }else{
      this.pokemons= this.pokeArray
    }
  }
  ngAfterViewInit(): void {
    console.log(this.word)  }
  
  
  ngOnInit(): void {
    console.log(this.word)
    this.dataService.getPokemons()
    .subscribe((response: any) => {
      response.results.forEach((result: { name: string; }) => {
        this.dataService.getPokemonsDetails(result.name)
        .subscribe((uniqueResponse: any) => {
  
          this.pokeArray.push(uniqueResponse)
          this.pokemons = this.pokeArray
          console.log(this.pokemons);
         
        });
      });
    });
  }

}
