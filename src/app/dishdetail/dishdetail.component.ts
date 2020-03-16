import { Component, OnInit, Input, Inject, ViewChild } from "@angular/core";
import { Dish } from "../shared/dish";
import { DishService } from "../services/dish.service";
import { Params, ActivatedRoute, ActivationEnd } from "@angular/router";
import { Location } from "@angular/common";
import { switchMap } from "rxjs/operators";
import { FormGroup, FormBuilder } from "@angular/forms";

@Component({
  selector: "app-dishdetail",
  templateUrl: "./dishdetail.component.html",
  styleUrls: ["./dishdetail.component.scss"]
})
export class DishdetailComponent implements OnInit {
  dish: Dish;
  errMess: string;
  dishIds: string[];
  prev: string;
  next: string;
  @ViewChild("cform", { static: false }) commentFormDirective;
  comment: Comment;
  commentForm: FormGroup;

  formErrors = {
    author: "",
    comment: ""
  };

  validationMessage = {
    author: {
      required: "Author Name is required",
      minlenght: "Author Name must be at least 2 charactors long"
    },
    comment: {
      required: "Comment is required"
    }
  };

  constructor(
    private dishservice: DishService,
    private route: ActivatedRoute,
    private location: Location,
    private fb: FormBuilder,
    @Inject("BaseURL") private BaseURL
  ) {}

  ngOnInit() {
    //     // this.createForm();

    this.dishservice
      .getDishIds()
      .subscribe(dishIds => (this.dishIds = dishIds));

    this.route.params
      .pipe(
        switchMap((params: Params) => this.dishservice.getDish(params["id"]))
      )
      .subscribe(
        dish => {
          this.dish = dish;
          this.setPrevNext(dish.id);
        },
        errMess => (this.errMess = <any>errMess)
      );
  }

  //     this.route.params
  //       .pipe(
  //         switchMap((params: Params) => this.dishservice.getDish(params["id"]))
  //       )
  //       .subscribe(
  //         dish => {
  //           this.dish = dish;
  //           this.setPrevNext(dish.id);
  //         },
  //         errmess => (this.errMess = <any>errmess)
  //       );
  //   }

  setPrevNext(dishId: string) {
    const index = this.dishIds.indexOf(dishId);
    this.prev = this.dishIds[
      (this.dishIds.length + index - 1) % this.dishIds.length
    ];
    this.next = this.dishIds[
      (this.dishIds.length + index + 1) % this.dishIds.length
    ];
  }

  goBack(): void {
    this.location.back;
  }
}

//     this.route.params
//       .pipe(
//         switchMap((params: Params) => this.dishservice.getDish(params["id"]))
//       )
//       .subscribe(
//         dish => {
//           this.dish = dish;
//           this.setPrevNext(dish.id);
//         },
//         errmess => (this.errMess = <any>errmess)
//       );
//   }
