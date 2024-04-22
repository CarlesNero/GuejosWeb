import { Routes } from '@angular/router';

import { ConsolasComponent } from './pages/consolas/consolas.component';
import { PcComponent } from './pages/pc/pc.component';
import { ElectronicaComponent } from './pages/electronica/electronica.component';
import { HomeComponent } from './pages/home/home.component';
import { VideojuegosComponent } from './pages/videojuegos/videojuegos.component';
import { Ps5Component } from './pages/ps5/ps5.component';
import { PlaystationComponent } from './pages/playstation/playstation.component';
import { SobremesaComponent } from './pages/sobremesa/sobremesa.component';
import { SmartphoneComponent } from './pages/smartphone/smartphone.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'videojuegos', component: VideojuegosComponent },
  { path: 'consolas', component: ConsolasComponent },
  { path: 'pc', component: PcComponent },
  { path: 'electronica', component: ElectronicaComponent },
  { path: 'ps5', component: Ps5Component },
  { path: 'playstation', component: PlaystationComponent },
  { path: 'sobremesa', component: SobremesaComponent },
  { path: 'smartphone', component: SmartphoneComponent },
];
