import { Routes } from '@angular/router';
import { Login } from './pages/login/login';
import { QuemSomos } from './pages/quem-somos/quem-somos';
import { Home } from './pages/home/home';
import { OngDashboard } from './pages/ong-dashboard/ong-dashboard';
import { Doacoes } from './pages/doacoes/doacoes';
import { PublicPages } from './pages/public-pages/public-pages';

export const routes: Routes = [
  { path: '', redirectTo: 'explorar', pathMatch: 'full' },
  { path: 'login', component: Login },
  { path: 'home', component: Home },
  { path: 'ong', component: OngDashboard },
  {path: 'quem-somos', component: QuemSomos },
  { path: 'doacoes', component: Doacoes },
  { path: 'explorar', component: PublicPages },
];
