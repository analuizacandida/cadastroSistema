import { Injectable } from '@angular/core';
import { Cliente } from './cliente';
//pode injetar onde precisar, por exemplo, no componente CadastroComponent
// ou em outros serviços, como o ClienteService

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  static REPO_CLIENTES = "_CLIENTES"; // pode acessar em qualquer lugar dentro do service
  constructor() { }

  salvar(cliente: Cliente) {
   const storage = this.obterStorage(); // Pega o array de clientes do localStorage
   storage.push(cliente); // Adiciona o novo cliente ao array

   localStorage.setItem(ClienteService.REPO_CLIENTES, JSON.stringify(storage)); // Salva o array atualizado no localStorage
  }
  
  pesquisarClientes(nome: string) : Cliente[] {
    return this.obterStorage();
    // Implementar a lógica de pesquisa de clientes
   
  }

  obterStorage(): Cliente[] {
    const clientesString = localStorage.getItem(ClienteService.REPO_CLIENTES);
    // Se a variável existir, vai entrar dentro do if, se não existir vai retornar um array vazio
    if (clientesString) {
      // O parse pega a string (clientes) e transforma em um objeto do tipo array Cliente[]
      const clientes: Cliente[] = JSON.parse(clientesString);
      return clientes;
    }
    // Caso contrário, inicializa um array vazio e salva no localStorage
    const clientes: Cliente[] = [];
    localStorage.setItem(ClienteService.REPO_CLIENTES, JSON.stringify(clientes));
    return clientes; // Retorna o array vazio
  }

}
