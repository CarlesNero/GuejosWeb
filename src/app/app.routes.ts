import { Routes } from '@angular/router';

import { ConsolasComponent } from './pages/consolas/consolas.component';
import { PcComponent } from './pages/pc/pc.component';
import { ElectronicaComponent } from './pages/electronica/electronica.component';
import { HomeComponent } from './pages/home/home.component';
import { VideojuegosComponent } from './pages/videojuegos/videojuegos.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'videojuegos', component: VideojuegosComponent },
  { path: 'consolas', component: ConsolasComponent },
  { path: 'pc', component: PcComponent },
  { path: 'electronica', component: ElectronicaComponent },
];
