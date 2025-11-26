<template>
  <div class="chart-container">
    <Doughnut
      id="emission-doughnut-chart"
      :data="chartData"
      :options="chartOptions"
    />
  </div>
</template>

<script>
import { useFootprintStore } from '@/stores/footprintStore'
import { Doughnut } from 'vue-chartjs'
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  ArcElement
} from 'chart.js'
import { computed } from 'vue'

ChartJS.register(Title, Tooltip, Legend, ArcElement)

export default {
  name: 'DoughnutChart',
  components: { Doughnut },

  setup() {
    const store = useFootprintStore()

    // 🧮 Reactive total emission
    const totalEmission = computed(() => store.totalEmission)

    // 🎨 Reactive chart data
    const chartData = computed(() => ({
      labels: [
        'Flights',
        'Electricity',
        'Transport',
        'Pets',
        'Food',
        'Cooking Gas'
      ],
      datasets: [
        {
          label: 'Carbon Emissions (kg CO₂)',
          data: [
            store.flightEmission,
            store.electricityEmission,
            store.transportEmission,
            store.petEmission,
            store.foodEmission,
            store.cookingGasEmission
          ],
          backgroundColor: [
            '#36A2EB',
            '#FF6384',
            '#FFCE56',
            '#4BC0C0',
            '#9966FF',
            '#FF9F40'
          ],
          borderColor: '#fff',
          borderWidth: 2,
          hoverOffset: 12,
          cutout: '70%'
        }
      ]
    }))

    // 💬 Custom plugin for center text
    const centerTextPlugin = {
      id: 'centerText',
      afterDraw(chart) {
        const { ctx, chartArea: { width, height } } = chart
        ctx.save()
        ctx.font = 'bold 16px Poppins'
        ctx.fillStyle = '#111'
        ctx.textAlign = 'center'
        ctx.textBaseline = 'middle'
        ctx.fillText(
          `${totalEmission.value.toFixed(2)/1000} tons CO₂`,
          width / 2,
          height / 2
        )
      }
    }

    const chartOptions = {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          position: 'bottom',
          labels: {
            color: '#333',
            font: { size: 14, family: 'Poppins, sans-serif' },
            padding: 15
          }
        },
        title: {
          display: true,
          text: 'Carbon Emissions by Category',
          color: '#111',
          font: { size: 18, weight: 'bold', family: 'Poppins, sans-serif' },
          padding: { top: 10, bottom: 20 }
        },
        tooltip: {
          backgroundColor: '#1f2937',
          titleColor: '#fff',
          bodyColor: '#fff',
          cornerRadius: 8,
          callbacks: {
            label: function (context) {
              return `${context.label}: ${context.raw.toFixed(2)} kg CO₂`
            }
          }
        }
      }
    }

    // ✅ Register plugin (no need to import anything)
    ChartJS.register(centerTextPlugin)

    return { chartData, chartOptions }
  }
}
</script>

<style scoped>
.chart-container {
  position: relative;
  width: 90%;
  max-width: 600px;
  height: 400px;
  margin: 2rem auto;
  background: #fff;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
}
</style>
