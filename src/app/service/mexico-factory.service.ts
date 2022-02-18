import { Injectable } from '@angular/core';
import { PizzaFactory } from '../shared/pizza.model';
import { Hawaiana, Champinon, Tocino } from '../shared/sabores.model';

@Injectable({
  providedIn: 'root'
})
//Concrete factory
export class MexicoFactoryService implements PizzaFactory {

  constructor() { }

  createHawaiana(): Hawaiana {
    return {base: 'pasta', ingredientes: ['pina', 'salsa chile', 'salchicha', 'queso fresco']};
  }

  createChampinon(): Champinon {
    return {base: 'pasta', ingredientes: ['pollo', 'salsa chile', 'champinon', 'queso fresco']};
  }

  createTocino(): Tocino {
    return {base: 'pasta', ingredientes: ['tocino', 'salsa chile', 'chiles', 'queso fresco']};
  }
}
