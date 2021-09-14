import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {

    const routeParams = this.route.snapshot.paramMap;
    const heroIdFromRoute = Number(routeParams.get('idHero'));
    console.log(heroIdFromRoute)
  }

}