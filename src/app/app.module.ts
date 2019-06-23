import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { PeliculaComponent } from './pelicula/pelicula.component';
import { Ng2CarouselamosModule } from 'ng2-carouselamos';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

//Services
import { DataApiService } from './services/data-api.service';
import { DetailsComponent } from './details/details.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    PeliculaComponent,
    DetailsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    Ng2CarouselamosModule,
    AppRoutingModule,
    CommonModule,
    RouterModule
  ],
  providers: [DataApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
