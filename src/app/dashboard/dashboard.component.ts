import { Component, OnInit } from '@angular/core';
import { Hero } from '../models/hero';
import { HeroService } from '../services/hero.service';
import { NgFor } from '@angular/common';
import { RouterLink } from '@angular/router';
import { HeroSearhComponent } from '../hero-search/hero-search.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [NgFor,RouterLink,HeroSearhComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent implements OnInit {
  heroes: Hero[] = [];

  constructor(private heroService: HeroService) { }

  getHeroes(): void {
    this.heroService.getHeroes()
      .subscribe((response : Hero[]) => {
        this.heroes = response.slice(0,8)
      });
  }

  ngOnInit(): void {
    this.getHeroes();
  }
}
