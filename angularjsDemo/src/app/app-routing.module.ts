import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {HeroComponent} from "./heroes/hero.component";


const routes: Routes =[
  {path: 'heroes',component: HeroComponent,loadChildren}
]

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
})


export class AppRoutingModule { }

