import { Component, OnInit } from '@angular/core';
import {Hero} from './hero';
import {HEROES} from "./mock-heroes";

@Component({
  selector: 'app-heroes',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements OnInit {

  heroes = HEROES;

  hero: Hero = {
    id: 1,
    name: '李四'
  };

  constructor() { }


  selectedHero: Hero;
  onSelect(hero: Hero) {
    // console.log(hero)
    this.selectedHero = hero;
  }


  ngOnInit() {
  }

}
