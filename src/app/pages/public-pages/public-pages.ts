import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule, Router } from '@angular/router';
import { Header } from '../../components/header/header';
import { Footer } from '../../components/footer/footer';
import { CampanhaService } from '../../services/campanha.service';
import { Campanha } from '../../models/campanha-model';

@Component({
  selector: 'app-public-pages',
  standalone: true,
  templateUrl: './public-pages.html',
  styleUrls: ['./public-pages.css'],
  imports: [
    Header,
    Footer,
    FormsModule,
    CommonModule,
    RouterModule
  ],
})
export class PublicPages implements OnInit {
  termoBusca: string = '';
  categoriaSelecionada: string = '';
  campanhas: Campanha[] = [];

  constructor(private router: Router, private campanhaService: CampanhaService) {}

  ngOnInit(): void {
    this.campanhaService.getCampanhas().subscribe({
      next: (res) => this.campanhas = res.campanhas,
      error: (err) => console.error('Erro ao carregar campanhas', err)
    });
  }

  campanhasFiltradas(): Campanha[] {
    return this.campanhas.filter((c) => {
      const nome = c.titulo.toLowerCase();
      const ong = c.ong.toLowerCase();
      const termo = this.termoBusca.toLowerCase();
      const categoria = this.categoriaSelecionada;

      return (
        (nome.includes(termo) || ong.includes(termo)) &&
        (categoria === '' || c.categoria === categoria)
      );
    });
  }

  redirecionarParaLogin() {
    this.router.navigate(['/login']);
  }
}
