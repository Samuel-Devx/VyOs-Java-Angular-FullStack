import { Component } from '@angular/core';
import { ToastModule } from 'primeng/toast';

@Component({
  imports: [ToastModule],
  selector: 'app-toast',
  styleUrl: './toast.css',
  templateUrl: './toast.html',
})
export class Toast {}
