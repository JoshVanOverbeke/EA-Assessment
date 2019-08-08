import React from "react";
import { Bar } from "react-chartjs-2";

function BarChart(props){
    var chartData = {
        dataBar: {
            labels: props.labels,
            datasets: [
              {
                label: props.label,
                data: props.data,
                backgroundColor: [
                  "rgba(255, 134,159,0.4)",
                  "rgba(98,  182, 239,0.4)"
                ],
                borderWidth: 2,
                borderColor: [
                  "rgba(255, 134, 159, 1)",
                  "rgba(98,  182, 239, 1)"
                ]
              }
            ]
          },
          barChartOptions: {
            responsive: true,
            maintainAspectRatio: true,
            scales: {
              xAxes: [
                {
                  barPercentage: 1,
                  gridLines: {
                    display: true,
                    color: "rgba(0, 0, 0, 0.1)"
                  }
                }
              ],
              yAxes: [
                {
                  gridLines: {
                    display: true,
                    color: "rgba(0, 0, 0, 0.1)"
                  },
                  ticks: {
                    beginAtZero: true
                  }
                }
              ]
            }
          }
    }

    return (
        <div className="row">
            <h3 className="mt-5">{props.chartTitle}</h3>
            <Bar data={chartData.dataBar} options={chartData.barChartOptions} />
        </div>
    );
}
export default BarChart;