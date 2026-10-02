import { Component, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-error-page',
  standalone: true,
  imports: [ButtonModule],
  templateUrl: './error-page-component.html',
  styleUrl: './error-page-component.css',
})
export class ErrorPageComponent {
  private router = inject(Router);
  private location = inject(Location);
  private route = inject(ActivatedRoute);

  private data = this.route.snapshot.data;

  code: string = this.data['code'] ?? '404';
  title: string = this.data['title'] ?? 'Página não encontrada';
  message: string =
    this.data['message'] ??
    'O endereço que você tentou acessar não existe ou foi movido.';
  icon: string = this.data['icon'] ?? 'pi-compass';

  goHome() {
    this.router.navigate(['/']);
  }

  goBack() {
    this.location.back();
  }
}
