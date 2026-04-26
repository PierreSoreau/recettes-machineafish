import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-show-recipes',
  imports: [],
  templateUrl: './show-recipes.html',
  styleUrl: './show-recipes.scss',
})
export class ShowRecipes {
  @Input() fish: string = '';
}
