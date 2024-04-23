import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-videojuegos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './videojuegos.component.html',
  styleUrl: './videojuegos.component.css',
})
export class VideojuegosComponent {
  titulo: string = 'Videojuegos';

  ps5 = [
    {
      name: 'Demon Souls',
      image:
        'https://album.mediaset.es/eimg/10000/2020/09/17/clipping_NfN4GH_791d.jpg?w=1200',
    },
    {
      name: 'Spiderman: Miles Morales',
      image:
        'https://assetsio.gnwcdn.com/marvels-spider-man-miles-morales-ps5-analisis-1604596737073.jpg?width=1200&height=630&fit=crop&enable=upscale&auto=webp',
    },
    {
      name: 'Ratchet & Clank: Rift Apart',
      image:
        'https://i.blogs.es/9709df/ratchet-clank-rift-apart-heres-what-comes-in-each-edition/1366_2000.jpeg',
    },
  ];
  xbox = [
    {
      name: 'Halo 5',
      image:
        'https://m.media-amazon.com/images/I/81KcrDGGMxL._AC_UF894,1000_QL80_.jpg',
    },
    {
      name: 'Xbox + mando',
      image:
        'https://store-images.s-microsoft.com/image/apps.49179.14582624973508592.26c5f6f2-2820-4a48-be81-6d152bc5356c.48e78113-cb56-4723-8970-c4dd6a8e9ebb?q=90&w=480&h=270',
    },
    {
      name: 'Mando Xbox',
      image: 'https://i.blogs.es/06852e/gears_5/1366_2000.jpeg',
    },
  ];
  nintendo = [
    {
      name: 'The Legend of Zelda: Breath of the Wild',
      image:
        'https://fotografias-neox.atresmedia.com/clipping/cmsimages02/2016/06/17/8C0AA383-8203-41FB-AAA4-205A1D3AFFA2/98.jpg?crop=991,558,x0,y21&width=1900&height=1069&optimize=high&format=webply',
    },
    {
      name: 'Nintendo Switch + base ',
      image:
        'https://i.blogs.es/941f70/super-mario-odyssey-story_1488460979346/1366_2000.jpg',
    },
    {
      name: 'Mando Nintendo Switch',
      image:
        'https://m.media-amazon.com/images/I/81csRna+yNL._AC_UF894,1000_QL80_.jpg',
    },
  ];
  pcMasterRace = [
    {
      name: 'League of Legends',
      image:
        'https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/blt670d428d1921eed8/614be30d69b7947c1b3aebd5/9242021_StateofGameplayArticle_Header.jpg',
    },
    {
      name: 'Sega GameGear',
      image:
        'https://cdn2.unrealengine.com/everything-you-need-to-know-about-valorant-s-sniper-shotgun-the-outlaw-1920x1080-a516312d02f5.png',
    },
    {
      name: 'PacMan',
      image:
        'https://hips.hearstapps.com/hmg-prod/images/the-witcher-n-s3-e4-00-28-49-08-1-6482f0246873a.jpg?crop=0.888888888888889xw:1xh;center,top',
    },
  ];
}
