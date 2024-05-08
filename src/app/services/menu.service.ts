import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MenuItem } from '../models/menu-item';
@Injectable({
    providedIn: 'root'
})
export class MenuService {
    // API url with CORS solution
    // DISHES
    /** Obtain all dishes */
    urlListAllDish: string = "api/dish/all";
    /** Obtain all dishes with ID */
    urlListAllDishID: string = "/api/dish/fulldishes";
    /** Add a new dish */
    urlAddDish: string = "api/dish";
    /** Edit a dish */
    urlEditDish: string = "/api/dish/edit"
    // MENU
    /** Obtain dishes of the day */
    urlMenuToday: string = "api/menu/today";
    /** Add a new menu */
    urlNewMenu: string = "api/menu";
    /**
     * Component constructor
     * @param httpClient 
     */
    constructor(private httpClient: HttpClient) { }
    
    // DISHES
    /** Get all dishes list 
     * @returns {Observable<any>}
    */
    getAllDish(): Observable<any> {
        return this.httpClient.get<any>(this.urlListAllDish);
    }
    /** Get all dishes list 
     * @returns {Observable<any>}
    */
    getAllDishID(): Observable<any> {
        return this.httpClient.get<any>(this.urlListAllDishID);
    }
    /** Get all dishes from specific date 
     * @param {string} date The specific date
     * @returns {Observable<any>}
    */
    getDishDate(date: string): Observable<any> {
        return this.httpClient.get<any>(`/api/dish/date/${date}`);
    }
    /** Add a new dish 
     * @param {Object} dish Includes name, price, type & date
    */
    addDataDish(dish: Object) {
        return this.httpClient.post(this.urlAddDish, dish);
    }

    /** Edit a dish 
     * @param {Object} dish Includes id, name, price, type & date
    */
    editDish(dish: Object) {
        return this.httpClient.put(this.urlEditDish, dish);
    }

    /** Delete a dish      
     * @param {number} id Dish ID
    */
    deleteDish(id: number) {
        return this.httpClient.delete(`/api/dish/delete/${id}`);
    }
    
    // MENU
    /** Get API data using API url 
     * @returns {Observable<any>}
    */
    getDataMenu(): Observable<any> {
        return this.httpClient.get<any>(this.urlMenuToday);
    }
    /** Create a new menu 
     * @param {Object} newMenu Includes price & date
    */
    createMenu(newMenu: Object) {
        return this.httpClient.post(this.urlNewMenu, newMenu);
    }
}