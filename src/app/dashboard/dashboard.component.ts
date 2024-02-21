import { Component, OnInit } from '@angular/core';
import { Hero } from '../models/hero';
import { HeroService } from '../services/hero.service';
import { AsyncPipe, NgFor, NgIf, UpperCasePipe } from '@angular/common';
import { RouterLink } from '@angular/router';
import { HeroSearhComponent } from '../hero-search/hero-search.component';
import { Observable, map, of, switchMap, take } from 'rxjs';
import {MatCardModule} from '@angular/material/card';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [NgFor,RouterLink,HeroSearhComponent,AsyncPipe,NgIf,MatCardModule,UpperCasePipe],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent implements OnInit {
  heroes$?: Observable<Hero[]>;

  constructor(private heroService: HeroService) { }

  getHeroes(): void {
    
    this.heroes$ = this.heroService.getHeroes().pipe(
      map(heroes => heroes.slice(0, 10)),
    );
  }

  ngOnInit(): void {
    this.getHeroes();
  }
}
