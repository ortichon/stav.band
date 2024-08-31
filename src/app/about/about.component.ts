import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { NgForOf, NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-about',
  standalone: true,
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss', '../app.component.scss'],
  imports: [
    NgOptimizedImage,
    NgForOf
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AboutComponent {

}
