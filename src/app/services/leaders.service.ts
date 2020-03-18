import { Injectable } from "@angular/core";
import { Leader } from "../shared/leader";
import { LEADERS } from "../shared/leaders";
import { of, Observable } from "rxjs";
import { delay } from "rxjs/operators";

@Injectable({
  providedIn: "root"
})
export class LeadersService {
  constructor() {}

  getLeaders(): Observable<Leader[]> {
    return of(LEADERS).pipe(delay(1000));
  }

  getLeader(id: string): Observable<Leader> {
    return of(LEADERS.filter(leader => leader.id === id)[0]).pipe(delay(1000));
  }

  getFeaturedLeader(): Observable<Leader> {
    return of(LEADERS.filter(promotion => promotion.featured)[0]).pipe(
      delay(1000)
    );
  }
}
