import React from 'react';
import { Line } from 'react-chartjs-2';

function LineGraph(props) {
    //console.log(props.yAxis);
    return (
        <div className="main_graph">
            <Line data={{
                labels: props.xAxis.map(s => s.substr(0, 10)),
                datasets: [
                    {
                    label: 'COVID19 Graphical Analysis',
                    fill: true,
                    lineTension: 0.1,
                    backgroundColor: 'rgba(75,192,192,0.3)',
                    borderColor: 'rgba(75,192,192,100)',
                    borderCapStyle: 'butt',
                    borderDash: [],
                    borderDashOffset: 0.0,
                    borderJoinStyle: 'miter',
                    pointBorderColor: 'red',
                    pointBackgroundColor: 'white',
                    pointBorderWidth: 0.5,
                    pointHoverRadius: 5,
                    pointHoverBackgroundColor: 'rgba(75,192,192,1)',
                    pointHoverBorderColor: 'rgba(220,220,220,1)',
                    pointHoverBorderWidth: 2,
                    pointRadius: 1,
                    pointHitRadius: 10,
                    data: props.yAxis,
                    }
                ]
                }}
            />
        </div>
    )
}

export default LineGraph;
