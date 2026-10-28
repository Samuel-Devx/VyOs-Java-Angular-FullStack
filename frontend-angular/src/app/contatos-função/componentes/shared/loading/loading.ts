import { Component, inject } from '@angular/core';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { LoadingService } from './loading-service';
@Component({
  imports: [ProgressSpinnerModule],
  selector: 'app-loading',
  styleUrl: './loading.css',
  templateUrl: './loading.html',
})
export class Loading {
  loading = inject(LoadingService);
}
