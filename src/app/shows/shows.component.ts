import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { NgForOf, NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-shows',
  standalone: true,
  templateUrl: './shows.component.html',
  styleUrl: './shows.component.scss',
  imports: [
    NgOptimizedImage,
    NgForOf
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ShowsComponent {

}
