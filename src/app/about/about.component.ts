import { Component, OnInit } from '@angular/core';
import { LeaderService } from '../services/leader.service';
import { Leader } from '../shared/leader'

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  leaders = [];
  // dishes: Dish[];


  constructor(private LeaderService: LeaderService) { }

  

  ngOnInit() {
    
    this.LeaderService.getLeaders().then((leader) => this.leaders =  leader)
  }

}
