import React from 'react';
import {Line as LineChart} from 'react-chartjs';

const data = {
  labels: ['', '', '', '', '', '', '', '',],
  datasets: [
    {
      fillColor: "#7a59af",
      color: '#fff',
      pointColor: "#fff",
      pointBackgroundColor: "rgba(179,181,198,1)",
      pointBorderColor: "#00fff5",
      pointHoverRadius: 5,
      pointRadius: 10,
      pointHitRadius: 0,
      data: [ 1, 15, 8, 8, 5, 10, 15,1],
      spanGaps: true,
    }
  ]
};

const data2 = {
  labels: ['', '', '', '', '', '', '', ''],
  datasets: [
    {
      fillColor: "#7a59af",
      color: '#fff',
      pointColor: "#fff",
      pointBackgroundColor: "rgba(179,181,198,1)",
      pointBorderColor: "#00fff5",
      label: "My First dataset",
      fill: true,
      pointHoverRadius: 5,
      pointRadius: 10,
      pointHitRadius: 0,
      data: [ 1, 3, 4, 6, 12, 8, 4,1],
      spanGaps: true,
    }
  ]
};

export default class ChartComponent extends React.Component {
  render() {
    return (
      <div>
        <LineChart
          data={data}
          options={null}
          width="600"
          height="250"
        />
        <div className='chart2'>
          <LineChart
            data={data2}
            options={{
              scaleShowLabels: false,
            }}
            width="600"
            height="250"
          />
        </div>
      </div>
    )
  }
}