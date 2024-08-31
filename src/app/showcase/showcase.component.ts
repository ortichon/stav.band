import { Component, CUSTOM_ELEMENTS_SCHEMA, ElementRef, ViewChild } from '@angular/core';
import { NgForOf, NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-showcase',
  standalone: true,
  templateUrl: './showcase.component.html',
  imports: [
    NgOptimizedImage,
    NgForOf
  ],
  styleUrl: './showcase.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ShowcaseComponent {

  @ViewChild('swiper', { static: true }) swiperElement: ElementRef;

  pictureNumbers: number[] = [];

  breakPoints = {
    320: {
      slidesPerView: 2.5, /* Show part of the second slide on very small screens */
      centeredSlides: false
    },
    480: {
      slidesPerView: 4, /* Show part of the third slide on small screens */
      centeredSlides: false
    },
    768: {
      slidesPerView: 4.5, /* Show part of the fourth slide on medium screens */
      centeredSlides: false
    },
    1024: {
      slidesPerView: 6, /* Show part of the fifth slide on larger screens */
      centeredSlides: false
    },
    1280: {
      slidesPerView: 6, /* Show 5 full slides on larger screens */
      centeredSlides: false
    }
  }

  constructor() {
    this.pictureNumbers = Array.from({length: 21}, (v, k) => k + 1);
  }

  next() {
    this.swiperElement.nativeElement.swiper.slideNext();
  }

  prev() {
    this.swiperElement.nativeElement.swiper.slidePrev();
  }
}
