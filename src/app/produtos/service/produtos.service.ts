import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { first, Observable, tap } from 'rxjs';
import { Produto } from '../model/produto';

@Injectable({
  providedIn: 'root',
})
export class ProdutosService {
  private API_URL = 'http://localhost:3000/produtos';

  constructor(private httpClient: HttpClient) {}

  list(): Observable<Produto[]> {
    return this.httpClient.get<Produto[]>(this.API_URL).pipe(
      first(),
      tap((p) => console.log(p))
    );
  }
}
