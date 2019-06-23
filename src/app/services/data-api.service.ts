import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpClientModule  } from '@angular/common/http';
import { Observable } from "rxjs/internal/observable";
import { ActivatedRoute, Params, Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class DataApiService {
  private route: Router;
  constructor(private http: HttpClient) { }

  getRoute()
  {
    return this.route;
  }

  getAllFilms()
  {
    const urlApi = "https://swapi.co/api/films/";
    return this.http.get(urlApi);
  }
  getFilms(url)
  {
    const urlApi = "https://swapi.co/api/films/?"+url;
    return this.http.get(urlApi);
  }
  getAllPeople()
  {
    const urlApi = "https://swapi.co/api/people/";
    return this.http.get(urlApi);
  }
}
