import { Injectable } from '@angular/core';
import { Leader } from '../shared/leader'
import { LEADERS } from '../shared/leaders'

@Injectable({
  providedIn: 'root'
})
export class LeaderService {
  constructor() { }

  getLeaders(): Promise<Leader[]> {
    return Promise.resolve(LEADERS)
  }

  getFeaturedLeader(): Promise<any> {
    console.log("H")
    return new Promise (resolve => {
      // simulate server latency with 2 second delay
      setTimeout(() => resolve((LEADERS.filter((feature) => (feature.featured)[0]), 2000)));
    })
  }
}

