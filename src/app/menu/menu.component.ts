import { Component, OnInit } from "@angular/core";
import { Dish } from "../shared/dish";

const DISHES: Dish[] = [
  {
    id: "0",
    name: "Burger",
    image: "/assets/images/burger.png",
    category: "mains",
    featured: true,
    label: "Hot",
    price: "4.99",
    // tslint:disable-next-line:max-line-length
    description:
      "A unique combination of Indian Uthappam (pancake) and Italian pizza, topped with Cerignola olives, ripe vine cherry tomatoes, Vidalia onion, Guntur chillies and Buffalo Paneer."
  },
  {
    id: "1",
    name: "Ramen",
    image: "/assets/images/ramen.png",
    category: "appetizer",
    featured: false,
    label: "",
    price: "1.99",
    description:
      "Deep fried Zucchini coated with mildly spiced Chickpea flour batter accompanied with a sweet-tangy tamarind sauce"
  },
  {
    id: "2",
    name: "Lemon Curd",
    image: "/assets/images/lemon-curd.png",
    category: "appetizer",
    featured: false,
    label: "New",
    price: "1.99",
    description:
      "A quintessential Yukihira experience, is it a vada or is it a donut?"
  },
  {
    id: "3",
    name: "Beef Roit",
    image: "/assets/images/beef-roti.png",
    category: "dessert",
    featured: false,
    label: "",
    price: "2.99",
    description:
      "A delectable, semi-sweet New York Style Cheese Cake, with Graham cracker crust and spiced with Indian cardamoms"
  }
];
@Component({
  selector: "app-menu",
  templateUrl: "./menu.component.html",
  styleUrls: ["./menu.component.scss"]
})
export class MenuComponent implements OnInit {
  dishes: Dish[] = DISHES;

  selectedDish: Dish = DISHES[1];

  constructor() {}

  ngOnInit() {}
}
