import { Component, OnInit } from '@angular/core';
import Chart from 'chart.js';


// core components
import {
  chartOptions,
  parseOptions,
  chartExample1,
  chartExample2
} from "../../variables/charts";
import { RegisterService } from 'src/app/services/register.service';
import { Router } from '@angular/router';
import { DovizService } from 'src/app/services/doviz.service';
import { Doviz } from 'src/app/services/Doviz';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  public datasets: any;
  public data: any;
  public salesChart;
  public clicked: boolean = true;
  public clicked1: boolean = false;


  constructor(private registerService: RegisterService, private router: Router, private dovizService: DovizService) { }
  doviz: Doviz[];
  today: any = {};
  ngOnInit() {

    if (this.registerService.isAuthenticated) {
      this.router.navigateByUrl('dashboard')
    }
    else {
      this.router.navigateByUrl('login')
    }

    this.dovizService.getDoviz().subscribe(data => {
      this.doviz = data['kurlar'];
    })

    this.dovizService.getGunceTarih().subscribe(data => {
      this.today = data;

    })

    this.datasets = [
      [0, 20, 10, 30, 15, 40, 20, 60, 60],
      [0, 20, 5, 25, 10, 30, 15, 40, 40]
    ];
    this.data = this.datasets[0];


    var chartOrders = document.getElementById('chart-orders');

    parseOptions(Chart, chartOptions());


    var ordersChart = new Chart(chartOrders, {
      type: 'bar',
      options: chartExample2.options,
      data: chartExample2.data
    });

    var chartSales = document.getElementById('chart-sales');

    this.salesChart = new Chart(chartSales, {
      type: 'line',
      options: chartExample1.options,
      data: chartExample1.data
    });


  }





  public updateOptions() {
    this.salesChart.data.datasets[0].data = this.data;
    this.salesChart.update();
  }

}
