import { Injectable } from "@angular/core";
import { Dish } from "../shared/dish";
import { DISHES } from "../shared/dishes";
import { of, Observable } from "rxjs";
import { delay } from "rxjs/operators";

@Injectable({
  providedIn: "root"
})
export class DishService {
  // promises with latency
  // getDishes(): Promise<Dish[]> {
  //   return of(DISHES).pipe(delay(2000)).toPromise();
  // }

  // promises with observels
  // getDishes(): Promise<Dish[]> {
  //   return of(DISHES)
  //     .pipe(delay(2000))
  //     .toPromise();
  // }
  getDishes(): Observable<Dish[]> {
    return of(DISHES).pipe(delay(2000));
  }

  getDish(id: string): Observable<Dish> {
    return of(DISHES.filter(dish => dish.id === id)[0]).pipe(delay(2000));
  }

  getFeaturedDish(): Observable<Dish> {
    return of(DISHES.filter(dish => dish.featured)[0]).pipe(delay(2000));
  }

  constructor() {}
}
