import { Component, Injector, OnInit } from '@angular/core';
import { paisesMap } from './shared/pizza.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

//Cliente
export class AppComponent implements OnInit {
  title = 'pizza-factory';
  result: any = {base: '', ingredientes: []};
  paises: string[] = ['Mexico', 'Colombia'];
  pizzas: string[] = ['Hawaiana', 'Champinon', 'Tocino'];
  pizzaSelected: string = 'Seleccionar Pizza';
  countrySelected: string = 'Seleccionar Pais';
  injectable: any;
  service: any;

  constructor(
    private injector: Injector
  ) {
  }

  ngOnInit(): void {
  }

  getCountry(country: any) {
    this.countrySelected = country;
  }

  getPizza(pizza: any) {
    this.pizzaSelected = pizza;
  }

  createPizza() {
    //resolve abstract factory
    this.injectable = paisesMap.get(this.countrySelected);
    //Inject service
    this.service = this.injector.get(this.injectable);

    //Call Concrete Product
    if(this.pizzaSelected === 'Hawaiana') {
      this.result = this.service.createHawaiana();
    } else if(this.pizzaSelected === 'Champinon') {
      this.result = this.service.createChampinon();
    } else if(this.pizzaSelected === 'Tocino') {
      this.result = this.service.createTocino();
    }
  }

}
