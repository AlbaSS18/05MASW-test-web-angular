import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { CabeceraComponent } from './components/cabecera/cabecera.component';
import { NavegacionComponent } from './components/navegacion/navegacion.component';
import { PieComponent } from './components/pie/pie.component';
import { CineComponent } from './components/cine/cine.component';
import { LibrosComponent } from './components/libros/libros.component';
import { PodcastComponent } from './components/podcast/podcast.component';
import { VideojuegosComponent } from './components/videojuegos/videojuegos.component';
import { MusicaComponent } from './components/musica/musica.component';
import { routing } from './app.routing';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    CabeceraComponent,
    NavegacionComponent,
    PieComponent,
    CineComponent,
    LibrosComponent,
    PodcastComponent,
    VideojuegosComponent,
    MusicaComponent
  ],
  imports: [
    BrowserModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
