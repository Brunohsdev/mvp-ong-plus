// import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
// import { environment } from '../../environments/environment';
// import { Observable } from 'rxjs';

// @Injectable({
//   providedIn: 'root'
// })
// export class ApiService {
//   private apiUrl = environment.apiUrl;

//   constructor(private http: HttpClient) { }

//   cadastrarUsuario(usuario: any): Observable<any> {
//     return this.http.post(`${this.apiUrl}/usuarios`, usuario);
//   }

//   cadastrarOng(ong: any): Observable<any> {
//     return this.http.post(`${this.apiUrl}/ongs`, ong);
//   }

//   // Outros métodos conforme necessário
// }