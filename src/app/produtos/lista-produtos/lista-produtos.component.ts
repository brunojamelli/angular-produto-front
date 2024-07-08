import { Component } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { Observable } from 'rxjs';
import { Produto } from '../model/produto';
import { ProdutosService } from '../service/produtos.service';

@Component({
  selector: 'app-lista-produtos',
  standalone: true,
  imports: [MatTableModule],
  templateUrl: './lista-produtos.component.html',
  styleUrl: './lista-produtos.component.css',
})
export class ListaProdutosComponent {
  produtos$: Observable<Produto[]>;
  produtos_array: Produto[] = [];
  displayedColumns = ['nome', 'descricao'];
  constructor(private produtosService: ProdutosService) {
    produtosService.list().subscribe((p) => (this.produtos_array = p));
    this.produtos$ = produtosService.list();
    console.log(produtosService.list());
  }
}
