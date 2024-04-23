import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-consolas',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './consolas.component.html',
  styleUrl: './consolas.component.css',
})
export class ConsolasComponent {
  titulo: string = 'Consolas';
  ps5 = [
    {
      name: 'PS5',
      image:
        'https://images.unsplash.com/photo-1606144042614-b2417e99c4e3?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
      name: 'ps5 + Mando',
      image:
        'https://images.unsplash.com/photo-1635048424329-a9bfb146d7aa?q=80&w=1631&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
      name: 'PS5 + 2 mandos',
      image:
        'https://images.unsplash.com/photo-1635048393237-3b90e5c4a692?q=80&w=1631&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
  ];
  xbox = [
    {
      name: 'Xbox',
      image:
        'https://images.unsplash.com/photo-1621259182978-fbf93132d53d?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
      name: 'Xbox + mando',
      image:
        'https://images.unsplash.com/photo-1604586376807-f73185cf5867?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
      name: 'Mando Xbox',
      image:
        'https://images.unsplash.com/photo-1632312527375-bd5d5a0d3484?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
  ];
  nintendo = [
    {
      name: 'Nintendo Switch',
      image:
        'https://images.unsplash.com/photo-1578303512597-81e6cc155b3e?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
      name: 'Nintendo Switch + base ',
      image:
        'https://images.unsplash.com/photo-1612036781124-847f8939b154?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
      name: 'Mando Nintendo Switch',
      image:
        'https://images.unsplash.com/photo-1585857188823-77658a70979a?q=80&w=1742&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
  ];
  retro = [
    {
      name: 'Nintendo GameBoy',
      image:
        'https://images.unsplash.com/photo-1531390770335-d94a0dacd992?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cmV0cm8lMjBjb25zb2xlfGVufDB8fDB8fHww',
    },
    {
      name: 'Sega GameGear',
      image:
        'https://images.unsplash.com/photo-1615503340333-335a74efa416?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHJldHJvJTIwY29uc29sZXxlbnwwfHwwfHx8MA%3D%3D',
    },
    {
      name: 'PacMan',
      image:
        'https://images.unsplash.com/photo-1640972040132-28b62b6b3718?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHJldHJvJTIwY29uc29sZXxlbnwwfHwwfHx8MA%3D%3D',
    },
  ];
}
