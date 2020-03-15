import { Injectable } from "@angular/core";
import { Promotion } from "../shared/promotion";
import { PROMOTIONS } from "../shared/promotions";

@Injectable({
  providedIn: "root"
})
export class PromotionService {
  constructor() {}

  getPromotions(): Promise<Promotion[]> {
    // Simulate server latency with a 2 second delay
    return new Promise(res => {
      setTimeout(() => res(PROMOTIONS), 2000);
    });
  }

  getPromotion(id: string): Promise<Promotion> {
    // Simulate server latency with a 2 second delay
    return new Promise(res => {
      setTimeout(
        () => res(PROMOTIONS.filter(promotion => promotion.featured)[0]),
        2000
      );
    });
  }

  getFeaturedPromotion(): Promise<Promotion> {
    return new Promise(res => {
      // Simulate server latency with a 2 second delay
      setTimeout(
        () => res(PROMOTIONS.filter(promotion => promotion.featured)[0]),
        2000
      );
    });
  }
}
