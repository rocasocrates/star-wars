import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpClientModule  } from '@angular/common/http';
import { Observable } from "rxjs/internal/observable";
@Injectable({
  providedIn: 'root'
})
export class DataApiService {

  constructor(private http: HttpClient) { }

  getAllFilms()
  {
    const urlApi = "https://swapi.co/api/films/";
    return this.http.get(urlApi);
  }
  getAllPeople()
  {
    const urlApi = "https://swapi.co/api/people/";
    return this.http.get(urlApi);
  }
}
