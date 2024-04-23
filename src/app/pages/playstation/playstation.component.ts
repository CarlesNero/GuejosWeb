import { Component } from '@angular/core';

@Component({
  selector: 'app-playstation',
  standalone: true,
  imports: [],
  templateUrl: './playstation.component.html',
  styleUrl: './playstation.component.css',
})
export class PlaystationComponent {
  items = {
    img: 'https://thumb.pccomponentes.com/w-530-530/articles/1080/10801089/1818-sony-playstation-5-especificaciones.jpg',
    titulo: 'Sony PlayStation 5 Slim',
    descripcion:
      'Consola PlayStation®5. La consola PS5® hace posibles nuevas formas de juego que jamás habías imaginado. Experimenta tiempos de carga ultrarrápidos con la SSD de alta velocidad, una inmersión más profunda gracias a la retroalimentación háptica, gatillos adaptativos y Audio 3D2, además de una nueva generación de increíbles juegos de PlayStation®.',
    pegi: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Bluetooth_logo_%282016%29.svg/347px-Bluetooth_logo_%282016%29.svg.png',
    genero: 'PS5',
    esrb: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Ultra_HD_Blu-ray_%28logo%29.svg/250px-Ultra_HD_Blu-ray_%28logo%29.svg.png',
  };
}
