<template>
    <div>
      <apexchart 
        type="candlestick" 
        :options="chartOptions" 
        :series="series"
      />
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
            data: [
              {
                x: new Date(1538778600000),
                y: [6629.81, 6650.5, 6623.04, 6633.33], // [open, high, low, close]
              },
              {
                x: new Date(1538782200000),
                y: [6632.01, 6643.59, 6620, 6630.11],
              },
              // Add more candlestick data here
            ],
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
  };
  </script>
  
  <style>
  /* Optional styling */
  </style>
  