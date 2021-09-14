import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SuperHero } from '../../interfaces/SuperHero';
import { HeroService } from '../../services/hero.service';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {
  hero: SuperHero | undefined; 
  constructor(
    private route: ActivatedRoute,
    private heroService : HeroService 
    ) { }

  ngOnInit() {

    const routeParams = this.route.snapshot.paramMap;
    const heroIdFromRoute = Number(routeParams.get('idHero'));
    this.hero = this.heroService.getHeroesById(heroIdFromRoute);
  }

}