import { Component, OnInit } from "@angular/core";
import { Leader } from "../shared/leader";
import { LeadersService } from "../services/leaders.service";

@Component({
  selector: "app-about",
  templateUrl: "./about.component.html",
  styleUrls: ["./about.component.scss"]
})
export class AboutComponent implements OnInit {
  leaders: Leader[];
  constructor(private leaderservices: LeadersService) {}

  ngOnInit() {
    // non-pomise
    // this.leaders = this.leaderservices.getLeaders();

    // promise
    this.leaderservices.getLeaders().subscribe(leaders => {
      this.leaders = leaders;
    });
  }
}

// dish: Dish;

// constructor(
//   private dishService: DishService,
//   private route: ActivatedRoute,
//   private location: Location
// ) {}

// ngOnInit() {
//   const id = this.route.snapshot.params["id"];
//   this.dish = this.dishService.getDish(id);
// }
