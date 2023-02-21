import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CineComponent } from './components/cine/cine.component';
import { ContactComponent } from './components/contact/contact.component';
import { ErrorComponent } from './components/error/error.component';

import { InicioComponent } from './components/inicio/inicio.component';
import { LibrosComponent } from './components/libros/libros.component';
import { MusicaComponent } from './components/musica/musica.component';
import { PodcastComponent } from './components/podcast/podcast.component';
import { VideojuegosComponent } from './components/videojuegos/videojuegos.component';



const appRoutes: Routes = [
    { path: '', component: InicioComponent },
    { path: 'inicio', component: InicioComponent },
    { path: 'videojuegos', component: VideojuegosComponent },
    { path: 'cine', component: CineComponent },
    { path: 'cine/:genero', component: CineComponent },
    { path: 'podcasts', component: PodcastComponent },
    { path: 'libros', component: LibrosComponent },
    { path: 'musica', component: MusicaComponent},
    { path: 'contacto', component: ContactComponent },
    { path: '**', component: ErrorComponent } // This route must be the last one
];

// Export the module
export const routing: ModuleWithProviders<Object> = RouterModule.forRoot(appRoutes);