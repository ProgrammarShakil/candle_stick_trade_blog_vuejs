<template>
  <div>
    <h2 class="text-lg font-semibold mb-4">Candlestick Chart</h2>
    <apexchart type="candlestick" :options="chartOptions" :series="series" />
  </div>
</template>

<script>
import apexchart from 'vue3-apexcharts';

export default {
  components: { apexchart },
  data() {
    return {
      series: [
        {
          data: [],
        },
      ],
      last_requested: null,
      chartOptions: {
        chart: {
          type: 'candlestick',
          height: 350,
        },
        title: {
          text: 'Candlestick Chart',
          align: 'left',
        },
        xaxis: {
          type: 'datetime',
        },
        yaxis: {
          tooltip: {
            enabled: true,
          },
        },
      },
    };
  },

  methods: {
    async fetchData() {
      const apiUrl = 'https://marketdata.tradermade.com/api/v1/timeseries?api_key=fyBVOVMJLKetLiIlzdwd&currency=USDEUR&format=index&start_date=2024-11-24-10:00&end_date=2024-11-25-05:00&interval=minute&period=30'
       'https://marketdata.tradermade.com/api/v1/timeseries?api_key=fyBVOVMJLKetLiIlzdwd&currency=USDEUR&format=index&start_date=2024-10-25-10:00&end_date=2024-11-25-05:00&interval=hourly&period=24'

      try {
        const response = await fetch(apiUrl);
        const data = await response.json();

        // Log the API response to the console
        console.log('API Response:', data);
        const quotes = Object.values(data.quotes)
        console.log(quotes)
        const formattedData = quotes.filter(quote=>quote?.open && quote?.date && quote?.high && quote?.low && quote?.close).map(q=>{
          return {
            x: new Date(q.date),
            y: [q.open,q.high,q.low,q.close]
          }
        })

        // Update the chart series dynamically
        if (this.series?.length && this?.series[0].data?.length) {
          this.series[0].data.push(formattedData)
        } else {
          this.series = [{ data: formattedData }];
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    },
  },

  mounted() {
    this.fetchData();
    // setInterval(() => {
    //   this.fetchData();
    // }, 10000)
  },
};
</script>

<style>
/* Optional styling */
</style>.