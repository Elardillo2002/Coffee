import { Component } from '@angular/core';

interface Coffee {
  name: string;
  ingredients: string;
}

@Component({
  selector: 'app-cafeteria',
  templateUrl: './cafeteria.component.html',
  styleUrls: ['./cafeteria.component.css']
})

export class CafeteriaComponent {
  coffees: Coffee[] = [
    { name: "Solo", ingredients: "Café" },
    { name: "Cortado", ingredients: "Café, Leche" },
    { name: "Con leche", ingredients: "Café, Leche" },
    { name: "Americano", ingredients: "Café, Agua caliente" },
    { name: "Bombón", ingredients: "Café, Leche condensada" },
    { name: "Cappuccino", ingredients: "Café, Leche" },
    { name: "Carajillo", ingredients: "Café, Brandy, Azúcar" },
];
}
