<template>
    <div class="max-w-md mx-auto p-4 bg-green-600 shadow-lg rounded-lg">
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
            data: [], // Initialize empty data for dynamic updates
          },
        ],
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
        const apiUrl =
          ' https://marketdata.tradermade.com/api/v1/historical?api_key=Jar60UU4VUxymHo0hdm2&currency=USDTMATIC,EUROMR,ALLUSDT,USDTWD,ALLBUSD,ALLEUR,ALLLBP,ALLXAG,AVAXXTZ&date=2024-11-24';
  
        try {
          const response = await fetch(apiUrl);
          const data = await response.json();
  
          // Log the API response to the console
          console.log('API Response:', data);
  
          // Process and filter valid candlestick data
          const formattedData = data.quotes
            .filter((quote) => !quote.error && quote.open && quote.high && quote.low && quote.close)
            .map((quote) => ({
              x: new Date(data.date), // Use the date from the API response
              y: [quote.open, quote.high, quote.low, quote.close],
            }));
  
          // Update the chart series dynamically
          this.series = [{ data: formattedData }];
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      },
    },
  
    mounted() {
      this.fetchData();
    },
  };
  </script>
  
  <style>
  /* Optional styling */
  </style>.