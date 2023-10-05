import { Component } from '@angular/core';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
   PieHighcharts = Highcharts;
   LineHighcharts = Highcharts;
   PieChartOptions:Highcharts.Options = {   
      chart : {
         plotShadow: false
      },
      title : {
         text: 'Parking Analytics'   
      },
      tooltip : {
         pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
      },
      plotOptions : {
         pie: {
            allowPointSelect: true,
            cursor: 'pointer',
      
            dataLabels: {
               enabled: false           
            },
      
            showInLegend: true
         }
      },
      series : [{
         type: 'pie',
         name: 'Vehicle in',
         data: [
            ['Microbus',   45.0],
            ['Car',       26.8],
            ['Truck', 44],
         ]
      }]
   };

   chartOptionsLine: Highcharts.Options = {
    chart: {
      backgroundColor: '#4AD29526',
      height: 170
    },
    legend: {enabled: false},
    title: {text:''},
    plotOptions: {
      series: {
        color: '#4AD295',
        lineWidth: 5
      }
    },
    series: [
      {
        type: "line",
        data: [10, 5, 9, 15, 20, 45, 60, 75]
      }
    ],
    xAxis: {
      gridLineDashStyle: 'LongDash',
      tickLength: 0,
      labels: {
        enabled: false
      },
    },
    yAxis: {
      title: {
        text: 'Number of Cars'
      },
      gridLineDashStyle: 'LongDash',
      tickLength: 0,
      labels: {
        enabled: false
      }
    }
  };
}
