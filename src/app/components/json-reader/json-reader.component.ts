import { Component, OnInit } from '@angular/core';
import { CookieService } from 'src/app/services/cookie.service';
import { MenuService } from 'src/app/services/menu.service';
import { MenuItem } from 'src/app/models/menu-item';

@Component({
  selector: 'app-json-reader',
  templateUrl: './json-reader.component.html',
  styleUrls: ['./json-reader.component.css']
})

export class JsonReaderComponent implements OnInit {
    /** Test user's cookie checker */
    pruebaCookie: boolean = false;

    /** API data storage */
    jsonDataMenu: string[] = [];

    /** Day selected to display the menu */
    selectedDate: string = "";
    
    /** Takes today's string value */
    date: string = new Date().toISOString().slice(0,10);

    /** Variable for starters dishes */
    first: MenuItem[] = [];
    /** Variable for entrees dishes */
    second: MenuItem[] = [];
    /** Variable for poke dishes */
    poke: MenuItem[] = [];
    
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

        /** Obtains menu for today */
        this.menuService.getDishDate(this.date).subscribe((data: MenuItem[]) => {
            this.first = data.filter(item => item.type === "First");
            this.second = data.filter(item => item.type === "Second");
            this.poke = data.filter(item => item.type === "Poke");            
        });

        /** Selector for input[type=date] */
        const dateInput = document.querySelector("input[type=date]") as HTMLInputElement;
        dateInput.value = this.date;
        dateInput.min = this.date;
        this.selectedDate = this.date;
    }
    
    /** Take selected date and shows it */
    searchDate() {
        const dateInput = document.querySelector("input[type=date]") as HTMLInputElement;
        this.date = dateInput.value;
        
        /** Obtains menu for selected date */
        this.menuService.getDishDate(this.date).subscribe((data: MenuItem[]) => {
            this.first = data.filter(item => item.type === "First");
            this.second = data.filter(item => item.type === "Second");
            this.poke = data.filter(item => item.type === "Poke");            
        });
    }
}