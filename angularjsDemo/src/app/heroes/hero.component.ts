import { Component, OnInit } from '@angular/core';
import {Hero} from './hero';

@Component({
  selector: 'app-shang',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements OnInit {

  hero: Hero = {
    id: 1,
    name: '李四'
  };
  constructor() { }

  ngOnInit() {
  }

}
