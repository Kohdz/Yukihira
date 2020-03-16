import { Component, OnInit, Inject } from "@angular/core";
import { Dish } from "../shared/dish";
import { DishService } from "../services/dish.service";
import { Promotion } from "../shared/promotion";
import { PromotionService } from "../services/promotion.service";
import { LeadersService } from "../services/leaders.service";
import { Leader } from "../shared/leader";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"]
})
export class HomeComponent implements OnInit {
  dish: Dish;
  disErrMess: string;
  promotion: Promotion;
  leader: Leader;

  constructor(
    private dishservice: DishService,
    private promotionservice: PromotionService,
    private leaderservices: LeadersService,
    @Inject("BaseURL") private BaseURL
  ) {}

  ngOnInit() {
    this.dishservice.getFeaturedDish().subscribe(
      dish => (this.dish = dish),
      errmess => (this.disErrMess = <any>errmess)
    );

    this.promotionservice
      .getFeaturedPromotion()
      .subscribe(promotion => (this.promotion = promotion));

    this.leaderservices
      .getFeaturedLeader()
      .subscribe(leader => (this.leader = leader));
  }
}
