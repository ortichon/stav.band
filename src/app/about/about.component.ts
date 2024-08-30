import { Component, CUSTOM_ELEMENTS_SCHEMA, ElementRef, ViewChild } from '@angular/core';
import { NgForOf, NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-about',
  standalone: true,
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss',
  imports: [
    NgOptimizedImage,
    NgForOf
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AboutComponent {

}
