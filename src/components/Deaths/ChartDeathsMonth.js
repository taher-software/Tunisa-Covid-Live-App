import React from 'react';
import { useSelector } from 'react-redux';
import { Line } from 'react-chartjs-2';
import { Chart, registerables } from 'chart.js';

Chart.register(...registerables);
const MonthDeathChart = () => {
  const dataOfMonthState = useSelector((state) => state.historical);
  let daysOfMonth = [];
  const newCasesData = [];
  if (Object.keys(dataOfMonthState).length > 0) {
    const dataOfMonth = dataOfMonthState.dates;
    daysOfMonth = Array.from(Object.keys(dataOfMonth));
    daysOfMonth.forEach((dayDate) => {
      const dayData = dataOfMonth[dayDate].countries.Tunisia;
      newCasesData.push(parseInt(dayData.today_new_deaths, 10));
    });
  }
  const months = ['January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'];
  const today = new Date();
  const month = today.getMonth();
  const data = {
    labels: daysOfMonth,
    datasets: [
      {
        label: `${months[month]} New Deaths`,
        fill: false,
        lineTension: 0.5,
        backgroundColor: 'rgba(75,192,192,1)',
        borderColor: 'rgba(0,0,0,1)',
        borderWidth: 2,
        data: newCasesData,
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
        }}
      />
    </div>
  );
};
export default MonthDeathChart;
