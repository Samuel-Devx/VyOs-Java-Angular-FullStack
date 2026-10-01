import { Injectable, PLATFORM_ID, inject, signal } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Injectable({ providedIn: 'root' })
export class ThemeToggleService {
  private isBrowser = isPlatformBrowser(inject(PLATFORM_ID));
  isDark = signal(this.initial());

  constructor() {
    this.apply();
  }

  toggle() {
    this.isDark.update(v => !v);
    if (this.isBrowser) {
      localStorage.setItem('theme', this.isDark() ? 'dark' : 'light');
    }
    this.apply();
  }

  private initial(): boolean {
    if (!this.isBrowser) return false;
    const saved = localStorage.getItem('theme');
    if (saved) return saved === 'dark';
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  }

  private apply() {
    if (!this.isBrowser) return;
    document.documentElement.classList.toggle('app-dark', this.isDark());
  }
}
