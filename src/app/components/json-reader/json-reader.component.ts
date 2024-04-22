import { Component, OnInit } from '@angular/core';
import { CookieService } from 'src/app/services/cookie.service';

import { MenuService } from 'src/app/services/menu.service';

import { distinct } from 'rxjs';

interface MenuItem {
    name: string,
    price: number,
    date: string
}

interface MenuType {
    First: MenuItem[];
    Second: MenuItem[];
    Poke: MenuItem[];
}

@Component({
  selector: 'app-json-reader',
  templateUrl: './json-reader.component.html',
  styleUrls: ['./json-reader.component.css']
})

// TODO: Use NgModel with FormsModule (import in app.module.ts) for items.date
export class JsonReaderComponent implements OnInit {
    pruebaCookie: boolean = false;
    urlFirst: string = "http://localhost:3000/First";
    urlSecond: string = "http://localhost:3000/Second";
    urlPoke: string = "http://localhost:3000/Poke";

    jsonData: any;

    menu: MenuType = {
        First: [],
        Second: [],
        Poke: []
      };

      constructor (
        private cookieService: CookieService, 
        private menuService: MenuService
    ) {}

    ngOnInit() {
        this.pruebaCookie = this.cookieService.checkCookie("prueba");

        this.loadData(this.urlFirst)
            .then(menuItems => {
                this.menu.First = menuItems;
            });

        this.loadData(this.urlSecond)
            .then(menuItems => {
                this.menu.Second = menuItems;
            });

        this.loadData(this.urlPoke)
            .then(menuItems => {
                this.menu.Poke = menuItems;
            });

            this.menuService.getData().subscribe(data => {
                this.jsonData = data;
                console.log(this.jsonData);
            })

        const date: string = new Date().toISOString().slice(0,10); // Take today's string value
        const dateInput = document.querySelector("input[type=date]") as HTMLInputElement; // Select date input
        dateInput.value = date; 
        dateInput.min = date;
    }

    loadData(url: string): Promise<MenuItem[]> {
        return new Promise((resolve) => {
            const conection = new XMLHttpRequest();

            conection.addEventListener("load", () => {
                if (conection.status >= 200 && conection.status < 300) {
                    const menu = JSON.parse(conection.response) as MenuItem[];
                    resolve(menu);
                }
            });

            conection.open("GET", url, true);
            conection.send();
        });
    }
}

// filterByDay(menuItems: MenuItem[]): MenuItem[] {
//     if (!this.selectedDay) {
//         return MenuItems;
//     }

//     return menuItems.filter(item => item.date == this.selectedDay);
// }