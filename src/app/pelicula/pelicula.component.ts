import { Component, OnInit} from '@angular/core';
import { DataApiService } from 'src/app/services/data-api.service';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'pelicula',
  templateUrl: './pelicula.component.html'

})

export class PeliculaComponent implements OnInit{
   
  titulo_component = 'Peliculas';
  listFilms: any;
  film: any;
  listPeople: any;
  img: Array<string>=["./assets/img1.jpg", "./assets/img2.jpg", "./assets/img3.jpg",
                      "./assets/img4.jpg", "./assets/img5.jpg"];
                      items: Array<any> = []
                      
  constructor(private dataApi: DataApiService){
    this.items = [
        { name: 'assets/img1.jpg' },
        { name: 'assets/img2.jpg' },
        { name: 'assets/img3.jpg' },
        { name: 'assets/img4.jpg' },
        { name: 'assets/img5.jpg' },
       
        
      ]
  }
  
 
  ngOnInit(){

    this.searchListMovie();
    this.searchPeople();
}
  searchListMovie(){
    this.dataApi.getAllFilms()
    .subscribe((films) => this.listFilms = films['results']);
  }
  searchPeople()
  {
    this.dataApi.getAllPeople()
    .subscribe((peoples) => this.listPeople = peoples['results']);
  }
  opt(){
   let valor = (<HTMLInputElement>document.getElementById('sel1')).value;
   
   this.dataApi.getAllFilms()
    .subscribe((films) => this.listFilms = films['results']);
    this.film = this.listFilms.filter(elec => elec.episode_id == valor);

  }
    
 


}