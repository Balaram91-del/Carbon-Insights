<template>
  <div class="chart-container">
    <Bar
      id="my-chart-id"
      :options="chartOptions"
      :data="chartData"
    />
  </div>
</template>

<script>
import { useFootprintStore } from '@/stores/footprintStore'
import { Bar } from 'vue-chartjs'
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js'

ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale);

export default {
  name: 'BarChart',
  components: { Bar },
  setup() {
    const store = useFootprintStore();
    return { store };
  },
  data() {
    return {
      chartData: {
        labels: [
          'Your Carbon Footprint',
          'World Avg',
          'USA',
          'India',
          'China'
        ],
        datasets: [
          {
            label: 'CO₂ Emissions (tons per capita)',
            data: [this.store.totalEmission / 1000, 4.68, 14.4, 2.05, 9.40],
            backgroundColor: [
              '#36A2EB',
              '#9AD0F5',
              '#FF6384',
              '#4BC0C0',
              '#FFCE56'
            ],
            borderColor: [
              '#1E88E5',
              '#64B5F6',
              '#E91E63',
              '#009688',
              '#FDD835'
            ],
            borderWidth: 1,
            borderRadius: 8,
            barThickness: 50,
            hoverBackgroundColor: '#1f2937'
          }
        ]
      },
      chartOptions: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            labels: {
              color: '#333',
              font: {
                size: 14,
                family: 'Poppins, sans-serif'
              }
            }
          },
          title: {
            display: true,
            text: 'Carbon Footprint Comparison',
            color: '#111',
            font: {
              size: 18,
              weight: 'bold',
              family: 'Poppins, sans-serif'
            },
            padding: { top: 10, bottom: 30 }
          },
          tooltip: {
            backgroundColor: '#1f2937',
            titleColor: '#fff',
            bodyColor: '#fff',
            cornerRadius: 8
          }
        },
        scales: {
          x: {
            ticks: {
              color: '#444',
              font: {
                size: 13,
                family: 'Poppins, sans-serif'
              }
            },
            grid: {
              display: false
            }
          },
          y: {
            beginAtZero: true,
            ticks: {
              color: '#444',
              font: {
                size: 12,
                family: 'Poppins, sans-serif'
              }
            },
            grid: {
              color: 'rgba(0,0,0,0.1)'
            }
          }
        }
      }
    }
  }
}
</script>

<style scoped>
.chart-container {
  position: relative;
  width: 90%;
  max-width: 800px;
  height: 400px;
  margin: 2rem auto;
  background: #ffffff;
  padding: 20px;
  border-radius: 20px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
}
</style>
