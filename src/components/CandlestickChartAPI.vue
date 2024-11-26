<template>
  <div>
    <div>
      <nav class="border border-black text-sm">
        <div class="flex justify-between items-center px-4 py-2">
          <!-- Left Section -->
          <div class="flex space-x-4">
            <a href="#" class="hover:underline">Market</a>
            <a href="#" class="hover:underline">Calendar</a>
            <a href="#" class="hover:underline">Tool</a>
            <a href="#" class="hover:underline">Forum</a>
            <a href="#" class="hover:underline">Blog</a>
            <a href="#" class="hover:underline">News flows</a>
            <a href="#" class="hover:underline">Education</a>
            <a href="#" class="hover:underline">Platform</a>
            <a href="#" class="hover:underline">Brokers</a>
          </div>
          <!-- Right Section -->
          <div>
            <a href="#" class="hover:underline">Login</a>
          </div>
        </div>
      </nav>

      <marquee behavior="slide" direction="left" onmouseover="this.stop();" onmouseout="this.start();">
        <div class="flex space-x-6 p-4 bg-white rounded shadow">
          <!-- Item 1 -->
          <div class="flex items-center space-x-2">
            <span class="font-medium text-gray-800"><img src="@/assets/img/EU.svg" alt="EU logo" class="w-4 h-4 inline">
            </span>
            <span class="font-semibold text-gray-900">495.32</span>
            <span class="text-green-500 font-medium">+3.00 (+0.61%)</span>
          </div>

          <!-- Item 2 -->
          <div class="flex items-center space-x-2">
            <span class="font-medium text-gray-800"><img src="@/assets/img/invesco.svg" alt="EU logo"
                class="w-4 h-4 inline"></span>
            <span class="font-semibold text-gray-900">421.14</span>
            <span class="text-red-500 font-medium">-2.64 (-0.62%)</span>
          </div>

          <!-- Item 3 -->
          <div class="flex items-center space-x-2">
            <span class="font-medium text-gray-800"><img src="@/assets/img/spdr-sandp500-etf-tr.svg" alt="EU logo"
                class="w-4 h-4 inline"></span>
            <span class="font-semibold text-gray-900">614.780</span>
            <span class="text-red-500 font-medium">-2.1700 (-0.35%)</span>
          </div>

          <!-- Item 4 -->
          <div class="flex items-center space-x-2">
            <span class="font-medium text-gray-800"><img src="@/assets/img/EU.svg" alt="EU logo"
                class="w-4 h-4 inline"></span>
            <span class="font-semibold text-gray-900">1.07946</span>
          </div>
          <!-- Item 5 -->
          <div class="flex items-center space-x-2">
            <span class="font-medium text-gray-800"><img src="@/assets/img/EU.svg" alt="EU logo" class="w-4 h-4 inline">
            </span>
            <span class="font-semibold text-gray-900">495.32</span>
            <span class="text-green-500 font-medium">+3.00 (+0.61%)</span>
          </div>

          <!-- Item 6 -->
          <div class="flex items-center space-x-2">
            <span class="font-medium text-gray-800"><img src="@/assets/img/invesco.svg" alt="EU logo"
                class="w-4 h-4 inline"></span>
            <span class="font-semibold text-gray-900">421.14</span>
            <span class="text-red-500 font-medium">-2.64 (-0.62%)</span>
          </div>

          <!-- Item 7 -->
          <div class="flex items-center space-x-2">
            <span class="font-medium text-gray-800"><img src="@/assets/img/spdr-sandp500-etf-tr.svg" alt="EU logo"
                class="w-4 h-4 inline"></span>
            <span class="font-semibold text-gray-900">614.780</span>
            <span class="text-red-500 font-medium">-2.1700 (-0.35%)</span>
          </div>

          <!-- Item 8 -->
          <div class="flex items-center space-x-2">
            <span class="font-medium text-gray-800"><img src="@/assets/img/EU.svg" alt="EU logo"
                class="w-4 h-4 inline"></span>
            <span class="font-semibold text-gray-900">1.07946</span>
          </div>

          <!-- Item 9 -->
          <div class="flex items-center space-x-2">
            <span class="font-medium text-gray-800"><img src="@/assets/img/spdr-sandp500-etf-tr.svg" alt="EU logo"
                class="w-4 h-4 inline"></span>
            <span class="font-semibold text-gray-900">614.780</span>
            <span class="text-red-500 font-medium">-2.1700 (-0.35%)</span>
          </div>

          <!-- Item 10 -->
          <div class="flex items-center space-x-2">
            <span class="font-medium text-gray-800"><img src="@/assets/img/EU.svg" alt="EU logo"
                class="w-4 h-4 inline"></span>
            <span class="font-semibold text-gray-900">1.07946</span>
          </div>
        </div>
      </marquee>
    </div>

    <div class="inline-flex justify-left border border-black bg-yellow-300 divide-x divide-black text-black font-bold">
      <div class="px-4 py-2 hover:bg-yellow-500 cursor-pointer">Forex</div>
      <div class="px-4 py-2 hover:bg-yellow-500 cursor-pointer">Indices</div>
      <div class="px-4 py-2 hover:bg-yellow-500 cursor-pointer">Crypto</div>
      <div class="px-4 py-2 hover:bg-yellow-500 cursor-pointer">Stocks</div>
      <div class="px-4 py-2 hover:bg-yellow-500 cursor-pointer">Futures</div>
      <div class="px-4 py-2 hover:bg-yellow-500 cursor-pointer">ETFs</div>
      <div class="px-4 py-2 hover:bg-yellow-500 cursor-pointer">Bonds</div>
    </div>

    <div class="p-4 bg-white shadow mt-4">
      <div class="grid grid-cols-9 gap-4">
        <div class="rounded-lg border bg-gray-100">
          <div class="text-center pt-2"><span class="border p-1 bg-gray-50">EUR/USD</span></div>
          <div class="text-center pt-2"><small>1.06787 {{}}</small></div>
          <apexchart type="candlestick" :options="chartOptions" :series="series" />
          <div class="text-center pb-2"><small class="text-green-500">11</small></div>
          <div class="text-center pb-2"><small class="text-green-500">0.11%</small></div>
        </div>

        <div class="rounded-lg border bg-gray-100">
          <div class="text-center pt-2"><span class="border p-1 bg-gray-50">GBP/USD</span></div>
          <div class="text-center pt-2"><small>1.06787</small></div>
          <apexchart type="candlestick" :options="chartOptions" :series="series" />
          <div class="text-center pb-2"><small class="text-green-500">11</small></div>
          <div class="text-center pb-2"><small class="text-green-500">0.11%</small></div>
        </div>

        <div class="rounded-lg border bg-gray-100">
          <div class="text-center pt-2"><span class="border p-1 bg-gray-50">USD/JPY</span></div>
          <div class="text-center pt-2"><small>1.06787</small></div>
          <apexchart type="candlestick" :options="chartOptions" :series="series" />
          <div class="text-center pb-2"><small class="text-green-500">11</small></div>
          <div class="text-center pb-2"><small class="text-green-500">0.11%</small></div>
        </div>

        <div class="rounded-lg border bg-gray-100">
          <div class="text-center pt-2"><span class="border p-1 bg-gray-50">EUR/USD</span></div>
          <div class="text-center pt-2"><small>1.06787</small></div>
          <apexchart type="candlestick" :options="chartOptions" :series="series" />
          <div class="text-center pb-2"><small class="text-green-500">11</small></div>
          <div class="text-center pb-2"><small class="text-green-500">0.11%</small></div>
        </div>

        <div class="rounded-lg border bg-gray-100">
          <div class="text-center pt-2"><span class="border p-1 bg-gray-50">USD/CHF</span></div>
          <div class="text-center pt-2"><small>1.06787</small></div>
          <apexchart type="candlestick" :options="chartOptions" :series="series" />
          <div class="text-center pb-2"><small class="text-green-500">11</small></div>
          <div class="text-center pb-2"><small class="text-green-500">0.11%</small></div>
        </div>

        <div class="rounded-lg border bg-gray-100">
          <div class="text-center pt-2"><span class="border p-1 bg-gray-50">USD/CAD</span></div>
          <div class="text-center pt-2"><small>1.06787</small></div>
          <apexchart type="candlestick" :options="chartOptions" :series="series" />
          <div class="text-center pb-2"><small class="text-green-500">11</small></div>
          <div class="text-center pb-2"><small class="text-green-500">0.11%</small></div>
        </div>

        <div class="rounded-lg border bg-gray-100">
          <div class="text-center pt-2"><span class="border p-1 bg-gray-50">AUD/USD</span></div>
          <div class="text-center pt-2"><small>1.06787</small></div>
          <apexchart type="candlestick" :options="chartOptions" :series="series" />
          <div class="text-center pb-2"><small class="text-green-500">11</small></div>
          <div class="text-center pb-2"><small class="text-green-500">0.11%</small></div>
        </div>

        <div class="rounded-lg border bg-gray-100">
          <div class="text-center pt-2"><span class="border p-1 bg-gray-50">NZD/USD</span></div>
          <div class="text-center pt-2"><small>1.06787</small></div>
          <apexchart type="candlestick" :options="chartOptions" :series="series" />
          <div class="text-center pb-2"><small class="text-green-500">11</small></div>
          <div class="text-center pb-2"><small class="text-green-500">0.11%</small></div>
        </div>

        <div class="rounded-lg border bg-gray-100">
          <div class="text-center pt-2"><span class="border p-1 bg-gray-50">GBP/JPY</span></div>
          <div class="text-center pt-2"><small>1.06787</small></div>
          <apexchart type="candlestick" :options="chartOptions" :series="series" />
          <div class="text-center pb-2"><small class="text-green-500">11</small></div>
          <div class="text-center pb-2"><small class="text-green-500">0.11%</small></div>
        </div>
      </div>
    </div>

    <!-- Table Section -->
    <div class="mx-auto mt-8 p-4 bg-white shadow-md rounded-md">
      <h2 class="text-2xl font-bold mb-4">Today: Nov 26</h2>

      <!-- Responsive Table -->
      <div class="overflow-x-auto">
        <table class="w-full border-collapse border border-gray-300 text-sm">
          <!-- Table Header -->
          <thead class="bg-gray-200">
            <tr>
              <th class="border p-2 text-left">Date</th>
              <th class="border p-2 text-left">Time</th>
              <th class="border p-2 text-left">Currency</th>
              <th class="border p-2 text-left">Impact</th>
              <th class="border p-2 text-left">Detail</th>
              <th class="border p-2 text-center">Actual</th>
              <th class="border p-2 text-center">Forecast</th>
              <th class="border p-2 text-center">Previous</th>
            </tr>
          </thead>
          <!-- Table Body -->
          <tbody>
            <!-- Sample Row -->
            <tr>
              <td class="border p-2">Nov 25</td>
              <td class="border p-2">3:45am</td>
              <td class="border p-2">NZD</td>
              <td class="border p-2 text-center">
                <span class="text-yellow-500 font-bold">⚠️</span>
              </td>
              <td class="border p-2">Retail Sales q/q</td>
              <td class="border p-2 text-center text-green-500">-0.1%</td>
              <td class="border p-2 text-center text-gray-700">-0.5%</td>
              <td class="border p-2 text-center text-red-500">-1.2%</td>
            </tr>
            <!-- Additional Rows -->
            <tr>
              <td class="border p-2">Nov 25</td>
              <td class="border p-2">3:00pm</td>
              <td class="border p-2">EUR</td>
              <td class="border p-2 text-center">
                <span class="text-orange-500 font-bold">⚠️</span>
              </td>
              <td class="border p-2">German Ifo Business Climate</td>
              <td class="border p-2 text-center text-gray-700">86.1</td>
              <td class="border p-2 text-center text-gray-700">86.5</td>
              <td class="border p-2 text-center text-gray-700">85.9</td>
            </tr>
            <tr>
              <td class="border p-2">Nov 25</td>
              <td class="border p-2">4:30pm</td>
              <td class="border p-2">GBP</td>
              <td class="border p-2 text-center">
                <span class="text-yellow-500 font-bold">⚠️</span>
              </td>
              <td class="border p-2">MPC Member Dhingra Speaks</td>
              <td class="border p-2 text-center">-</td>
              <td class="border p-2 text-center">-</td>
              <td class="border p-2 text-center">-</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>


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
      currency: 'EURUSD',
      last_requested: null,

      chartOptions: {
        chart: {
          type: "candlestick",
          height: 350,
          toolbar: {
            show: false,
          },
        },
        xaxis: {
          type: "datetime",
          labels: {
            show: false, // Hide x-axis labels
          },
          axisTicks: {
            show: false, // Hide x-axis ticks
          },
          axisBorder: {
            show: false, // Hide x-axis border
          },
        },
        yaxis: {
          // tooltip: {
          //   enabled: true,
          // },
          labels: {
            show: false, // Hide y-axis labels
          },
        },
        grid: {
          show: false, // Hide gridlines
        },
      },

      // chartOptions: {
      //   chart: {
      //     type: 'candlestick',
      //     height: 350,
      //   },
      //   title: {
      //     text: 'Candlestick Chart',
      //     align: 'left',
      //   },
      //   xaxis: {
      //     type: 'datetime',
      //   },
      //   yaxis: {
      //     tooltip: {
      //       enabled: true,
      //     },
      //   },
      // },
    };
  },

  methods: {
    // 'https://marketdata.tradermade.com/api/v1/timeseries?api_key=fyBVOVMJLKetLiIlzdwd&currency=USDEUR&format=index&start_date=2024-10-25-10:00&end_date=2024-11-25-05:00&interval=hourly&period=24'

    async fetchData() {
      const apiUrl = `https://marketdata.tradermade.com/api/v1/timeseries?api_key=fyBVOVMJLKetLiIlzdwd&currency=${this.currency}&format=index&start_date=2024-11-24-10:00&end_date=2024-11-25-05:00&interval=minute&period=30`

      try {
        const response = await fetch(apiUrl);
        const data = await response.json();

        // Log the API response to the console
        console.log('API Response:', data);
        const quotes = Object.values(data.quotes)
        console.log(quotes)
        const formattedData = quotes.filter(quote => quote?.open && quote?.date && quote?.high && quote?.low && quote?.close).map(q => {
          return {
            x: new Date(q.date),
            y: [q.open, q.high, q.low, q.close]
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