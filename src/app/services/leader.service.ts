import { Injectable } from '@angular/core';
import { Leader } from '../shared/leader'
import { LEADERS } from '../shared/leaders'

@Injectable({
  providedIn: 'root'
})
export class LeaderService {

  constructor() { }

  getLeaders(): Leader[] {
    return LEADERS
  }

  // getFeaturedLeader(): Leader {
    // return LEADERS.filter((lead) => lead.featured[0])
  // }

  // getFeaturedPromotion(): Promotion {
  //   return PROMOTIONS.filter((promo) => promo.featured)[0]

  // }

}

