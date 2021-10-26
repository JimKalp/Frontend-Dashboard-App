import React, {Component} from 'react';
import {Bar, Line, defaults} from 'react-chartjs-2';


const Chart = () => {

  function updateChart() {
    async function fetchData(){
      const url = 'http://localhost:3001/metrics';
      const response = await fetch(url);
      const datapoints = await response.json();
      //console.log(datapoints);
      return datapoints;
    };
    fetchData().then(datapoints => {
      const metric1 = datapoints.map(
        function(index){
          return index.metric_1;
        });
        function calcAvg() {
          var sum = 0;
          for( var i = 0; i < metric1.length; i++ ){
            sum += metric1[i] }
          var avg = sum/metric1.length;
          return avg;
        };
        console.log(Math.max(...metric1));
        console.log(Math.min(...metric1));
        console.log(calcAvg());
    })
  }

  
  //const metric1 = updateChart();
  return (
    <div>
      <Bar
        data={{
          labels: ['Red', 'Blue', 'Yellow'],
          datasets: [
            {
              label: 'stats',
              data: [7, 19, 3],
              backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)',
              ],
              borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)',
              ],
              borderWidth: 1,
            },
          ],
        }}
        height={400}
        width={500}
        options={{
          maintainAspectRatio: false,
          scales: {
            yAxes: [
              {
                ticks: {
                  beginAtZero: true,
                },
              },
            ],
          },
          legend: {
            labels: {
              fontSize: 20,
            },
          },
        }}
      />
    </div>
  )
}

export default Chart