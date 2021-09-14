import { Injectable } from '@angular/core';
import { SuperHero } from '../interfaces/SuperHero';

@Injectable({
  providedIn: 'root'
})
export class HeroService {
  getHeroes(): Array<SuperHero> {
    return superHeroes;
  }
}

var superHeroes: Array<SuperHero> = [
  {
    id: 1,
    name: 'Superman',
    description:
      'Superman es un superhéroe ficticio que apareció por primera vez en los cómics estadounidenses publicados por DC Comics. El personaje fue creado por el escritor estadounidense Jerry Siegel y el artista canadiense Joe Shuster en 1933 cuando ambos se encontraban viviendo en Cleveland, Ohio.',
    ano: 1933,
    franquicia: 'DC comics',
    img:
      'https://1.bp.blogspot.com/-8p_mRPosMno/YR_OsFMzTJI/AAAAAAABM_0/QWdNXoESYjkqTFvqhX5ohaJeVwp5gXh3gCLcBGAsYHQ/s1400/Superman-Superboy-Jon-Kent-feature.jpg',
    logo:
      'https://logos-marcas.com/wp-content/uploads/2020/11/Superman-Logo.png'
  },
  {
    id: 2,
    name: 'Batman',
    description:
      'Batman es un personaje de cómic creado por los estadounidenses Bob Kane y Bill Finger, y propiedad de DC Comics. Apareció por primera vez en la historia titulada «El caso del sindicato químico» de la revista Detective Comics N.º 27, lanzada por la editorial National Publications el 30 de marzo de 1939.',
    ano: 1939,
    franquicia: 'DC comics',
    img:
      'https://www.diariovivo.com/wp-content/uploads/2019/09/batman-dc-750x450.jpg',
    logo: 'https://1000marcas.net/wp-content/uploads/2019/11/Logo-Batman-.png'
  },
  {
    id: 3,
    name: 'Linterna Verde',
    description:
      'Linterna Verde es el alias de varios superhéroes de la ficción del Universo DC, de la editorial DC Comics, los cuales se caracterizan por portar un anillo de poder y tener la capacidad de crear manifestaciones de luz sólida con dichos anillos.',
    ano: 1940,
    franquicia: 'DC comics',
    img: 'https://img.ecartelera.com/noticias/fotos/62500/62594/1.jpg',
    logo:
      'https://w7.pngwing.com/pngs/642/930/png-transparent-green-lantern-logo-green-lantern-corps-hal-jordan-superman-logo-green-lantern-logo-comics-cdr-lantern.png'
  },
  {
    id: 4,
    name: 'Aquaman',
    description:
      'Aquaman es un superhéroe que aparece en los cómics estadounidenses publicados por DC Comics. Creado por el artista Paul Norris y el escritor Mort Weisinger, el personaje debutó en More Fun Comics # 73 (noviembre de 1941)',
    ano: 1941,
    franquicia: 'DC comics',
    img: 'https://www.yocomics.com/wp-content/uploads/aquaman-acaba-de-robar-un-arma-antigua.jpg',
    logo:
      'https://w7.pngwing.com/pngs/642/930/png-transparent-green-lantern-logo-green-lantern-corps-hal-jordan-superman-logo-green-lantern-logo-comics-cdr-lantern.png'
  }
];
