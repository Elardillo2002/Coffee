import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Coffee } from 'src/app/models/coffee';

@Component({
  selector: 'app-cafeteria',
  templateUrl: './cafeteria.component.html',
  styleUrls: ['./cafeteria.component.css']
})

export class CafeteriaComponent {
  /** Component constructor
   * @param {TranslateService} translate Translate coffee list in typeScript component
   */
  constructor(private translate: TranslateService) {}
  
  /**
   * Coffee types list
   * @type {name: string, ingredients: string, src: string}
   */
  coffees: Coffee[] = [
    { name: this.translate.instant('coffeeTypes.espresso'), ingredients: this.translate.instant('coffeeTypes.coffee'), src: "Solo" },
    { name: this.translate.instant('coffeeTypes.macchiato'), ingredients: this.translate.instant('coffeeTypes.milk'),  src: "Cortado" },
    { name: this.translate.instant('coffeeTypes.withMilk'), ingredients: this.translate.instant('coffeeTypes.milk'), src: "Con leche" },
    { name: this.translate.instant('coffeeTypes.americano'), ingredients: this.translate.instant('coffeeTypes.hotWater'), src: "Americano" },
    { name: this.translate.instant('coffeeTypes.bombon'), ingredients: this.translate.instant('coffeeTypes.condensedMilk'), src: "Bombón" },
    { name: this.translate.instant('coffeeTypes.cappuccino'), ingredients: this.translate.instant('coffeeTypes.milk'), src: "Cappuccino" },
    { name: this.translate.instant('coffeeTypes.carajillo'), ingredients: this.translate.instant('coffeeTypes.brandy'), src: "Carajillo" },
  ];
}
