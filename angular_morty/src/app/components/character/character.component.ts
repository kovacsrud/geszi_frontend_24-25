import { Component, Input } from '@angular/core';
import { Character } from '../../../types/character';

@Component({
  selector: 'app-character',
  standalone: true,
  imports: [],
  templateUrl: './character.component.html',
  styleUrl: './character.component.css'
})
export class CharacterComponent {

  @Input()
  result:Character={} as Character;

}
