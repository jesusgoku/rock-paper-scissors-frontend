import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GameService } from '../game.service';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {
  loading: boolean = false;
  errorMessage: string = '';
  playerOne: string = '';
  playerTwo: string = '';

  constructor(private gameService: GameService, private router: Router) { }

  ngOnInit() {
  }

  handleSubmit() {
    this.createGame([this.playerOne, this.playerTwo]);
  }

  createGame(players: string[]) {
    this.loading = true;
    this.errorMessage = '';

    return this
      .gameService
      .createGame(players)
      .then(game => { this.router.navigateByUrl(`/${game.id}`) })
      .catch(e => { this.errorMessage = 'An error has ocurred' })
      .then(() => { this.loading = false; })
      ;
  }
}
