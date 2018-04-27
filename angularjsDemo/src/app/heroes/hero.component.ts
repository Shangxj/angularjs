import { Component, OnInit } from '@angular/core';
import {Hero} from './hero';
import {HeroService} from "../hero.service";

@Component({
  selector: 'app-heroes',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements OnInit {


/*  hero: Hero = {
    id: 1,
    name: '李四'
  };*/

  // selectedHero: Hero;

  heroes: Hero[];

  constructor(private heroService: HeroService) { }



/*  onSelect(hero: Hero) {
    this.selectedHero = hero;
  }*/

  getHeroes(): void{
    console.log("----------------herSercice---------------2222")
   this.heroService.getHeroes().subscribe(heroes => this.heroes = heroes);
  }



  ngOnInit() {
    console.log("----------------herSercice---------------11111")
    this.getHeroes();
  }

}
