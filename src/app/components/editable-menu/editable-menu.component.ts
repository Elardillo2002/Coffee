import { Component, OnInit } from '@angular/core';
import { CookieService } from 'src/app/services/cookie.service';
import { MenuService } from 'src/app/services/menu.service';
import { MenuItem } from 'src/app/models/menu-item';
import { DishItem } from 'src/app/models/dish-item';

@Component({
  selector: 'app-editable-menu',
  templateUrl: './editable-menu.component.html',
  styleUrls: ['./editable-menu.component.css']
})

export class EditableMenuComponent implements OnInit {
    /** Admin cookie checker */
    adminCookie: boolean = false;

    /** Variable for edit mode */
    editMode: boolean = false;

    /** Variable for add mode */
    addMode: boolean = false;

    /** Variable for starters dishes */
    first: DishItem[] = [];
    /** Variable for entrees dishes */
    second: DishItem[] = [];
    /** Variable for poke dishes */
    poke: DishItem[] = [];

    /** Takes today's string value */
    date: string = new Date().toISOString().slice(0,10);

    /** Variable for add new dish name */
    newName: string = "";
    /** Variable for add new dish date */
    newDate: string = "";
    /** Variable for add new dish type */
    newType: string = "";
    /** Variable for add new dish price */
    newPrice: number = 0;

    /**
     * Component constructor
     * @param {CookieService} cookieService Checks admin cookies
     * @param {MenuService} menuService Takes menu from API
     */
    constructor(
        private cookieService: CookieService,
        private menuService: MenuService
    ) { }

    ngOnInit(): void {
        /** Searchs for admin's cookie */
        this.adminCookie = this.cookieService.checkCookie("admin");
        
        /** Only if admin cookie exists */
        if (this.adminCookie) {
            /** Obtains menu for today */
            this.menuService.getAllDishID().subscribe(data => {console.log(data);});

            this.menuService.getAllDishID().subscribe((data: DishItem[]) => {
                this.first = data.filter(item => item.type === "First");
                this.second = data.filter(item => item.type === "Second");
                this.poke = data.filter(item => item.type === "Poke");            
            });
        }
    }

    /** Method to activating / deactivating edit mode */
    edit(): void {
        this.editMode = !this.editMode;
    }

    /** Method to activating / desactivating addDish mode */
    add() {
        this.addMode = !this.addMode;
    }

    /** Method that takes newDish inputs and adds it to BD if correct */
    addDish() {
        const dish: MenuItem = {
            name: this.newName,
            price: this.newPrice,
            type: this.newType,
            date: this.newDate
        }

        if (this.newName !== "" && this.newPrice > 0 && this.newType !== "" && this.newDate !== "") {
            this.menuService.addDataDish(dish).subscribe();
            alert("Los datos se han introducido correctamente.");
        } else {
            alert("Los datos introducidos no son válidos.");
        }
    }

    dishChanges(item: DishItem) {
        this.menuService.editDish(item).subscribe();
    }

    deleteDish(id: number, name: string, date: string) {
        const confirmDelete = window.confirm(`Se va a eliminar el plato ${name} con fecha ${date}. ¿Está seguro?`);

        if (confirmDelete) {
            this.menuService.deleteDish(id).subscribe(() => {
                this.first = this.first.filter(item => item.dishId !== id);
                this.second = this.second.filter(item => item.dishId !== id);
                this.poke = this.poke.filter(item => item.dishId !== id);   
            });
        }
    }
}