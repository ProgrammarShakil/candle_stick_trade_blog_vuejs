<template>
  <div>
    <div>
      <nav class="bg-gray-800">
        <div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
          <div class="relative flex h-16 items-center justify-between">
            <div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
              <!-- Mobile menu button-->
              <button type="button"
                class="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                aria-controls="mobile-menu" aria-expanded="false">
                <span class="absolute -inset-0.5"></span>
                <span class="sr-only">Open main menu</span>
                <!--Icon when menu is closed. Menu open: "hidden", Menu closed: "block" -->
                <svg class="block size-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
                  aria-hidden="true" data-slot="icon">
                  <path stroke-linecap="round" stroke-linejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
                <!-- Icon when menu is open. Menu open: "block", Menu closed: "hidden"-->
                <svg class="hidden size-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
                  aria-hidden="true" data-slot="icon">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div class="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
              <div class="flex shrink-0 items-center">
                <img class="h-8 w-auto" src="https://tailwindui.com/plus/img/logos/mark.svg?color=indigo&shade=500"
                  alt="Your Company">
              </div>
              <div class="hidden sm:ml-6 sm:block">
                <div class="flex space-x-4">
                  <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" -->
                  <a href="#" class="rounded-md bg-gray-900 px-3 py-2 text-sm font-medium text-white"
                    aria-current="page">Market</a>
                  <a href="#"
                    class="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white">Calender</a>
                  <a href="#"
                    class="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white">Tool</a>
                  <a href="#"
                    class="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white">Forum</a>
                  <a href="#"
                    class="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white">Blog</a>
                  <a href="#"
                    class="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white">News
                    Flows</a>
                  <a href="#"
                    class="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white">Education</a>
                  <a href="#"
                    class="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white">Platform</a>
                  <a href="#"
                    class="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white">Brokers</a>
                </div>
              </div>
            </div>
            <div class="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">


              <a href="#" class="rounded-md bg-gray-900 px-3 py-2 text-sm font-medium text-white"
                aria-current="page">Login</a>
            </div>
          </div>
        </div>

        <!-- Mobile menu, show/hide based on menu state. -->
        <div class="sm:hidden" id="mobile-menu">
          <div class="space-y-1 px-2 pb-3 pt-2">
            <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" -->
            <a href="#" class="block rounded-md bg-gray-900 px-3 py-2 text-base font-medium text-white"
              aria-current="page">Dashboard</a>
            <a href="#"
              class="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white">Team</a>
            <a href="#"
              class="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white">Projects</a>
            <a href="#"
              class="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white">Calendar</a>
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
<!-- <button @click="fetchNews">Hello</button> -->
    <div v-if="!selectedDetails">
      <!-- TAB  -->
      <div class="flex justify-left border border-black bg-custom divide-x divide-black text-white font-bold">
        <div @click="changeTab('forex')" :class="selectedTab == 'forex' ? 'bg-gray-200 text-slate-900' : ''"
          class="px-4 py-2 hover:bg-custom-secondary cursor-pointer">Forex</div>
        <div class="px-4 py-2 hover:bg-custom-secondary cursor-pointer">Indices</div>
        <div @click="changeTab('crypto')" :class="selectedTab == 'crypto' ? 'bg-gray-200 text-slate-900' : ''"
          class="px-4 py-2 hover:bg-custom-secondary cursor-pointer">Crypto</div>
        <div @click="changeTab('stocks')" :class="selectedTab == 'stocks' ? 'bg-gray-200 text-slate-900' : ''"
          class="px-4 py-2 hover:bg-custom-secondary cursor-pointer">Stocks</div>
        <div class="px-4 py-2 hover:bg-custom-secondary cursor-pointer">Futures</div>
        <div class="px-4 py-2 hover:bg-custom-secondary cursor-pointer">ETFs</div>
        <div class="px-4 py-2 hover:bg-custom-secondary cursor-pointer">Bonds</div>
      </div>

      <!-- Candle Card  -->

      <carousel :items-to-show="7">
        <slide v-for="crncy in currency_details" :key="crncy?.base_currency + crncy?.quote_currency">
          <div class="rounded-lg border w-full mx-2 bg-custom-card">
            <div class="hover:cursor-pointer" @click="openDetails(crncy)">
              <div class="text-center pt-2"><span class="border p-1 bg-gray-50">{{ crncy?.base_currency }} / {{
                crncy?.quote_currency }}</span></div>
              <div class="text-center pt-2"><small>{{ crncy?.close }}</small></div>
              <apexchart v-if="crncy?.series && crncy?.series[0]?.data" type="candlestick" :options="chartOptions"
                :series="crncy?.series" />
              <div class="text-center pb-2"><small
                  :class="crncy?.close - crncy?.open > 0 ? 'text-green-500' : 'text-red-600'">{{ parseFloat(crncy?.close
                    -
                    crncy?.open).toFixed(3) }}</small></div>
              <div class="text-center pb-2"><small class="text-green-500">{{ getPercentChange(crncy.open, crncy.close)
                  }}
                  %</small></div>
              <div class="text-center mb-2"><button
                  class="border text-sm border-blue-500 text-custom hover:text-white font-semibold px-6 rounded-lg hover:bg-custom focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
                  Trade
                </button>
              </div>
            </div>
          </div>
        </slide>

        <template #addons>
          <navigation class="p-2" />
        </template>
      </carousel>
      <div id="container"></div>
    </div>



    <div v-else-if="selectedDetails" class="w-full">

      <div class="grid grid-cols-3 gap-8 mx-3">
        <div class="relative border col-span-2 w-full p-1 bg-gray-50">
          <apexchart v-if="selectedDetails?.series && selectedDetails?.series[0]?.data" type="candlestick"
            :options="chartOptions" :series="selectedDetails?.series" />
        </div>
        <div class="rounded-md p-2 bg-slate-50 border grid grid-cols-3">
          <div class="font-medium text-xl col-span-3 border-b border-slate-800">Details: <span class="font-semibold">{{
            selectedDetails?.base_currency }} / {{ selectedDetails?.quote_currency }}</span></div>
          <div class="font-semibold border-b">Open</div>
          <div class="col-span-2 border-b">{{ selectedDetails?.open }}</div>
          <div class="font-semibold border-b">Close</div>
          <div class="col-span-2 border-b">{{ selectedDetails?.close }}</div>
          <div class="font-semibold border-b">High</div>
          <div class="col-span-2 border-b text-green-600">{{ selectedDetails?.high }}</div>
          <div class="font-semibold border-b">Low</div>
          <div class="col-span-2 border-b text-yellow-600">{{ selectedDetails?.low }}</div>
          <div class="font-semibold border-b">Change Percentage</div>
          <div class="col-span-2 border-b text-yellow-600"
            :class="getPercentChange(selectedDetails?.open, selectedDetails?.close) >= 0 ? 'text-green-600' : 'text-yellow-600'">
            {{ getPercentChange(selectedDetails?.open, selectedDetails?.close) }} %</div>
          <div class="font-semibold border-b">Change</div>
          <div class="col-span-2 border-b text-yellow-600"
            :class="parseFloat(selectedDetails?.close - selectedDetails?.open) >= 0 ? 'text-green-600' : 'text-yellow-600'">
            {{ parseFloat(selectedDetails?.close - selectedDetails?.open).toFixed(3) }}</div>
          <div class="font-semibold border-b">Base Currency</div>
          <div class="col-span-2 border-b">{{ selectedDetails?.base_currency }}</div>
          <div class="font-semibold border-b">Quote Currency</div>
          <div class="col-span-2 border-b">{{ selectedDetails?.quote_currency }}</div>
        </div>
      </div>
      <button class="btn btn-sm border bg-custom text-white mt-4 ml-3 px-4 py-1 rounded"
        @click="openDetails(null)">Back</button>
    </div>

    <!-- Table Section -->
    <div class="mx-auto mt-8 p-4 bg-white shadow-md rounded-md">
      <div class="bg-custom flex justify-between items-center text-white">
        <div class="flex items-center px-2">
          <font-awesome-icon icon="arrow-left" class="text-sm hover:cursor-pointer" />
          <div class="font-bold px-2 py-1">Today: Nov 26</div>
          <font-awesome-icon icon="arrow-right" class="text-sm hover:cursor-pointer" />
        </div>
        <div class="flex items-center">
          <div class="px-2"><font-awesome-icon icon="arrow-right" class="text-sm hover:cursor-pointer" /> up next
          </div>
          <div class="px-2"><font-awesome-icon icon="search" class="text-sm hover:cursor-pointer" /> search events
          </div>
          <div class="px-2"><font-awesome-icon icon="filter" class="text-sm hover:cursor-pointer" /> filter</div>
        </div>
      </div>

      <!-- Responsive Table -->
      <div class="overflow-x-auto">
        <table class="w-full border-collapse border border-gray-300 text-sm">
          <!-- Table Header -->
          <thead class="bg-custom-secondary text-white">
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
                <span class="text-yellow-500 font-bold">
                  <font-awesome-icon icon="folder" />
                </span>
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
                <span class="text-orange-500 font-bold">
                  <font-awesome-icon icon="folder" style="color: red;" />
                </span>
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
                <span class="text-yellow-500 font-bold">
                  <font-awesome-icon icon="folder" style="color: #c5a33f;" />
                </span>
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
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide, Navigation } from 'vue3-carousel'
export default {
  components: { apexchart, Carousel, Slide, Navigation },
  data() {
    return {
      lastValue: 7,
      previousValue: 0,
      series: [
        {
          data: [],
        },
      ],
      news: [],
      selectedTab: 'forex',
      selectedDetails: null,
      currency_details: [],
      shown_currency_details: [],
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

      crypto_currencies: [
        "ETHUSDT",
        "BNBUSD",
        "BTCEUR",
        "ETHEUR",
        "BTCGBP",
        "ETHGBP",
        "XRPUSD",
        "ADAUSD",
        // "SOLUSD",
        // "LTCUSD",
        // "DOGEUSD",
        // "BNBUSDT",
        // "XRPUSDT",
        // "LTCUSDT",
        // "ADAUSDT",
        // "SOLUSDT",
        // "DOGEUSDT"
      ],
      currencies: [
        'EURUSD',
        'GBPUSD',
        'USDJPY',
        'USDCHF',
        'USDCAD',
        'AUDUSD',
        'NZDUSD',
        'GBPJPY'
      ],
      current_currencies: [],
      socket: null, // To hold the WebSocket instance
      isConnected: false, // WebSocket connection status
      messages: [],
    };
  },
  watch: {
    currency_details() {
      this.shown_currency_details = this.currency_details.slice(0, 7)
    }
  },
  methods: {

    async changeTab(tab) {
      this.selectedDetails = false
      this.currency_details = []
      this.selectedTab = tab
      let listStr = ''
      if (tab == 'forex') this.current_currencies = this.currencies
      else if (tab == 'crypto') this.current_currencies = this.crypto_currencies
      if (this.current_currencies.length) {
        for (let i = 0; i < this.current_currencies.length; i++) {
          listStr += this.current_currencies[i]
          if (i < this.current_currencies.length - 1) {
            listStr += ','
          }
        }
        listStr.slice(0, -1);
        console.log(listStr)
        await this.getCurrencyDetail(listStr)
      }


    },
    openDetails(currency) {
      this.selectedDetails = currency
      if(!currency) {
        this.disconnectWebSocket()
        return
      }
      if (currency && this.socket) {
        this.socket.send(
          JSON.stringify({ "userKey": "wsi2fI_hi0j0BqjCX4XA", "symbol": currency?.base_currency + currency?.quote_currency, })
        );
      }
    },
    connectWebSocket() {
      console.log('Creating New WS')
      // Create a new WebSocket connection
      this.socket = new WebSocket("wss://marketdata.tradermade.com/feedadv");

      // On successful connection
      this.socket.onopen = () => {
        console.log("WebSocket connection established.");
        this.isConnected = true;
      };
      // let time;
      // On receiving a message
      this.socket.onmessage = (event) => {
        // console.log("Received message:", event.data);
        let message;
        try {
          message = JSON.parse(event.data)
        } catch {
          message = event.data
        }
        // this.messages.push(message);
        if (message?.symbol && message?.bid && message?.ask) {
          // if(!time ){
          // console.log(time)
          // if(time) this.updateCandlestickChart(message);
          this.updateCandlestickChart(message);
          // time = parseInt(message.ts)

          // }
        }
      };

      // On connection error
      this.socket.onerror = (error) => {
        console.error("WebSocket error:", error);
      };

      // On connection close
      this.socket.onclose = (event) => {
        console.log("WebSocket connection closed:", event);
        this.isConnected = false;

        // Optionally, reconnect after a delay
        setTimeout(this.connectWebSocket, 500);
      };
    },
    updateCandlestickChart(data) {
      const midPrice = data.mid;
      if (this.selectedDetails && this.selectedDetails.high) {
        const prev = this.selectedDetails.high
        this.selectedDetails.high = Math.max(this.selectedDetails.series[0].data[this.selectedDetails.series[0].data.length - 1].y[1], midPrice);
        this.selectedDetails.low = Math.min(this.selectedDetails.series[0].data[this.selectedDetails.series[0].data.length - 1].y[2], midPrice);
        console.log('Changed from ', prev, ' to ', this.selectedDetails.high)
      }
    },

    getPercentChange(openPrice, closePrice) {
      // let  = 1.04767;
      // let  = 1.04677;

      // Calculate percentage change
      return (((closePrice - openPrice) / openPrice) * 100).toFixed(2);
    },
    disconnectWebSocket() {
      if (this.socket) {
        this.socket.close(); // Close the WebSocket connection
        this.socket = null;
        this.isConnected = false;
        console.log("WebSocket connection manually closed.");
      }
    },
    async fetchNews() {
      const response = await fetch('/api')
      const data = await response.json()
      console.log(data);
      this.news = data
    },
    // 'https://marketdata.tradermade.com/api/v1/timeseries?api_key=zMxSI__fZMW_uyu5HAfr&currency=USDEUR&format=index&start_date=2024-10-25-10:00&end_date=2024-11-25-05:00&interval=hourly&period=24'
    async getAllCurrencies() {
      try {
        const response = await fetch('https://marketdata.tradermade.com/api/v1/historical_currencies_list?api_key=Jar60UU4VUxymHo0hdm2')
        const data = await response.json();

        this.currencies = data?.available_currencies
        console.log(data);

      } catch (e) {
        console.log(e)
      }
    },
    async fetchData(currency) {
      const apiUrl = `https://marketdata.tradermade.com/api/v1/timeseries?api_key=Jar60UU4VUxymHo0hdm2&currency=${currency}&format=index&start_date=2024-11-24-10:00&end_date=2024-11-25-05:00&interval=minute&period=30`
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
        const item = this.currency_details.find(el => el?.base_currency == data?.base_currency && el?.quote_currency == data?.quote_currency);
        if (item) {
          // Update the chart series dynamically
          if (item?.series && item.series?.length && item?.series[0].data?.length) {
            item.series[0].data.push(formattedData)
          } else {
            item.series = [{ data: formattedData }];
          }
          this.currency_details = this.currency_details.map((el) => {
            if (el?.base_currency == data?.base_currency && el?.quote_currency == data?.quote_currency) return item;
            return el
          })
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    },
    async getCurrencyDetail(currency) {
      try {
        // const url = `https://marketdata.tradermade.com/api/v1/historical?api_key=zMxSI__fZMW_uyu5HAfr&currency=${currency}&date=${new Date().toISOString().split('T')[0]}`
        const url = `https://marketdata.tradermade.com/api/v1/historical?api_key=Jar60UU4VUxymHo0hdm2&currency=${currency}&date=${new Date().toLocaleDateString('en-CA')}`
        const response = await fetch(url);
        const data = await response.json();
        console.log(data)
        const quotes = data?.quotes.filter(item => !item?.error && item?.high && item?.low && item?.close && item?.open)
        this.currency_details = quotes
        console.log(this.currency_details)
        for (let i = 0; i < quotes.length; i++) {
          await this.fetchData(`${quotes[i].base_currency}${quotes[i].quote_currency}`)
        }

      } catch (e) {
        console.log(e);
      }
    },
  },

  async mounted() {
    if (this.selectedTab == 'forex') this.current_currencies = this.currencies
    else if (this.selectedTab == 'crypto') this.current_currencies = this.currencies
    let listStr = ''
    if (this.current_currencies.length) {
      for (let i = 0; i < this.current_currencies.length; i++) {
        listStr += this.current_currencies[i]
        if (i < this.current_currencies.length - 1) {
          listStr += ','
        }
      }
      listStr.slice(0, -1);
      console.log(listStr)
      await this.getCurrencyDetail(listStr)
    }
    this.fetchNews();
    this.connectWebSocket();
    // this.shown_currency_details = this.currency_details.slice(0, 7)
  },
  beforeUnmount() {
    // Ensure the WebSocket is closed when the component is destroyed
    this.disconnectWebSocket();
  },
};
</script>

<style>
/* Optional styling */
</style>.