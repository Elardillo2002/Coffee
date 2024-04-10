import { Component, Input } from '@angular/core';

interface Coffee {
    name: string;
    ingredients: string;
    src: string;
}

@Component({
    selector: 'app-coffee-card',
    templateUrl: './coffee-card.component.html',
    styleUrls: ['./coffee-card.component.css']
})

export class CoffeeCardComponent {
    @Input() coffee: Coffee = {
        name: "",
        ingredients: "",
        src: ""
    };
}
