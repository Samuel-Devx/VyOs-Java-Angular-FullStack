import { HttpClient } from '@angular/common/http';
import { inject, Injectable, Service } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class ClienteService {
  private http = inject(HttpClient);
  private apiUrl = 'http://localhost:8080/api/clientes';

  getClientes() {
    return this.http.get(this.apiUrl);
  }

  getClienteById(id: number) {
    return this.http.get(`${this.apiUrl}/${id}`);
  }

}
