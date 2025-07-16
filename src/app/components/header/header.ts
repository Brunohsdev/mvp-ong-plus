import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [
    CommonModule,
    FormsModule,
    RouterModule
  ],
  templateUrl: './header.html',
  styleUrl: './header.css'
})
export class Header {
  logado = !!localStorage.getItem('usuario');
  tipoUsuario = localStorage.getItem('tipoUsuario');
  mostrarBusca = location.pathname === '/explorar';
  busca = '';

  logout() {
    localStorage.clear();
    location.href = '/login';
  }
}
