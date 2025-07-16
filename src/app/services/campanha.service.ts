import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Campanha } from '../models/campanha-model';

@Injectable({
  providedIn: 'root'
})
export class CampanhaService {
  private apiUrl = 'http://localhost:3001/campanhas';

  constructor(private http: HttpClient) {}

  getCampanhas(): Observable<{ campanhas: Campanha[] }> {
    return this.http.get<{ campanhas: Campanha[] }>(this.apiUrl);
  }
}
