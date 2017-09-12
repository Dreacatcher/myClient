// 引入基本模板
let echarts = require('echarts/lib/echarts')
// 引入柱状图组件
require('echarts/lib/chart/bar')
require('echarts/lib/chart/line')
// 引入提示框和title组件
require('echarts/lib/component/tooltip')
require('echarts/lib/component/title')
require('echarts/lib/component/legend')
let myChart
export default {
  props: {
    proId: {
      type: String
    },
    value: {
      type: Object
    }
  },
  data() {
    return {
      msg: 'holle',
      proEChartsData: this.value
    }
  },
  mounted() {
    this.drawLine()
  },
  watch: {
    proEChartsData: {
      handler: function (val, oldVal) {
        this.drawLine()
      },
      deep: true
    }
  },
  methods: {
    drawLine() {
      // 基于准备好的dom，初始化echarts实例
      myChart = echarts.init(document.getElementById(this.proId))
      // 绘制图表
      myChart.setOption({
        title: {
          show: this.proEChartsData.titleShow,
          text: this.proEChartsData.titleText,
          textStyle: {
            color: this.proEChartsData.titleTextColor,
            fontSize: this.proEChartsData.titleFontSize
          },
          left: '0'
        },
        grid: {
          top: this.proEChartsData.gridTop,
          left: this.proEChartsData.gridLeft,
          right: this.proEChartsData.gridRight,
          bottom: this.proEChartsData.gridBottom
        },
        legend: {
          show: this.proEChartsData.titleShow,
          selected: this.proEChartsData.legendSelected,
          data: [
            {
              name: this.proEChartsData.legendOneName,
              icon: this.proEChartsData.legendOneIcon
            },
            {
              name: this.proEChartsData.legendTwoName,
              icon: this.proEChartsData.legendTwoIcon
            }
          ],
          textStyle: {
            color: this.proEChartsData.legendColor,
            fontSize: this.proEChartsData.legendFontSize
          },
          right: '2%',
          orient: 'vertical',
          itemGap: 3,
          itemWidth: 12,
          itemHeight: 12,
          padding: 0,
          backgroundColor: 'rgba(128, 128, 128, 0)'
        },
        xAxis: [
          {
            show: this.proEChartsData.xAxisShow,
            type: 'category',
            data: this.proEChartsData.xAxisData,
            axisPointer: {
              type: 'shadow'
            },
            axisLabel: {
              textStyle: {
                color: this.proEChartsData.xAxisAxisLabelColor,
                fontSize: this.proEChartsData.xAxisAxisLabelFontSize
              }
            },
            axisTick: {
              show: false
            }
          }
        ],
        yAxis: [
          {
            type: 'value',
            nameTextStyle: {
              color: '#fff'
            },
            position: 'left',
            axisLabel: {
              textStyle: {
                color: this.proEChartsData.yAxisAxisLabelColor,
                fontSize: this.proEChartsData.yAxisAxisLabelFontSize
              }
            },
            axisLine: {
              show: false
            },
            axisTick: {
              show: false
            },
            splitLine: {
              show: true,
              lineStyle: {
                color: '#fff',
                opacity: 0.2
              }
            }
          },
          {
            type: 'value',
            position: 'right',
            axisLine: {
              show: false,
              lineStyle: {
                color: '#d14a61'
              }
            },
            axisLabel: {
              show: false
            },
            axisTick: {
              show: false
            },
            splitLine: {
              show: true,
              lineStyle: {
                color: '#fff',
                opacity: 0
              }
            }
          }
        ],
        series: [
          {
            name: this.proEChartsData.legendOneName,
            type: 'bar',
            yAxisIndex: 0,
            barGap: '20%',
            barWidth: this.proEChartsData.seriesBarWidht,
            data: this.proEChartsData.seriesOneData,
            itemStyle: {
              normal: {
                color: this.proEChartsData.seriesOneItemColor
              }
            },
            animationDuration: 1000
          },
          {
            name: this.proEChartsData.legendTwoName,
            type: 'bar',
            yAxisIndex: 0,
            barGap: '20%',
            barWidth: this.proEChartsData.seriesBarWidht,
            data: this.proEChartsData.seriesTwoData,
            itemStyle: {
              normal: {
                // color: 'red'
                color: this.proEChartsData.seriesTwoItemColor
              }
            },
            label: {
              normal: {
                show: this.proEChartsData.seriesLabel,
                position: 'top',
                textStyle: {
                  fontSize: this.proEChartsData.seriesLabelFontSize
                }
              }
            },
            animationDuration: 6000,
            animationDurationUpdate: 1000
          },
          {
            name: this.proEChartsData.legendThreeName,
            type: 'line',
            yAxisIndex: 1,
            data: this.proEChartsData.seriesThreeData,
            lineStyle: {
              normal: {
                color: this.proEChartsData.seriesThreeColor,
                opacity: 0.3
              }
            },
            itemStyle: {
              normal: {
                color: this.proEChartsData.seriesThreeColor,
                borderColor: '#202b33',
                borderWidth: 4
              }
            },
            label: {
              normal: {
                show: this.proEChartsData.seriesLabel,
                position: 'top',
                formatter: (v) => {
                  let data = this.proEChartsData.seriesThreeData
                  return data[v.dataIndex] + '%'
                },
                textStyle: {
                  fontSize: this.proEChartsData.seriesLabelFontSize
                }
              }
            },
            symbolSize: 16,
            symbol: 'circle',
            animationDuration: 2000
          }
        ]
      })
    }
  }
}
