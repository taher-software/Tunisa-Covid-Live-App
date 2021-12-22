import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart, registerables } from 'chart.js';

Chart.register(...registerables);
const MonthConfirmedChart = () => {
  const months = ['January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'];
  const today = new Date();
  const month = today.getMonth();
  const data = {
    labels: ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10'],
    datasets: [
      {
        label: `${months[month]} New Cases`,
        fill: false,
        lineTension: 0.5,
        backgroundColor: 'rgba(75,192,192,1)',
        borderColor: 'rgba(0,0,0,1)',
        borderWidth: 2,
        data: [65, 59, 80, 81, 56],
      },
    ],
  };
  return (
    <div style={{ height: '200px', paddingBottom: '20px' }}>
      <Line
        data={data}
        options={{
          title: {
            display: true,
            text: 'Average Rainfall per month',
            fontSize: 20,
          },
          legend: {
            display: true,
            position: 'right',
          },
          responsive: true,
          maintainAspectRatio: false,
          scales: {
            x: {
              title: {
                display: true,
                text: 'Days Of Month',
                align: 'end',
                color: 'rgb(75, 192, 192)',
              },
            },
          },
        }}
      />
    </div>
  );
};
export default MonthConfirmedChart;
