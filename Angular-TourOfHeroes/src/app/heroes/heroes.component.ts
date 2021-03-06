import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from './hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  hero: Hero[];
  constructor(private servico: HeroService) { }

  ngOnInit() {
    this.hero = this.servico.getHeroes();
  }

}
