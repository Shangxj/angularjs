import { Injectable } from '@angular/core';
import {Hero} from "./heroes/hero";
import {HEROES} from "./heroes/mock-heroes";
import {Observable} from "rxjs/Observable";
import { of } from 'rxjs/observable/of'
import {MessageService} from "./message.service";

@Injectable()
export class HeroService {

  constructor(private messageService: MessageService) { }

  getHeroes(): Observable<Hero[]> {
    console.log("----------------herSercice---------------333333")
    this.messageService.add('HeroService: fetched heroes');
    return of(HEROES);
  }

}