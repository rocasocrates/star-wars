import { Component, OnInit, Input, Output } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { DataApiService } from 'src/app/services/data-api.service';
@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  listFilms: any;
  film: any;
  valor: any;
  urlTree: any;
  local: Array<any> = [];
   //@Output() title: string;
   title: string;
   id: any;
  constructor(private dataApi: DataApiService,  private route: ActivatedRoute) { 
  
    this.film = this.route.snapshot.paramMap.get('id');
  }
 
  ngOnInit() {
    this.opt();
    setTimeout(this.espera, 3000);

  }
  opt(){
  
    this.dataApi.getAllFilms()
     .subscribe((films) => this.listFilms = films['results'].filter(elec => elec.episode_id == this.film)); 
    // this.dataApi.getFilms(url)
    // .subscribe((films) => this.listFilms = films['results']);
    for (let x=0; x<=localStorage.length-1; x++)  {  
      let clave = localStorage.key(x); 
      this.local.push(localStorage.getItem(clave));
    }
   }

  espera()
  {
    this.title = (<HTMLInputElement>document.getElementById('title')).value;
    this.id = (<HTMLInputElement>document.getElementById('id')).value;
   //console.log("Titulo "+this.title+" Id : "+this.id );
   localStorage.setItem(this.id, this.title);
}

}
