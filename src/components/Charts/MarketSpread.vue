<template>
  <div :id="id" :class="className" :style="{height:height,width:width}" />
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
    },
    width: {
      type: String,
      default: '200px'
    },
    height: {
      type: String,
      default: '200px'
    }
  },
  data() {
    return {
      myChart: null
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
    initChart() {
      this.myChart = echarts.init(document.getElementById(this.id), null, { renderer: 'canvas' })

      var option

      var matchData = []
      var xAxisData = []
      var buyData = []
      var sellData = []
      for (let i = 0; i < 240; i++) {
        xAxisData.push(i)
        const p = this.getRndInteger(75, 125)
        matchData.push([i, p])
        buyData.push([i, p, this.getRndInteger(1, 20)])
        sellData.push([i, p - 5, this.getRndInteger(1, 20)])
      }
      var yAxisData = []
      for (let j = 100; j <= 300; j++) {
        yAxisData.push([j])
      }
      var bigData = []
      for (let i = 0; i < 240; i++) {
        for (let j = 50; j <= 150; j++) {
          if (matchData[i][1] < j) {
            bigData.push([i, j, 1])
          } else if (matchData[i][1] >= j) {
            bigData.push([i, j, -1])
          }
        }
      }

      option = {
        grid: {
          show: true,
          backgroundColor: 'rgb(0, 0, 0)'
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
          data: xAxisData,
          splitArea: {
            show: false
          }
        },
        yAxis: {
          type: 'category',
          data: yAxisData,
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
          },
          {
            type: 'slider',
            show: true,
            yAxisIndex: [0],
            left: '93%',
            start: 1,
            end: 100
          },
          {
            type: 'inside',
            xAxisIndex: [0],
            start: 1,
            end: 100
          },
          {
            type: 'inside',
            yAxisIndex: [0],
            start: 1,
            end: 100
          }
        ],
        series: [
          {
            id: 0,
            name: 'Punch Card',
            type: 'heatmap',
            data: bigData,
            label: {
              show: false
            }
          },
          {
            id: 1,
            symbolSize: function(data) {
              return data[2]
            },
            data: buyData,
            type: 'scatter',
            itemStyle: {
              color: 'yellow'
            }
          },
          {
            id: 2,
            symbolSize: function(data) {
              return data[2]
            },
            data: sellData,
            type: 'scatter',
            itemStyle: {
              color: 'blue'
            }
          },
          {
            id: 3,
            data: matchData,
            type: 'line',
            smooth: true
          }]
      }

      option && this.myChart.setOption(option)
    },
    getRndInteger(min, max) {
      return Math.floor(Math.random() * (max - min + 1)) + min
    }

  }
}
</script>
