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
  },  {
    name : 'Batman',
    description: 'Batman es un personaje de cómic creado por los estadounidenses Bob Kane y Bill Finger, y propiedad de DC Comics. Apareció por primera vez en la historia titulada «El caso del sindicato químico» de la revista Detective Comics N.º 27, lanzada por la editorial National Publications el 30 de marzo de 1939.',
    ano: 1933,
    franquicia: 'DC comics',
    img: 'https://www.diariovivo.com/wp-content/uploads/2019/09/batman-dc-750x450.jpg',
    logo: 'https://1000marcas.net/wp-content/uploads/2019/11/Logo-Batman-.png'
  }
]