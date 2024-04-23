import { Component } from '@angular/core';

@Component({
  selector: 'app-smartphone',
  standalone: true,
  imports: [],
  templateUrl: './smartphone.component.html',
  styleUrl: './smartphone.component.css',
})
export class SmartphoneComponent {
  items = {
    img: 'https://thumb.pccomponentes.com/w-530-530/articles/1019/10191366/1775-apple-iphone-13-256gb-verde-alpino-libre.jpg',
    titulo: 'Apple iPhone 13 256GB Verde Alpino Libre',
    descripcion:
      'iPhone 13: Tu nuevo superpoder. Nuestro sistema de cámara dual más avanzado. El chip que hace morder el polvo a la competencia. Un subidón de autonomía que vaya si notarás. Ceramic Shield, más duro que cualquier vidrio de smartphone. Pantalla Super Retina XDR de 6,1 pulgadas. Diseño robusto con bordes planos y resistente al agua.',
    pegi: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Bluetooth_logo_%282016%29.svg/347px-Bluetooth_logo_%282016%29.svg.png',
    genero: 'Color Técnico: Verde Alpino',
    esrb: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Ultra_HD_Blu-ray_%28logo%29.svg/250px-Ultra_HD_Blu-ray_%28logo%29.svg.png',
  };
}
