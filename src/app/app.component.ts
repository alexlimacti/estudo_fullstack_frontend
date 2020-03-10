import { Component, OnInit } from "@angular/core";
import { UserDTO } from "./core/model/userDTO";
import { ApiService } from "./core/api.service";
import { Observable } from "rxjs";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  title = "Spring Boot e Angular 9";
  constructor(private apiService: ApiService) {}

  isAuthenticated(): Observable<boolean> {
    return this.apiService.isAuthenticated();
  }
}
