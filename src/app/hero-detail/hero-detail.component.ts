import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroService } from '../services/hero.service';
import { Hero } from '../models/hero';
import { Location, NgFor, NgIf, UpperCasePipe } from '@angular/common';
import { Subscription, take } from 'rxjs';
import {MatCardModule} from '@angular/material/card';

@Component({
  selector: 'app-hero-detail',
  standalone: true,
  imports: [NgIf,UpperCasePipe,NgFor,MatCardModule],
  templateUrl: './hero-detail.component.html',
  styleUrl: './hero-detail.component.css'
})
export class HeroDetailComponent implements OnInit,OnDestroy {
    hero?: Hero;
    subscription?:Subscription;

  constructor(
    private route: ActivatedRoute,
    private heroService: HeroService,
    private location:Location
  ) {}

  goBack(): void {
    this.location.back();
  }

  public getHero(): void {
    
    const id =this.route.snapshot.params['id'];
    this.subscription = this.heroService.getHero(id)
    .subscribe(response => {
      this.hero = response;
      console.log(response)
    });
  }

  ngOnInit(): void {
    this.getHero();
  }

  ngOnDestroy():void {
    this.subscription?.unsubscribe();
  }
}
