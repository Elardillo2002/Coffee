import { Component, Input } from '@angular/core';

// TODO: Agregar easter egg
@Component({
    selector: 'app-sticky-photo',
    templateUrl: './sticky-photo.component.html',
    styleUrls: ['./sticky-photo.component.css']
})

export class StickyPhotoComponent {
    /** Takes "src" from components who calls it */
    @Input() src: string = "home";
}