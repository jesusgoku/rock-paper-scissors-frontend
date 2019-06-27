import { Component, Input } from '@angular/core';
import { Round } from '../round';

@Component({
  selector: 'app-round-list',
  templateUrl: './round-list.component.html',
  styleUrls: ['./round-list.component.scss']
})
export class RoundListComponent {
  @Input() rounds: Round[] = [];
  @Input() playerOne: string = 'Player One';
  @Input() playerTwo: string = 'Player Two';
}
