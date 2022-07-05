import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { PokemonCardComponent } from './components/pokemon-card/pokemon-card.component';
import { SpacerComponent } from './components/spacer/spacer.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PokemonCardComponent,
    SpacerComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
