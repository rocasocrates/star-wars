import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { PeliculaComponent } from './pelicula/pelicula.component';
import { Ng2CarouselamosModule } from 'ng2-carouselamos';

//Services
import { DataApiService } from './services/data-api.service';

@NgModule({
  declarations: [
    AppComponent,
    PeliculaComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    Ng2CarouselamosModule
  
  ],
  providers: [DataApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
