import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-sticky-photo',
  templateUrl: './sticky-photo.component.html',
  styleUrls: ['./sticky-photo.component.css']
})

export class StickyPhotoComponent {
  @Input() src: string = "home";
}
