export interface ICliente {
  id: number;
  name: string;
  phoneNumber:string;
  email: string;
  stats: 'Active' | 'Inactive';
}
