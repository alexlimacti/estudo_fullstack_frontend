import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { ApiService } from "src/app/core/api.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"]
})
export class HomeComponent implements OnInit {
  isUserLogged = this.apiService.isUserLogged();

  constructor(private apiService: ApiService, private router: Router) {}

  ngOnInit(): void {
    if (this.isUserLogged) this.router.navigate(["/welcome"]);
  }

  isAutenticated(): Observable<boolean> {
    return this.apiService.isAuthenticated();
  }
}
