import { AsyncPipe, NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { Hero } from '../models/hero';
import { HeroService } from '../services/hero.service';
import { RouterLink } from '@angular/router';
import { Observable, of } from 'rxjs';
import {MatCardModule} from '@angular/material/card';
@Component({
  selector: 'app-heroes',
  standalone: true,
  imports: [NgFor,RouterLink, AsyncPipe,MatCardModule],
  templateUrl: './heroes.component.html',
  styleUrl: './heroes.component.css'
})
export class HeroesComponent {
  heroes$?: Observable<Hero[]>;
  currentPage = 0;

  constructor(private heroService: HeroService) {}

  ngOnInit(): void {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroes$ = this.heroService.getHeroesByOffset(this.currentPage*20)
  }

  goToPreviousPage(): void {
    if (this.currentPage > 0) {
      this.currentPage--;
      this.getHeroes();
    }
  }

  goToNextPage(): void {
    if(this.currentPage < 79){
      this.currentPage++;
      this.getHeroes();
    }

  }

}
