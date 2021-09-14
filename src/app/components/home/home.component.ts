import { Component, OnInit } from '@angular/core';
import { SuperHero } from '../../interfaces/SuperHero';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  heroes: Array<SuperHero> = superHeroes;
  constructor() { }

  ngOnInit() {
  }

}



var superHeroes: Array<SuperHero> =  [
  {
    name : 'Superman',
    description: 'Superman es un superhéroe ficticio que apareció por primera vez en los cómics estadounidenses publicados por DC Comics. El personaje fue creado por el escritor estadounidense Jerry Siegel y el artista canadiense Joe Shuster en 1933 cuando ambos se encontraban viviendo en Cleveland, Ohio.',
    ano: 1933,
    franquicia: 'DC comics',
    img: 'https://1.bp.blogspot.com/-8p_mRPosMno/YR_OsFMzTJI/AAAAAAABM_0/QWdNXoESYjkqTFvqhX5ohaJeVwp5gXh3gCLcBGAsYHQ/s1400/Superman-Superboy-Jon-Kent-feature.jpg',
    logo: 'https://logos-marcas.com/wp-content/uploads/2020/11/Superman-Logo.png'
  },
]