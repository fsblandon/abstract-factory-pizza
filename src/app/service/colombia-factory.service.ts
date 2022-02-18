import { Injectable } from '@angular/core';
import { PizzaFactory } from '../shared/pizza.model';
import { Champinon, Hawaiana, Tocino } from '../shared/sabores.model';

@Injectable({
  providedIn: 'root'
})
//Concrete factory
export class ColombiaFactoryService implements PizzaFactory {

  constructor() { }

  createHawaiana(): Hawaiana {
    return {base: 'pasta', ingredientes: ['pina', 'fruko', 'salchicha', 'mozarella']};
  }

  createChampinon(): Champinon {
    return {base: 'pasta', ingredientes: ['pollo', 'fruko', 'champinon', 'mozarella']};
  }

  createTocino(): Tocino {
    return {base: 'pasta', ingredientes: ['tocino', 'fruko', 'salchicha', 'mozarella']};
  }
}
