import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Game } from './game';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GameService {
  baseUrl: string = environment.gameServiceBaseUrl;

  constructor(private httpClient: HttpClient) { }

  public createGame(players: string[]): Promise<Game> {
    return this
      .httpClient
      .post<Game>(`${this.baseUrl}/games`, { players })
      .toPromise()
      ;
  }

  public getGame(gameId): Promise<Game> {
    return this
      .httpClient
      .get<Game>(`${this.baseUrl}/games/${gameId}`)
      .toPromise()
      ;
  }

  public playRound(gameId, movements: string[]): Promise<Game> {
    return this
      .httpClient
      .post<Game>(`${this.baseUrl}/games/${gameId}`, { movements })
      .toPromise()
      ;
  }
}
