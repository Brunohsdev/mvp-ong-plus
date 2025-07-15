import { Routes } from '@angular/router';
import { Login } from './pages/login/login';
import { Cadastro } from './pages/cadastro/cadastro';
import { Home } from './pages/home/home';
import { OngDashboard } from './pages/ong-dashboard/ong-dashboard';
import { Doacoes } from './pages/doacoes/doacoes';

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: Login },
  { path: 'cadastro', component: Cadastro },
  { path: 'home', component: Home },
  { path: 'ong', component: OngDashboard },
  { path: 'doacoes', component: Doacoes }
];
