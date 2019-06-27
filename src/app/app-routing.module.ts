import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GameComponent } from './game/game.component';
import { RoundComponent } from './round/round.component';

const routes: Routes = [
  { path: ':id', component: RoundComponent },
  { path: '', component: GameComponent, pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
