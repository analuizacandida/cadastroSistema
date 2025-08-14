import { Component, OnInit } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { FormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { ClienteService } from '../cadastro/cliente.service';
import { Cliente } from '../cadastro/cliente';

@Component({
  selector: 'app-consulta',
  imports: [
    MatInputModule,
    MatCardModule,
    MatIconModule,
    FlexLayoutModule,
    FormsModule,
    MatTableModule,
    MatButtonModule,
  ],
  templateUrl: './consulta.component.html',
  styleUrl: './consulta.component.scss',
})
export class ConsultaComponent implements OnInit {
  listaClientes: Cliente[] = []; // Inicializa a lista de clientes como um array vazio

  constructor(private service: ClienteService) {} // private porque só vai ser usado dentro do componente

  //ciclo de vida
  ngOnInit() {
    console.log('ConsultaComponent inicializado');
  }

  buscar() {
    // Implementar a lógica de busca
    console.log('Buscar clientes');
  }

  limpar() {
    // Implementar a lógica de limpar os resultados
    console.log('Limpar resultados');
  }
}
