import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

const EarningsChart = ({ isDarkMode }) => {
  const data = {
    labels: ['Platform Profit', 'GST / Tax', 'Operational Costs'],
    datasets: [
      {
        data: [72, 18, 10],
        backgroundColor: ['#0ceded', '#38bdf8', '#0f172a'],
        borderWidth: 0,
        hoverOffset: 20,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'bottom',
        labels: {
          color: isDarkMode ? '#94a3b8' : '#64748b',
          font: { family: "'Plus Jakarta Sans', sans-serif", weight: 'bold', size: 12 },
          padding: 20
        },
      },
    },
    cutout: '75%',
  };

  return <div className="h-[300px] w-full"><Doughnut data={data} options={options} /></div>;
};

export default EarningsChart;