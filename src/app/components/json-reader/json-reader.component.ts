import { Component, OnInit } from '@angular/core';
import { CookieService } from 'src/app/services/cookie.service';
import { MenuService } from 'src/app/services/menu.service';
import { MenuItem } from 'src/app/models/menu-item';

@Component({
  selector: 'app-json-reader',
  templateUrl: './json-reader.component.html',
  styleUrls: ['./json-reader.component.css']
})

// TODO: Use NgModel with FormsModule (import in app.module.ts) for items.date
export class JsonReaderComponent implements OnInit {
    /** Test user's cookie checker */
    pruebaCookie: boolean = false;

    /** API data storage */
    jsonDataMenu: string[] = [];
    jsonDataFirst: any;
    jsonDataSecond: any;
    jsonDataPoke: any;

    /** Day selected to display the menu */
    selectedDate: string = "";

    /**
     * Component constructor
     * @param {CookieService} cookieService Checks admin cookies
     * @param {MenuService} menuService Takes menu from API
     */
    constructor (
        private cookieService: CookieService, 
        private menuService: MenuService
    ) {}

    ngOnInit() {
        /** Searchs for test user's cookie */
        this.pruebaCookie = this.cookieService.checkCookie("prueba");

        /** Takes today's string value */
        const date: string = new Date().toISOString().slice(0,10);
        this.menuService.getDataMenu().subscribe(data => {console.log(data)});

        /** Takes menu.first from JSON data with a filter of date */
        this.menuService.getDataFirst().subscribe((data: MenuItem[]) => {
            this.jsonDataFirst = data.filter((item: MenuItem) => item.date === date);
        });

        /** Takes menu.second from JSON data with a filter of date */
        this.menuService.getDataSecond().subscribe((data: MenuItem[]) => {
            this.jsonDataSecond = data.filter((item: MenuItem) => item.date === date);
        });
        
        /** Takes menu.poke from JSON data with a filter of date */
        this.menuService.getDataPoke().subscribe((data: MenuItem[]) => {
            this.jsonDataPoke = data.filter((item: MenuItem) => item.date === date);
        });

        /** Selector for input[type=date] */
        const dateInput = document.querySelector("input[type=date]") as HTMLInputElement;
        dateInput.value = date; 
        dateInput.min = date;
        this.selectedDate = date;
    }
}