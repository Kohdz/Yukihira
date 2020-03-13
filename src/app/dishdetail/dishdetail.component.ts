import { Component, OnInit, Input } from "@angular/core";
import { Dish } from "../shared/dish";

@Component({
  selector: "app-dishdetail",
  templateUrl: "./dishdetail.component.html",
  styleUrls: ["./dishdetail.component.scss"]
})
export class DishdetailComponent implements OnInit {
  // input() allows you to supply information from one component to another
  @Input()
  dish: Dish;

  constructor() {}

  ngOnInit() {}
}
