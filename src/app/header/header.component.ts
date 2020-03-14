import { Component, OnInit } from "@angular/core";
import { DISHES } from "../shared/dishes";
import { Dish } from "../shared/dish";
import { MatDialog, MatDialogRef } from "@angular/material";
import { LoginComponent } from "../login/login.component";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"]
})
export class HeaderComponent implements OnInit {
  title = "Yukihira";

  constructor(public dialog: MatDialog) {}

  ngOnInit() {}

  openLoginForm() {
    this.dialog.open(LoginComponent, { width: "500px", height: "450px" });
  }

  getDish(id: string): Dish {
    return DISHES.filter(dish => dish.id === id)[0];
  }

  getFeaturedDish(): Dish {
    return DISHES.filter(dish => dish.featured)[0];
  }
}
