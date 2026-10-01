import { HttpClient } from '@angular/common/http';
import { inject, Injectable, Service } from '@angular/core';
import { IclienteRequest } from './icliente-request';
import { ICliente } from './icliente';

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

  createCliente(cliente: IclienteRequest) {
    return this.http.post(this.apiUrl, cliente);
  }
  delete(id: string) {
  return this.http.delete<ICliente>(`${this.apiUrl}/${id}`);
}
update(id: string, cliente: IclienteRequest) {
    return this.http.put<ICliente>(`${this.apiUrl}/${id}`, cliente);
  }
}
