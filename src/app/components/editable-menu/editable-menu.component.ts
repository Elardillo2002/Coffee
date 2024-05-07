import { Component, OnInit } from '@angular/core';
import { CookieService } from 'src/app/services/cookie.service';
import { MenuService } from 'src/app/services/menu.service';
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
    editMode: boolean = true;

    /** Variable for starters dishes */
    first: DishItem[] = [];
    /** Variable for entrees dishes */
    second: DishItem[] = [];
    /** Variable for poke dishes */
    poke: DishItem[] = [];

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

    deleteDish(id: number, name: string, date: string) {
        this.menuService.deleteDish(id).subscribe();
        alert(`El plato ${name} con fecha ${date} ha sido eliminado`);
    }
    
    /** Method for change API data */
    saveChanges(): void {
        this.editMode = !this.editMode;
    }

    /** Method to cancel edit mode and restore the original menu */
    cancelEdit(): void {
        this.editMode = !this.editMode;
    }
}