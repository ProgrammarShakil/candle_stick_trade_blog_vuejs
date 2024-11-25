<template>
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


    <marquee behavior="" direction="">
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
    <div class="grid grid-cols-7 gap-4">

      <div class="rounded-lg border bg-gray-100">
        <div class="text-center pt-2"><span class="border p-1 bg-gray-50">EUR/USD</span></div>
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
        <div class="text-center pt-2"><span class="border p-1 bg-gray-50">EUR/USD</span></div>
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
        <div class="text-center pt-2"><span class="border p-1 bg-gray-50">EUR/USD</span></div>
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
        <div class="text-center pt-2"><span class="border p-1 bg-gray-50">EUR/USD</span></div>
        <div class="text-center pt-2"><small>1.06787</small></div>
        <apexchart type="candlestick" :options="chartOptions" :series="series" />
        <div class="text-center pb-2"><small class="text-green-500">11</small></div>
        <div class="text-center pb-2"><small class="text-green-500">0.11%</small></div>
      </div>
    </div>
  </div>
</template>

<script>
import apexchart from "vue3-apexcharts";

export default {
  components: { apexchart },
  data() {
    return {
      // Scanner data
      currencies: [
        { name: "EUR/USD", value: "1.09036", change: "+11" },
        { name: "GBP/USD", value: "1.29632", change: "-25" },
        { name: "USD/JPY", value: "151.803", change: "-32" },
        { name: "AUD/USD", value: "0.66001", change: "+2" },
        { name: "NZD/USD", value: "0.5988", change: "-7" },
      ],

      // Chart data
      series: [
        {
          data: [
            { x: new Date(1538778600000), y: [6629.81, 6650.5, 6623.04, 6633.33] },
            { x: new Date(1538782200000), y: [6632.01, 6643.59, 6620, 6630.11] },
            { x: new Date(1538785800000), y: [6630.71, 6648.95, 6623.34, 6635.65] },
            { x: new Date(1538789400000), y: [6635.65, 6651, 6629.67, 6638.24] },
            { x: new Date(1538793000000), y: [6638.24, 6640, 6620, 6624.47] },
            { x: new Date(1538796600000), y: [6624.53, 6636.03, 6621.68, 6624.31] },
            { x: new Date(1538800200000), y: [6624.61, 6632.2, 6617, 6626.02] },
            { x: new Date(1538803800000), y: [6627, 6638.89, 6623.44, 6632.01] },
            { x: new Date(1538807400000), y: [6632.15, 6640, 6624.61, 6628.16] },
            { x: new Date(1538811000000), y: [6628.16, 6632.61, 6618.17, 6626.02] },
          ],
        },
      ],
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
          labels: {
            show: false, // Hide y-axis labels
          },
        },
        grid: {
          show: false, // Hide gridlines
        },
      },
    };
  },
};
</script>

<style>
/* Optional styling */
</style>
