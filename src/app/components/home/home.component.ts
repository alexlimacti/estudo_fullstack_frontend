import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { ApiService } from "src/app/core/api.service";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"]
})
export class HomeComponent implements OnInit {
  constructor(private apiService: ApiService) {}

  ngOnInit(): void {}

  isAutenticated(): Observable<boolean> {
    return this.apiService.isAuthenticated();
  }
}
