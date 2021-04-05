import { Component, OnInit } from '@angular/core';
//import { WeatherModel } from './models/weather.module';
import { WeatherService } from './services/weather.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'weatherapp';
  
  weatherW: any;
  

  constructor(private weatherService: WeatherService){
  }
  
  ngOnInit(){

  }

  getWeather(city: string){
    
    this.weatherService.getWeather(city)
    .subscribe(
      res => {this.weatherW = res
              console.log(this.weatherW)
      },
      err => console.log(err)
    )
    
  }
  
  submitCity(city: HTMLInputElement){
    
    if(city.value){
      this.getWeather(city.value);  
      console.log(city.value);

      city.value = "";
    }else{
      alert('Por favor, ingresa una ciudad');
    }
    
    return false;
  }



}
