import { Component, OnInit } from "@angular/core";
import { UserDTO } from "src/app/core/model/userDTO";
import { Summary } from "src/app/core/model/summary";
import { MessageService } from "src/app/core/message.service";
import { ApiService } from "src/app/core/api.service";
import { ResponseApi } from "src/app/core/model/response-api";

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.scss"]
})
export class DashboardComponent implements OnInit {
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

  /*
   * Grafico Barra
   */
  public barChartOptions = {
    scaleShowVerticalLines: false,
    responsive: true
  };

  public barChartLabels = [
    "2006",
    "2007",
    "2008",
    "2009",
    "2010",
    "2011",
    "2012"
  ];
  public barChartType = "bar";
  public barChartLegend = true;
  public barChartData = [
    { data: [65, 59, 80, 81, 56, 55, 40], label: "Series A" },
    { data: [28, 48, 40, 19, 86, 27, 90], label: "Series B" }
  ];

  /*
   * Grafico Pizza
   */

  public pieChartLabels: string[] = ["Ativos", "Inativos", "Traffic"];
  public pieChartData: number[] = [2, 3, 323];
  public pieChartType: string = "pie";

  // events
  public chartClicked(e: any): void {
    console.log(e);
  }

  public chartHovered(e: any): void {
    console.log(e);
  }
}
