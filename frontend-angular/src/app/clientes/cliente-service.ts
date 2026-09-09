import { HttpClient } from '@angular/common/http';
import { inject, Injectable, Service } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class ClienteService {
  private http = inject(HttpClient);
  private apiUrl = 'https://6a5cf5b80ad09982aef6b9f7.mockapi.io/api/Clientes';

  getClientes() {
    return this.http.get(this.apiUrl);
  }

  getClienteById(id: number) {
    return this.http.get(`${this.apiUrl}/${id}`);
  }

}
