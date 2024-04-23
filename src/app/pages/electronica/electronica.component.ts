import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-electronica',
  templateUrl: './electronica.component.html',
  styleUrls: ['./electronica.component.css'],
  standalone: true,
  imports: [CommonModule],
})
export class ElectronicaComponent {
  titulo: string = 'Electrónica';

  smartPhone = [
    {
      name: 'Apple iPhone 13',
      image:
        'https://thumb.pccomponentes.com/w-530-530/articles/1019/10191366/1775-apple-iphone-13-256gb-verde-alpino-libre.jpg',
    },
    {
      name: 'Samsung Galaxy A34',
      image:
        'https://thumb.pccomponentes.com/w-530-530/articles/1067/10673828/1839-samsung-galaxy-a34-5g-8-256gb-negro-libre-protector-pantalla.jpg',
    },
    {
      name: 'Xiaomi Redmi Note 13 Pro',
      image:
        'https://thumb.pccomponentes.com/w-530-530/articles/1080/10804909/1145-xiaomi-redmi-note-13-pro-8-256gb-negro-libre.jpg',
    },
  ];
  Tablets = [
    {
      name: 'Lenovo Tab M10',
      image:
        'https://thumb.pccomponentes.com/w-530-530/articles/1073/10732892/1133-lenovo-tab-m10-3rd-gen-101-3-32gb-gris.jpg',
    },
    {
      name: 'Apple iPad 2022',
      image:
        'https://thumb.pccomponentes.com/w-530-530/articles/1063/10635685/1804-apple-ipad-2022-109-wifi-64gb-azul.jpg',
    },
    {
      name: 'Xiaomi Redmi Pad',
      image:
        'https://thumb.pccomponentes.com/w-530-530/articles/1076/10766280/1328-xiaomi-redmi-pad-se-11-4-128gb-gris-grafito.jpg',
    },
  ];
  Relojes = [
    {
      name: 'ASUS VivoWatch 5 ',
      image:
        'https://thumb.pccomponentes.com/w-530-530/articles/1009/10096775/337-asus-vivowatch-5-reloj-smartwatch-negro-2265b9dc-7ef5-4ea1-8ccc-ad59d9aba2b7.jpg',
    },
    {
      name: 'Apple Watch Series 9 ',
      image:
        'https://thumb.pccomponentes.com/w-530-530/articles/1077/10778085/1318-apple-watch-series-9-gps-41mm-starlight-caja-de-aluminio-con-correa-deportiva-starlight-s-m.jpg',
    },
    {
      name: 'Amazfit GTS 4 ',
      image:
        'https://thumb.pccomponentes.com/w-530-530/articles/1063/10636511/1144-amazfit-gts-4-smartwatch-blanco.jpg',
    },
  ];
  Auriculares = [
    {
      name: 'Razer Barracuda X ',
      image:
        'https://thumb.pccomponentes.com/w-530-530/articles/1057/10579954/1594-razer-barracuda-x-2022-auriculares-inalambricos-negros.jpg',
    },
    {
      name: 'Razer Blackshark V2',
      image:
        'https://thumb.pccomponentes.com/w-530-530/articles/47/477566/1865-razer-blackshark-v2-auriculares-gaming-edicion-especial-multiplataforma.jpg',
    },
    {
      name: 'Tempest GHS PRO 35',
      image:
        'https://thumb.pccomponentes.com/w-530-530/articles/1079/10798755/1882-tempest-ghs-pro-35-overlord-auriculares-gaming-inalambricos-review.jpg',
    },
  ];
  Drones = [
    {
      name: 'DJI Mini 3',
      image:
        'https://thumb.pccomponentes.com/w-530-530/articles/1071/10718465/1920-dji-mini-3-dron-4k-hdr.jpg',
    },
    {
      name: 'Denver DCH-350',
      image:
        'https://thumb.pccomponentes.com/w-530-530/articles/1063/10635576/1918-denver-dch-350-dron-hd-1600mah.jpg',
    },
    {
      name: 'National Geographic',
      image:
        'https://thumb.pccomponentes.com/w-530-530/articles/25/255667/national-geographic-explorer-cam-785fa1c8-cabb-4d90-a3e1-5d3eea0acb8b.jpg',
    },
  ];
}
