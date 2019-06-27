import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { GameService } from '../game.service';
import { Game } from '../game';

@Component({
  selector: 'app-round',
  templateUrl: './round.component.html',
  styleUrls: ['./round.component.scss']
})
export class RoundComponent implements OnInit {
  loading: boolean = true;
  game: Game = null;
  isGameFinished: boolean;
  roundNumber: number;
  movements: string[] = ['', ''];
  step: number = 0;

  constructor(private route: ActivatedRoute, private router: Router, private gameService: GameService) { }

  ngOnInit() {
    const gameId: string = this.route.snapshot.paramMap.get('id');

    this.getGame(gameId);

    this.route.params.subscribe(({ id: gameId }) => this.getGame(gameId));
  }

  handlePlayRoundClick() {
    this.playRound();
  }

  handlePlayAgainButtonClick() {
    this.createGame();
  }

  handleNextPlayerClick() {
    this.step += 1;
  }

  createGame() {
    this.loading = true;

    this
      .gameService
      .createGame([this.game.player_one, this.game.player_two])
      .then(game => { this.router.navigateByUrl(`/${game.id}`); return game; })
      .then(() => { this.loading = false; })
  }

  getGame(gameId) {
    this.loading = true;

    return this
      .gameService
      .getGame(gameId)
      .then(game => this.roundInit(game))
      .then(() => { this.loading = false; })
      ;
  }

  playRound() {
    this.loading = true;

    this
      .gameService
      .playRound(this.game.id, this.movements)
      .then(game => this.roundInit(game))
      .then(() => { this.loading = false; })
      ;
  }

  roundInit(game: Game) {
    this.game = game;
    this.roundNumber = game.rounds.length + 1;
    this.isGameFinished = game.player_winner !== null;
    this.movements = ['', ''];
    this.step = 0;

    return game;
  }
}
