import React from "react";
import { Doughnut } from "react-chartjs-2";
import { MDBContainer } from "mdbreact";

function DonutChart(props){
    var chartData = {
    dataDoughnut: {
        labels: props.labels,
        datasets: [
            {
                data: props.data,
                backgroundColor: props.BGColor,
                hoverBackgroundColor: props.HBGColor
            }
            ]
        }
    }

    return (
        <div className="row">
            <h3 className="mt-5">{props.chartTitle}</h3>
            <Doughnut data={chartData.dataDoughnut} options={{ responsive: true }} />
        </div>
    );
}

export default DonutChart;