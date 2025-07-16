import { Routes } from '@angular/router';
import { Login } from './pages/login/login';
import { QuemSomos } from './pages/quem-somos/quem-somos';
import { Home } from './pages/home/home';
import { OngDashboard } from './pages/ong-dashboard/ong-dashboard';
import { Doacoes } from './pages/doacoes/doacoes';
import { PublicPages } from './pages/public-pages/public-pages';
import { Perfil } from './pages/perfil/perfil';
import { Cadastrar } from './pages/cadastrar/cadastrar';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'login', component: Login },
  { path: 'home', component: Home },
  { path: 'ong', component: OngDashboard },
  {path: 'perfil', component: Perfil},
  {path: 'quem-somos', component: QuemSomos },
  {path: 'cadastrar', component: Cadastrar },
  { path: 'doacoes', component: Doacoes },
  { path: 'explorar', component: PublicPages },
];
