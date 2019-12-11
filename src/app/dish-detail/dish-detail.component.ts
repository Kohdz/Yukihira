import { Component, OnInit } from "@angular/core";
import { Params, ActivatedRoute } from '@angular/router'
import { Location } from '@angular/common'
import {DISHES} from '../shared/dishes'
import { DishService } from '../services/dish.service' 

@Component({
  selector: "app-dish-detail",
  templateUrl: "./dish-detail.component.html",
  styleUrls: ["./dish-detail.component.scss"]
})
export class DishDetailComponent implements OnInit {
  // @Input()
  dish= DISHES[0];
  constructor(private dishService: DishService, 
    private route: ActivatedRoute,
    private location: Location) {}

  ngOnInit() {
    let id = this.route.snapshot.params['id']
    this.dish = this.dishService.getDish(id)
  }

  goBack(): void {
    this.location.back();
  }
}
