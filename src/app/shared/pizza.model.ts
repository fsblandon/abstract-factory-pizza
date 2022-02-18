import { ColombiaFactoryService } from "../service/colombia-factory.service";
import { MexicoFactoryService } from "../service/mexico-factory.service";
import { Champinon, Hawaiana, Tocino } from "./sabores.model";

//Abstract Factory Interface
export interface PizzaFactory {
  createHawaiana: () => Hawaiana;
  createChampinon: () => Champinon;
  createTocino: () => Tocino;
}

//Abstract providers
export const paisesMap = new Map([
  ['Colombia', ColombiaFactoryService],
  ['Mexico', MexicoFactoryService]
])
