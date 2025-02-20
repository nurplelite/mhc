import { Injectable, Renderer2, RendererFactory2 } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  private renderer: Renderer2;
  private currentTheme: string = 'light'; // Default theme

  constructor(rendererFactory: RendererFactory2) {
    this.renderer = rendererFactory.createRenderer(null, null);
    this.detectSystemTheme(); // Detect system theme on initialization
  }

  /** Automatically detect system dark/light mode */
  private detectSystemTheme(): void {
    const prefersDark = matchMedia('(prefers-color-scheme: dark)').matches;
    this.setTheme(prefersDark ? 'dark' : 'light');

    // Listen for system theme changes in real-time
    matchMedia('(prefers-color-scheme: dark)').addEventListener('change', event => {
      this.setTheme(event.matches ? 'dark' : 'light');
    });
  }

  /** Apply the selected theme */
  setTheme(theme: string): void {
    const themeClasses = ['light', 'light-hc', 'light-mc', 'dark', 'dark-hc', 'dark-mc'];

    // Remove all other theme classes
    themeClasses.forEach(t => this.renderer.removeClass(document.body, t));

    // Add the new theme class
    this.renderer.addClass(document.body, theme);
    this.currentTheme = theme;
  }

  /** Get the current theme */
  getCurrentTheme(): string {
    return this.currentTheme;
  }
}
