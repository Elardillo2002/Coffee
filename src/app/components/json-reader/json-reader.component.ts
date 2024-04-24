import { Component, OnInit } from '@angular/core';
import { CookieService } from 'src/app/services/cookie.service';
import { MenuService } from 'src/app/services/menu.service';

interface MenuItem {
    id: string;
    name: string;
    price: number;
    date: string;
}

@Component({
  selector: 'app-json-reader',
  templateUrl: './json-reader.component.html',
  styleUrls: ['./json-reader.component.css']
})

// TODO: Use NgModel with FormsModule (import in app.module.ts) for items.date
export class JsonReaderComponent implements OnInit {
    pruebaCookie: boolean = false;

    jsonDataFirst: any;
    jsonDataSecond: any;
    jsonDataPoke: any;

    selectedDate: string = "";

    constructor (
        private cookieService: CookieService, 
        private menuService: MenuService
    ) {}

    ngOnInit() {
        this.pruebaCookie = this.cookieService.checkCookie("prueba");

        const date: string = new Date().toISOString().slice(0,10); // Take today's string value
        this.menuService.getDataFirst().subscribe((data: MenuItem[]) => {
            this.jsonDataFirst = data.filter((item: MenuItem) => item.date === date);
        });

        this.menuService.getDataSecond().subscribe((data: MenuItem[]) => {
            this.jsonDataSecond = data.filter((item: MenuItem) => item.date === date);
        });
        
        this.menuService.getDataPoke().subscribe((data: MenuItem[]) => {
            this.jsonDataPoke = data.filter((item: MenuItem) => item.date === date);
        });

        const dateInput = document.querySelector("input[type=date]") as HTMLInputElement; // Select date input
        dateInput.value = date; 
        dateInput.min = date;
        this.selectedDate = date;
    }
}