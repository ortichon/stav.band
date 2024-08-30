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

  pictureNumbers: number[] = [];
  @ViewChild('swiper', { static: true }) swiperElement: ElementRef;


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
