import { Injectable } from '@angular/core';
import { Hero } from '../hero';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor() { }

  getHeroes(): Hero[] {
    return [{id: 1, name: 'Hero 1'}, {id: 2, name: 'Hero 2'}, {id: 3, name: 'Hero 3'}];
  }
}
