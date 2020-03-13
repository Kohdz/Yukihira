import { Component } from "@angular/core";

// a component decorator
// takes a JS objet and has a selector
// selects the root in out template
// templateUrls- points to the html file which defines the view
@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  title = "Yukihira";
}
