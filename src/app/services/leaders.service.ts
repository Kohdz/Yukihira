import { Injectable } from "@angular/core";
import { Leader } from "../shared/leader";
import { LEADERS } from "../shared/leaders";

@Injectable({
  providedIn: "root"
})
export class LeadersService {
  constructor() {}

  getLeaders(): Promise<Leader[]> {
    return new Promise(res => {
      // Simulate server latency with 2 second delay
      setTimeout(() => res(LEADERS), 2000);
    });
  }

  getLeader(id: string): Promise<Leader> {
    return new Promise(res => {
      // Simulate server latency with 2 second delay
      setTimeout(
        () => res(LEADERS.filter(leader => leader.id === id)[0]),
        2000
      );
    });
  }
  getFeaturedLeader(): Promise<Leader> {
    return new Promise(res => {
      // Simulate server latency with 2 second delay
      setTimeout(
        () => res(LEADERS.filter(promotion => promotion.featured)[0]),
        2000
      );
    });
  }
}
