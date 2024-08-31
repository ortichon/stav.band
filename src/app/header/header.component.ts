import { Component } from '@angular/core';
import { NgClass, NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  templateUrl: './header.component.html',
  imports: [
    NgOptimizedImage,
    NgClass
  ],
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

  isSideDrawerOpen = false;

  scrollToSection(event: Event, targetSection: string) {
    event.preventDefault();
    const target = document.getElementById(targetSection);
    if (target) {
      this.smoothScroll(target, 1200)
    }

    this.isSideDrawerOpen = false;
  }

  smoothScroll(target: HTMLElement, duration: number) {
    const targetPosition = target.getBoundingClientRect().top;
    const startPosition = window.scrollY ;
    const distance = targetPosition;
    let startTime: number | null = null;

    function animation(currentTime: number) {
      if (startTime === null) startTime = currentTime;
      const timeElapsed = currentTime - startTime;
      const run = ease(timeElapsed, startPosition, distance, duration);
      window.scrollTo(0, run);
      if (timeElapsed < duration) requestAnimationFrame(animation);
    }

    function ease(t: number, b: number, c: number, d: number) {
      t /= d / 2;
      if (t < 1) return c / 2 * t * t + b;
      t--;
      return -c / 2 * (t * (t - 2) - 1) + b;
    }

    requestAnimationFrame(animation);
  }

  toggleSizeDrawer() {
    this.isSideDrawerOpen = !this.isSideDrawerOpen;
  }
}
