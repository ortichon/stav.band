import { Component, CUSTOM_ELEMENTS_SCHEMA, ElementRef, ViewChild } from '@angular/core';
import { NgForOf, NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-videos',
  standalone: true,
  templateUrl: './videos.component.html',
  styleUrls: ['./videos.component.scss', '../app.component.scss'],
  imports: [
    NgOptimizedImage,
    NgForOf
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class VideosComponent {
  @ViewChild('swiper', { static: true }) swiperElement: ElementRef;

  next() {
    this.swiperElement.nativeElement.swiper.slideNext();
  }

  prev() {
    this.swiperElement.nativeElement.swiper.slidePrev();
  }

  breakPoints = {
    320: {
      slidesPerView: 1.2, /* Show part of the second slide on very small screens */
      centeredSlides: true
    },
    480: {
      slidesPerView: 2.5, /* Show part of the third slide on small screens */
      centeredSlides: true
    },
    768: {
      slidesPerView: 3.5, /* Show part of the fourth slide on medium screens */
      centeredSlides: false
    },
    1024: {
      slidesPerView: 4.5, /* Show part of the fifth slide on larger screens */
      centeredSlides: false
    },
    1280: {
      slidesPerView: 5, /* Show 5 full slides on larger screens */
      centeredSlides: false
    }
  }

  videos = [
    { id: "Ln-YHMMEvTQ", name: "STAV - Dugia | Live at the studio", length: "5:45"},
    { id: "MGiMVYhMWU4", name: "STAV - Road song | Live at SNR studios", length: "4:41"},
    { id: "p4eKT6MV1Ao", name: "STAV - COCO & RICO", length: "4:15"},
    { id: "eTbsxMgpufA", name: "אולפן 88 | סתיו אחאי", length: "29:11"},
    { id: "Ch30ErvL5CU", name: "STAV - Marco | Live - Pool Sessions", length: "5:35"},
    { id: "JOvzq-9DADI", name: "STAV - Plastic Cocoon | Full album", length: "22:04"},
    { id: "ivfVJRvKo2k", name: "STAV - Pampam | Live at the studio", length: "5:54"},
    { id: "ZZM1_3yx2dI", name: "STAV - Le Départ by Krzysztof Komeda (Cover) | Live at Polish Jazz Festival in TLV", length: "4:44"},
    { id: "6RrbfV2vUa8", name: "STAV - Major Mood | Live at Pluto Studios", length: "6:35"},
    {id: "X9nnrWi8QXo", name: "STAV | live at SnR studios - COVID 19", length: "37:25"}
  ]
}
