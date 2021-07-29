<template>
  <div>
    <div v-if="showMarketSpread" class="chart-container">
      <div class="filter-container">
        <el-button class="filter-item" type="primary" icon="el-icon-search" @click="dig">
          挖掘
        </el-button>
      </div>
      <div id="marketSpreadChart" :class="className" :style="{height:height,width:width}" />
    </div>
    <div v-if="showDetail" class="chart-container">
      <div class="filter-container">
        <el-button class="filter-item" type="primary" icon="el-icon-search" @click="back">
          返回
        </el-button>
      </div>
      <div detailId="detailChart" :class="className" :style="{height:height,width:width}" />
    </div>
  </div>
</template>

<script>
import echarts from 'echarts'

export default {
  mixins: [],
  props: {
    className: {
      type: String,
      default: 'chart'
    },
    id: {
      type: String,
      default: 'chart'
    }
  },
  data() {
    return {
      myChart: null,
      viewtype: 'view',
      width: '100%',
      height: '100%'
    }
  },
  computed: {
    showMarketSpread() {
      return this.viewtype === 'view'
    },
    showDetail() {
      return this.viewtype === 'detail'
    }
  },
  mounted() {
    this.initChart()
  },
  beforeDestroy() {
    if (!this.myChart) {
      return
    }
    this.myChart.dispose()
    this.myChart = null
  },
  methods: {
    dig() {
      this.viewtype = 'detail'
    },
    back() {
      this.viewtype = 'view'
    },
    initChart() {
      this.myChart = echarts.init(document.getElementById('marketSpreadChart'), null, { renderer: 'canvas' })

      var marketData = {
        xAxisData: [],
        yAxisData: [],
        quotData: [],
        matchSellData: [],
        matchBuyData: [],
        matchData: []
      }
      marketData.xAxisData = ['09:00:00', '09:00:01', '09:00:02', '09:00:03', '09:00:04', '09:00:05', '09:00:06', '09:00:07', '09:00:08', '09:00:09', '09:00:10', '09:00:11']
      marketData.yAxisData = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]
      marketData.quotData = [{ 'x': 0, 'y': 0, 'bsFalg': '1' },
        { 'x': 1, 'y': 0, 'bsFalg': '1' },
        { 'x': 1, 'y': 1, 'bsFalg': '1' },
        { 'x': 1, 'y': 2, 'bsFalg': '1' },
        { 'x': 2, 'y': 0, 'bsFalg': '1' },
        { 'x': 2, 'y': 1, 'bsFalg': '1' },
        { 'x': 2, 'y': 2, 'bsFalg': '3' },
        { 'x': 3, 'y': 1, 'bsFalg': '3' },
        { 'x': 3, 'y': 2, 'bsFalg': '3' },
        { 'x': 3, 'y': 3, 'bsFalg': '3' },
        { 'x': 4, 'y': 2, 'bsFalg': '3' },
        { 'x': 4, 'y': 3, 'bsFalg': '1' },
        { 'x': 4, 'y': 4, 'bsFalg': '1' },
        { 'x': 5, 'y': 2, 'bsFalg': '1' },
        { 'x': 5, 'y': 3, 'bsFalg': '1' },
        { 'x': 5, 'y': 4, 'bsFalg': '1' }]
      marketData.matchSellData = [{ 'x': 2, 'y': 0, 'alertTime': '09:00:01', 'matchQty': 100, 'scatterSize': 10 },
        { 'x': 3, 'y': 1, 'alertTime': '09:00:02', 'matchQty': 110, 'scatterSize': 20 },
        { 'x': 4, 'y': 2, 'alertTime': '09:00:03', 'matchQty': 110, 'scatterSize': 20 },
        { 'x': 1, 'y': 0, 'alertTime': '09:00:04', 'matchQty': 110, 'scatterSize': 20 },
        { 'x': 5, 'y': 2, 'alertTime': '09:00:05', 'matchQty': 110, 'scatterSize': 20 },
        { 'x': 6, 'y': 3, 'alertTime': '09:00:06', 'matchQty': 110, 'scatterSize': 20 },
        { 'x': 7, 'y': 4, 'alertTime': '09:00:07', 'matchQty': 100, 'scatterSize': 10 },
        { 'x': 8, 'y': 4, 'alertTime': '09:00:08', 'matchQty': 100, 'scatterSize': 10 },
        { 'x': 9, 'y': 4, 'alertTime': '09:00:09', 'matchQty': 100, 'scatterSize': 10 }]
      marketData.matchBuyData = [{ 'x': 2, 'y': 1, 'alertTime': '09:00:01', 'matchQty': 100, 'scatterSize': 10 },
        { 'x': 3, 'y': 2, 'alertTime': '09:00:02', 'matchQty': 110, 'scatterSize': 20 },
        { 'x': 4, 'y': 3, 'alertTime': '09:00:03', 'matchQty': 110, 'scatterSize': 20 },
        { 'x': 1, 'y': 1, 'alertTime': '09:00:04', 'matchQty': 110, 'scatterSize': 20 },
        { 'x': 5, 'y': 1, 'alertTime': '09:00:05', 'matchQty': 110, 'scatterSize': 20 },
        { 'x': 6, 'y': 2, 'alertTime': '09:00:06', 'matchQty': 110, 'scatterSize': 20 },
        { 'x': 7, 'y': 3, 'alertTime': '09:00:07', 'matchQty': 100, 'scatterSize': 10 },
        { 'x': 8, 'y': 3, 'alertTime': '09:00:08', 'matchQty': 100, 'scatterSize': 10 },
        { 'x': 9, 'y': 3, 'alertTime': '09:00:09', 'matchQty': 100, 'scatterSize': 10 }]
      marketData.matchData = [{ 'x': 1, 'y': 1, 'alertTime': '09:00:01', 'matchQty': 100, 'scatterSize': 10 },
        { 'x': 2, 'y': 2, 'alertTime': '09:00:02', 'matchQty': 110, 'scatterSize': 20 },
        { 'x': 3, 'y': 3, 'alertTime': '09:00:03', 'matchQty': 110, 'scatterSize': 20 },
        { 'x': 4, 'y': 1, 'alertTime': '09:00:04', 'matchQty': 110, 'scatterSize': 20 },
        { 'x': 5, 'y': 1, 'alertTime': '09:00:05', 'matchQty': 110, 'scatterSize': 20 },
        { 'x': 6, 'y': 2, 'alertTime': '09:00:06', 'matchQty': 110, 'scatterSize': 20 },
        { 'x': 7, 'y': 3, 'alertTime': '09:00:07', 'matchQty': 100, 'scatterSize': 10 },
        { 'x': 8, 'y': 3, 'alertTime': '09:00:08', 'matchQty': 100, 'scatterSize': 10 },
        { 'x': 9, 'y': 3, 'alertTime': '09:00:09', 'matchQty': 100, 'scatterSize': 10 }]
      var heatData = marketData.quotData.map(quot => [quot.x, quot.y, quot.bsFalg])

      var option = {
        grid: {
          show: true,
          backgroundColor: 'rgb(0, 0, 0)'
        },
        tooltip: {
          trigger: 'item',
          show: true
        },
        dataset: [
          {
            source: marketData.matchBuyData
          },
          {
            source: marketData.matchSellData
          },
          {
            source: marketData.matchData
          }
        ],
        legend: {
          data: ['买气泡', '卖气泡', '成交数据']
        },
        visualMap: [
          {
            type: 'piecewise',
            pieces: [
              { gte: 1, color: 'red' },
              { lte: -1, color: 'green' },
              { gt: -1, lt: 1, color: 'black' }
            ],
            seriesIndex: 0,
            show: false
          }
        ],
        xAxis: {
          type: 'category',
          data: marketData.xAxisData,
          splitArea: {
            show: false
          }
        },
        yAxis: {
          type: 'category',
          data: marketData.yAxisData,
          splitArea: {
            show: false
          }
        },
        dataZoom: [
          {
            type: 'slider',
            show: true,
            xAxisIndex: [0],
            start: 1,
            end: 100
          }
        ],
        series: [
          {
            id: 0,
            name: 'Punch Card',
            type: 'heatmap',
            data: heatData,
            label: {
              show: false
            },
            tooltip: {
              show: false
            }
          },
          {
            id: 1,
            name: '买气泡',
            symbolSize: function(data) {
              return data.scatterSize
            },
            type: 'scatter',
            itemStyle: {
              color: 'yellow'
            },
            encode: {
              x: 'x',
              y: 'y'
            },
            datasetIndex: 0,
            tooltip: {
              trigger: 'item',
              formatter: function(params) {
                return '成交主力：买<br/>' + '成交量：' + params.data.matchQty + ' （手） <br/>' + '成交时间窗口：' + params.data.alertTime
              }
            }
          },
          {
            id: 2,
            name: '卖气泡',
            symbolSize: function(data) {
              return data.scatterSize
            },
            type: 'scatter',
            itemStyle: {
              color: 'blue'
            },
            encode: {
              x: 'x',
              y: 'y'
            },
            datasetIndex: 1,
            tooltip: {
              trigger: 'item',
              formatter: function(params) {
                return '成交主力：卖<br/>' + '成交量：' + params.data.matchQty + ' （手） <br/>' + '成交时间窗口：' + params.data.alertTime
              }
            }
          },
          {
            id: 3,
            name: '成交数据',
            type: 'line',
            smooth: true,
            encode: {
              x: 'x',
              y: 'y'
            },
            datasetIndex: 2,
            tooltip: {
              show: false
            }
          }]
      }

      option && this.myChart.setOption(option)
      this.myChart.on('click', { seriesIndex: 1 }, function(params) {
        console.log('buy', params)
        alert('buy')
      })
      this.myChart.on('click', { seriesIndex: 2 }, function(params) {
        console.log('sell', params)
        alert('sell')
      })
    },
    getRndInteger(min, max) {
      return Math.floor(Math.random() * (max - min + 1)) + min
    }

  }
}
</script>

<style scoped>
.chart-container{
  position: relative;
  width: 100%;
  height: calc(100vh - 84px);
}
.filter-container {
    padding: 10px;
}
</style>

