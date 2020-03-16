import { Component, OnInit } from "@angular/core";
import { Leader } from "../shared/leader";
import { LeadersService } from "../services/leaders.service";
import { flyInOut, expand } from "../animations/app.animations";

@Component({
  selector: "app-about",
  templateUrl: "./about.component.html",
  styleUrls: ["./about.component.scss"],
  host: {
    "[@flyInOut]": "true",
    style: "display: block"
  },
  animations: [flyInOut(), expand()]
})
export class AboutComponent implements OnInit {
  leaders: Leader[];
  constructor(private leaderservices: LeadersService) {}

  ngOnInit() {
    this.leaderservices.getLeaders().subscribe(leaders => {
      this.leaders = leaders;
    });
  }
}
