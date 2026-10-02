import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DrawerHeadlessDemo } from "./componentes/sidebar/sidebar";
import { Toast } from './componentes/shared/toast/toast';
import { Loading } from './componentes/shared/loading/loading';

@Component({
  imports: [RouterOutlet, DrawerHeadlessDemo, Toast, Loading],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('frontend-angular');
}
