import { Component, Input } from '@angular/core';
import { Coffee } from 'src/app/models/coffee';

@Component({
    selector: 'app-coffee-card',
    templateUrl: './coffee-card.component.html',
    styleUrls: ['./coffee-card.component.css']
})

export class CoffeeCardComponent {
    /** Receive coffee list type from cafeteria component */
    @Input() coffee: Coffee = {
        name: "",
        ingredients: "",
        src: ""
    };
}
