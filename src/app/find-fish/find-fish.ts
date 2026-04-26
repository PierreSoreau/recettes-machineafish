import { Component, EventEmitter, OnInit, Output, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-find-fish',
  imports: [FormsModule],
  templateUrl: './find-fish.html',
  styleUrl: './find-fish.scss',
})
export class FindFish implements OnInit {
  http = inject(HttpClient);
  researchOfTheUser: string = '';
  suggestedFishNames: string[] = [];
  listFishNames: string[] = [];

  ngOnInit(): void {
    //url qui permet d'accéder à la fonction du controller php qui sort la liste des noms de poissons
    const url = '/index.php?route=api-poissons';

    //on récupère la liste des noms des poissons via un get.
    //Subsribe permet d'envoyer le camion avec la demande sur internet
    //le next permet de détailler ce que le camion doit faire une fois qu'il a récupéré l'information de php

    this.http.get<string[]>(url).subscribe({
      next: (listFish) => {
        this.listFishNames = listFish;
        console.log('Poissons récupérés depuis SQL :', this.listFishNames);
      },
      error: (error) => {
        console.error('Aïe, impossible de joindre PHP :', error);
      },
    });
  }
  //Fonction qui permet de faire des suggestions à l'utilisateur qui écrit dans le barre de recherche
  fishFilter(): void {
    // Si la barre de recherche est vide, on vide les suggestions

    if (this.researchOfTheUser === '') {
      this.suggestedFishNames = [];
      return;
    }

    this.suggestedFishNames = this.listFishNames.filter((poisson) =>
      poisson.includes(this.researchOfTheUser.toLowerCase()),
    );
  }

  selectSuggestion(poisson: string) {
    this.researchOfTheUser = poisson;
    this.showRecipes();
  }

  @Output() alertFishFound = new EventEmitter<string>();

  showRecipes(): void {
    if (this.researchOfTheUser !== '') {
      this.alertFishFound.emit(this.researchOfTheUser);
    }
  }
}
