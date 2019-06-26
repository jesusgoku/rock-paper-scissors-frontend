import { Round } from './round';

export class Game {
  id: number;
  player_one: string;
  player_two: string;
  player_winner: string;
  created_at: string;
  updated_at: string;
  rounds: Round[];
}
