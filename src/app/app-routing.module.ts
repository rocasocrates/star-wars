import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DataApiService } from './services/data-api.service';
import { PeliculaComponent } from './pelicula/pelicula.component';
import { DetailsComponent } from './details/details.component';
const routes: Routes = [
  { path: '', redirectTo: 'pelicula', pathMatch: 'full' },
  { path: 'pelicula', component: PeliculaComponent },
   { path: 'details/:id', component: DetailsComponent },
   { path: 'services', component: DataApiService },
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
