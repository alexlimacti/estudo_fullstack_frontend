import { Component, OnInit } from "@angular/core";
import { UserDTO } from "src/app/core/model/userDTO";
import { Summary } from "src/app/core/model/summary";
import { ApiService } from "src/app/core/api.service";
import { MessageService } from "src/app/core/message.service";
import { ResponseApi } from "src/app/core/model/response-api";

@Component({
  selector: "app-welcome",
  templateUrl: "./welcome.component.html",
  styleUrls: ["./welcome.component.scss"]
})
export class WelcomeComponent implements OnInit {
  public user = new UserDTO();
  summary: Summary = new Summary();
  classCss: {};

  constructor(
    private messageService: MessageService,
    private apiService: ApiService
  ) {}

  ngOnInit() {
    this.apiService.summary().subscribe(
      (responseApi: ResponseApi) => {
        this.summary = responseApi.data;
      },
      error => {
        this.messageService.showError("Dashboard", "Falha ao carregar dados");
      }
    );
  }
}
