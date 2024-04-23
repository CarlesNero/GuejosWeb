import { Component } from '@angular/core';

@Component({
  selector: 'app-sobremesa',
  standalone: true,
  imports: [],
  templateUrl: './sobremesa.component.html',
  styleUrl: './sobremesa.component.css',
})
export class SobremesaComponent {
  items = {
    img: 'https://thumb.pccomponentes.com/w-530-530/articles/1075/10756908/1516-hp-omen-40l-gt21-1033ns-amd-ryzen-7-7700x-16gb-1tb-ssd-rtx-4070-especificaciones.jpg',
    titulo: 'HP OMEN 40L GT21-1033ns AMD Ryzen 7 7700X/16GB/1TB SSD/RTX 4070',
    descripcion:
      'Lleva tus juegos a un nuevo nivel. El sobremesa OMEN by HP 40L es el compañero definitivo para tus partidas. Con el más reciente procesador AMD y gráficos avanzados, el sobremesa OMEN cuenta con un sistema de refrigeración superior que evita los sobrecalentamientos. Además, se ha creado para actualizarse sin necesidad de herramientas. El sobremesa OMEN te proporcionará el máximo rendimiento para satisfacer todas tus necesidades como gamer.',
    pegi: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Bluetooth_logo_%282016%29.svg/347px-Bluetooth_logo_%282016%29.svg.png',
    genero: 'Sobremesa premontado',
    esrb: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Ultra_HD_Blu-ray_%28logo%29.svg/250px-Ultra_HD_Blu-ray_%28logo%29.svg.png',
  };
}
