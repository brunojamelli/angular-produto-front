import { Component } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { Observable, delay } from 'rxjs';
import { Produto } from '../model/produto';
import { ProdutosService } from '../service/produtos.service';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-lista-produtos',
  standalone: true,
  imports: [MatTableModule, AsyncPipe],
  templateUrl: './lista-produtos.component.html',
  styleUrl: './lista-produtos.component.css',
})
export class ListaProdutosComponent {
  produtos$: Observable<Produto[]>;
  produtos_array: Produto[] = [];
  displayedColumns = ['nome', 'descricao'];
  constructor(private produtosService: ProdutosService) {
    produtosService.list().subscribe((p) => (this.produtos_array = p));
    this.produtos$ = produtosService.list().pipe(delay(4000));
    console.log(produtosService.list());
  }
}
