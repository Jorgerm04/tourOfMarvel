import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroService } from '../services/hero.service';
import { Hero } from '../models/hero';
import { Location, NgIf, UpperCasePipe } from '@angular/common';

@Component({
  selector: 'app-hero-detail',
  standalone: true,
  imports: [NgIf,UpperCasePipe],
  templateUrl: './hero-detail.component.html',
  styleUrl: './hero-detail.component.css'
})
export class HeroDetailComponent {
    hero?: Hero;

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
    this.heroService.getHero(id)
    .subscribe(response => {
      this.hero = response[0];
      console.log(response[0])
    });
  }

  ngOnInit(): void {
    this.getHero();
  }
}
