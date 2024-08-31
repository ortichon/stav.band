import { Component } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-music',
  standalone: true,
  templateUrl: './music.component.html',
  imports: [
    NgOptimizedImage
  ],
  styleUrls: ['./music.component.scss', '../app.component.scss']
})
export class MusicComponent {

  plasticCocoonLink = "https://open.spotify.com/album/20CIulxTeX0229yIA5AhlT?si=3K_psvtcT5mIDvwrpmcCzg";
  cocoAndRicoLink = "https://open.spotify.com/track/6yjdSLKJNv3uhfq0u37DA6?si=539383c6ea9b4f62";
}
