// explorar.component.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { Router } from '@angular/router';
import { Header } from '../../components/header/header';

@Component({
  selector: 'app-public-pages',
  standalone: true,
  templateUrl: './public-pages.html',
  styleUrls: ['./public-pages.css'],
  imports: [Header,
    FormsModule,
    CommonModule,
    RouterModule
  ],
})
export class PublicPages {
  termoBusca: string = '';
  categoriaSelecionada: string = '';

  campanhas = [
    {
      titulo: 'Doe sangue, salve vidas',
      descricao: 'Campanha de doação de sangue para hospitais da região.',
      ong: 'Vida+, Saúde',
      categoria: 'saude',
    },
    {
      titulo: 'Educação para Todos',
      descricao: 'Ajude a fornecer material escolar para crianças carentes.',
      ong: 'Educar ONG',
      categoria: 'educacao',
    },
    // ... outros dados simulados
  ];

  campanhasFiltradas() {
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

  constructor(private router: Router) {}
}
