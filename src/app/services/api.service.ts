import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private readonly apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  // Campanhas
  getCampanhas(): Observable<any> {
    return this.http.get(`${this.apiUrl}/campanhas`);
  }

  // Usuários
  cadastrarUsuario(usuario: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/usuarios`, usuario);
  }

  // ONGs
  cadastrarOng(ong: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/ongs`, ong);
  }

  // Login
  login(credenciais: { email: string, senha: string }): Observable<any> {
    return this.http.post(`${this.apiUrl}/login`, credenciais);
  }
}
