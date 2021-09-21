import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { SuperHero } from '../../interfaces/SuperHero';
import { HeroService } from '../../services/hero.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  heroes: Array<SuperHero>;
  heroFrom: FormGroup;
  constructor(private heroService: HeroService ) {
    this.heroFrom = new FormGroup({
      nombre: new FormControl('', [Validators.required, Validators.minLength(20)]),
      telefono : new FormControl(0, Validators.required)
    })
  }

  ngOnInit() {
    this.heroes = this.heroService.getHeroes();
  }
}


