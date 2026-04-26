import { Component, signal } from '@angular/core';
import { FindFish } from './find-fish/find-fish';
import { ShowRecipes } from './show-recipes/show-recipes';

@Component({
  selector: 'app-root',
  imports: [FindFish, ShowRecipes],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected readonly title = signal('recettes-machineafish');
  currentView: 'search' | 'listRecipes' = 'search';
  finalFishName: string = '';
  changePage(fishName: string): void {
    this.finalFishName = fishName;
    this.currentView = 'listRecipes';
  }
}
