import { Component, OnInit } from '@angular/core';
import { SuperHero } from '../../interfaces/SuperHero';
import { HeroService } from '../../services/hero.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  heroes: Array<SuperHero>;
  constructor(private heroService: HeroService ) {}

  ngOnInit() {
    this.heroes = this.heroService.getHeroes();
  }
}


