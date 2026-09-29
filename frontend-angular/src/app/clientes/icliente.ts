export interface ICliente {
  id: string;
  name: string;
  phoneNumber:string;
  email: string;
  stats: 'Active' | 'Inactive';
}
