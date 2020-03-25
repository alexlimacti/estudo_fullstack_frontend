import { Component, OnInit } from '@angular/core';

import { ReportsService } from './../reports.service';

@Component({
  selector: 'app-users-report',
  templateUrl: './users-report.component.html',
  styleUrls: ['./users-report.component.scss']
})
export class UsersReportComponent implements OnInit {

  constructor(private reportsService: ReportsService) { }

  ngOnInit(): void {
  }

  generate() {
    this.reportsService.usersReport()
      .then(report => {
        const url = window.URL.createObjectURL(report);

        window.open(url);
      });
  }

}
