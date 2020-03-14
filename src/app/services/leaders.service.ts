import { Injectable } from "@angular/core";
import { Leader } from "../shared/leader";
import { LEADERS } from "../shared/leaders";

@Injectable({
  providedIn: "root"
})
export class LeadersService {
  constructor() {}

  getLeaders(): Leader[] {
    return LEADERS;
  }
  getLeader(id: string): Leader {
    return LEADERS.filter(promo => promo.id === id)[0];
  }

  getFeaturedLeader(): Leader {
    return LEADERS.filter(promotion => promotion.featured)[0];
  }
}
