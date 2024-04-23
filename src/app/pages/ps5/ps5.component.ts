import { Component } from '@angular/core';

@Component({
  selector: 'app-ps5',
  standalone: true,
  imports: [],
  templateUrl: './ps5.component.html',
  styleUrl: './ps5.component.css',
})
export class Ps5Component {
  items = {
    img: 'https://cdn2.unrealengine.com/everything-you-need-to-know-about-valorant-s-sniper-shotgun-the-outlaw-1920x1080-a516312d02f5.png',
    titulo: 'Valorant',
    descripcion:
      'Valorant es un hero shooter primera persona multijugador gratuito desarrollado y publicado por Riot Games. El juego se anunció por primera vez con el nombre en clave Project A en octubre de 2019. Fue lanzado para Microsoft Windows el 2 de junio de 2020 después de su beta cerrada lanzada el 7 de abril de 2020. Valorant se inspira en la serie de videojuegos de disparos táctico Counter-Strike y toma prestadas varias mecánicas, como el menú de compra, los patrones de spray y la imprecisión al moverse.',
    pegi: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/PEGI_16.svg/45px-PEGI_16.svg.png',
    genero: 'Videojuego de disparos en primera persona, hero shooter',
    esrb: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/ESRB_2013_Teen_Spanish.svg/80px-ESRB_2013_Teen_Spanish.svg.png',
  };
}
