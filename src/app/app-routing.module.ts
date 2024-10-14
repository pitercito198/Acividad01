import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MoviesComponent } from './movies/movies.component';

const routes: Routes = [
  { path: 'movies', component: MoviesComponent },
  { path: '', redirectTo: '/movies', pathMatch: 'full' }, // Redirigir a películas si no hay ruta
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
