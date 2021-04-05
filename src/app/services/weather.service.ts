import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
//import { WeatherModel } from '../models/weather.module';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  public url: string = "api.openweathermap.org/data/2.5/weather?";
  public id: string = '7c06eb1d45e395fe6d3262284f4a31e2';

  constructor(private _http: HttpClient) {
    this.url = "https://api.openweathermap.org/data/2.5/weather?";
    this.id = '7c06eb1d45e395fe6d3262284f4a31e2';
   }

  getWeather(city: string){

    let headers = new HttpHeaders().set('Content-Type', 'application/json');

    return this._http.get(this.url+'q='+city+'&units=metric'+'&lang=es'+'&appid='+this.id);
  }


}

//api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}


