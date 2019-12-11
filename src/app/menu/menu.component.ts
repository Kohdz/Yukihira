import { Component, OnInit } from '@angular/core';
import { DishService } from '../services/dish.service'
import {Dish} from '../shared/dish'

@Component({
  selector: "app-menu",
  templateUrl: "./menu.component.html",
  styleUrls: ["./menu.component.scss"]
})
export class MenuComponent implements OnInit {
  dishes: Dish[];
// DishService
  selectedDish: Dish;


  // when you declare this in the construtor, when this component
  // is created, then this DishService that is what you inject into the app module
  // the app module will be made avaliable to you within your menu component here
  // you can then call upon the methods that this DishService provides for you in
  // in order to do the work on your behalf
  constructor(private dishService: DishService) { }

  // our class implements OnInit
  // this lifecycle method is run whenever this component is instantated
  // you can aks this method to get is information from our dishService
  ngOnInit() {
    this.dishes = this.dishService.getDishes()
  }


  onSelect(dish: Dish) {
    this.selectedDish = dish;
  }

}