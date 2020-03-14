import { Component, OnInit } from "@angular/core";
import { DISHES } from "../shared/dishes";
import { Dish } from "../shared/dish";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"]
})
export class HeaderComponent implements OnInit {
  title = "Yukihira";

  constructor() {}

  ngOnInit() {}

  getDish(id: string): Dish {
    return DISHES.filter(dish => dish.id === id)[0];
  }

  getFeaturedDish(): Dish {
    return DISHES.filter(dish => dish.featured)[0];
  }
}
