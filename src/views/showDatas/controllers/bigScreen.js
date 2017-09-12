import { mapState } from 'vuex'
let runTime
export default {
  data() {
    return {
      domAbc: '',
      loading: true,
      big: false,
      popText: false,
      infoTog: false,
      yAxisName: '人数',
      infoNub: 4,
      infoWrakHeight: '',
      infoContentHeight: '',
      infoData: [],
      // 切换时间
      setTime: 10000,
      translateY: 'translateY(0px)',
      trendTit: {
        titText: '注册用户近七日趋势对比',
        titTime: '(2017/7/31 - 2017/8/6)'
      },
      time: {
        day: '',
        hour: '',
        minute: '',
        month: '',
        second: '',
        week: '',
        year: ''
      },
      // 累计
      TotalInfo: {
        regsTotal: '0',      // 注册用户累计
        pvTotal: '0',        // 页面浏览量累计
        uvTotal: '0',        // 独立访客数累计
        wxfansTotal: '0',    // 微信粉丝净增累计
        activesTotal: '0',   // 日活跃用户累计
      },
      // 昨日数据
      yesterdayInfo: {
        date: '',           // 数据时间        
        regs: '',           // 注册用户
        pv: '',             // 页面浏览量
        uv: '',             // 独立访客数
        wxfans: '',         // 微信粉丝净增
        actives: '',        // 日活跃用户
      },
      // 资讯信息
      information: {
        time: '',       // 资讯发布时间
        title: '',      // 资讯标题
        content: ''     // 资讯内容
      },
      // titIconToggle
      titIconTog: {
        regs: true,
        pv: false,
        uv: false,
        wxfans: false,
        actives: false
      },
      // trend
      trendRegister: {
        titleShow: false,
        titleText: '注册用户周期趋势对比',
        titleTextColor: '#fff',
        titleFontSize: 12,
        gridTop: '30%',
        gridLeft: '10%',
        gridRight: '2%',
        gridBottom: '10%',
        legendShow: false,
        legendOneName: '上周期',
        legendOneIcon: 'rect',
        legendTwoName: '本周期',
        legendTwoIcon: 'rect',
        legendThreeName: '每日环比',
        legendColor: '#fff',
        legendFontSize: 16,
        legendSelected: { '上周期': false, '本周期': true, '每日环比': false },
        xAxisShow: true,
        xAxisType: 'category',
        xAxisData: ['7/31周一', '8/1周二', '8/2周三', '8/3周四', '8/4周五', '8/5周六', '8/6周日'],
        xAxisAxisLabelColor: '#686d77',
        xAxisAxisLabelFontSize: 16,
        yAxisAxisLabelColor: '#686d77',
        yAxisAxisLabelFontSize: 16,
        yAxisLineShow: true,
        seriesTwoData: [10, 20, 5, 30, 20, 10, 4],
        seriesTwoItemColor: '#ffd300',
        seriesBarWidht: '36%',
        seriesLabel: true,
        seriesLabelFontSize: 20
      },
      trendRegisterLine: {
        titleShow: false,
        titleText: '注册用户周期趋势对比',
        titleTextColor: '#fff',
        titleFontSize: 16,
        gridTop: '20%',
        gridLeft: '10%',
        gridRight: '2%',
        gridBottom: '15%',
        legendShow: false,
        legendOneName: '上周期',
        legendOneIcon: 'rect',
        legendTwoName: '本周期',
        legendTwoIcon: 'rect',
        legendThreeName: '每日环比',
        legendColor: '#fff',
        legendFontSize: 12,
        legendSelected: { '上周期': false, '本周期': false, '每日环比': true },
        xAxisShow: false,
        xAxisType: 'category',
        xAxisData: ['7/31周一', '8/1周二', '8/2周三', '8/3周四', '8/4周五', '8/5周六', '8/6周日'],
        xAxisAxisLabelColor: '#686d77',
        xAxisAxisLabelFontSize: 16,
        yAxisAxisLabelColor: '#686d77',
        yAxisAxisLabelFontSize: 16,
        yAxisLineShow: true,
        seriesThreeData: [-50, 50, -75, 83, -50, -50, -150],
        seriesThreeColor: '#ffd300',
        seriesBarWidht: '40%',
        seriesLabel: true,
        seriesLabelFontSize: 20
      },
      trendRegisterData: {
        xAxisData: [],
        seriesTwoData: []
      },
      trendRegisterLineData: {
        seriesThreeData: []
      },
      trendtBrowseData: {
        xAxisData: [],
        seriesTwoData: []
      },
      trendtBrowseLineData: {
        seriesThreeData: []
      },
      trendtIndependentData: {
        xAxisData: [],
        seriesTwoData: []
      },
      trendtIndependentLineData: {
        seriesThreeData: []
      },
      trendtWeixinData: {
        xAxisData: [],
        seriesTwoData: []
      },
      trendtWeixinLineData: {
        seriesThreeData: []
      },
      trendtActiveData: {
        xAxisData: [],
        seriesTwoData: []
      },
      trendtActiveLineData: {
        seriesThreeData: []
      },
      // contrast
      contrastRegisterData: {
        titleShow: true,
        titleText: '注册用户周期趋势对比',
        titleTextColor: '#fff',
        titleFontSize: 16,
        gridTop: '25%',
        gridLeft: '16%',
        gridRight: '2%',
        gridBottom: '10%',
        legendShow: true,
        legendOneName: '上周期',
        legendOneIcon: 'rect',
        legendTwoName: '本周期',
        legendTwoIcon: 'rect',
        legendThreeName: '每日环比',
        legendColor: '#fff',
        legendFontSize: 12,
        legendSelected: { '上周期': true, '本周期': true, '每日环比': false },
        xAxisShow: true,
        xAxisType: 'category',
        xAxisData: ['周一', '周二', '周三', '周四', '周五', '周六', '周日'],
        xAxisAxisLabelColor: '#686d77',
        xAxisAxisLabelFontSize: 12,
        yAxisAxisLabelColor: '#686d77',
        yAxisAxisLabelFontSize: 12,
        yAxisLineShow: false,
        seriesOneData: [30000, 20, 300, 258, 580, 1000, 10],
        seriesOneItemColor: '#81700e',
        seriesTwoData: [10, 500, 1000, 1278, 12, 60, 25],
        seriesTwoItemColor: '#ffd300',
        seriesBarWidht: '25%'
      },
      contrastBrowseData: {
        titleShow: true,
        titleText: '页面浏览量周期趋势对比',
        titleTextColor: '#fff',
        titleFontSize: 16,
        gridTop: '25%',
        gridLeft: '16%',
        gridRight: '2%',
        gridBottom: '10%',
        legendShow: true,
        legendOneName: '上周期',
        legendOneIcon: 'rect',
        legendTwoName: '本周期',
        legendTwoIcon: 'rect',
        legendThreeName: '每日环比',
        legendColor: '#fff',
        legendFontSize: 12,
        legendSelected: { '上周期': true, '本周期': true, '每日环比': false },
        xAxisShow: true,
        xAxisType: 'category',
        xAxisData: ['周一', '周二', '周三', '周四', '周五', '周六', '周日'],
        xAxisAxisLabelColor: '#686d77',
        xAxisAxisLabelFontSize: 12,
        yAxisAxisLabelColor: '#686d77',
        yAxisAxisLabelFontSize: 12,
        yAxisLineShow: false,
        seriesOneData: [3, 10, 7, 10, 10, 23, 35],
        seriesOneItemColor: '#1D5C73',
        seriesTwoData: [10, 5, 4, 20, 12, 60, 25],
        seriesTwoItemColor: '#37ACCA',
        seriesBarWidht: '25%'
      },
      contrastIndependentData: {
        titleShow: true,
        titleText: '独立访客周期趋势对比',
        titleTextColor: '#fff',
        titleFontSize: 16,
        gridTop: '25%',
        gridLeft: '16%',
        gridRight: '2%',
        gridBottom: '10%',
        legendShow: true,
        legendOneName: '上周期',
        legendOneIcon: 'rect',
        legendTwoName: '本周期',
        legendTwoIcon: 'rect',
        legendThreeName: '每日环比',
        legendColor: '#fff',
        legendFontSize: 12,
        legendSelected: { '上周期': true, '本周期': true, '每日环比': false },
        xAxisShow: true,
        xAxisType: 'category',
        xAxisData: ['周一', '周二', '周三', '周四', '周五', '周六', '周日'],
        xAxisAxisLabelColor: '#686d77',
        xAxisAxisLabelFontSize: 12,
        yAxisAxisLabelColor: '#686d77',
        yAxisAxisLabelFontSize: 12,
        yAxisLineShow: false,
        seriesOneData: [3, 10, 7, 10, 10, 23, 35],
        seriesOneItemColor: '#6C2552',
        seriesTwoData: [10, 5, 4, 20, 12, 60, 25],
        seriesTwoItemColor: '#D53D87',
        seriesBarWidht: '25%'
      },
      contrastWeixinData: {
        titleShow: true,
        titleText: '微信粉丝净增周期趋势对比',
        titleTextColor: '#fff',
        titleFontSize: 16,
        gridTop: '25%',
        gridLeft: '16%',
        gridRight: '2%',
        gridBottom: '10%',
        legendShow: true,
        legendOneName: '上周期',
        legendOneIcon: 'rect',
        legendTwoName: '本周期',
        legendTwoIcon: 'rect',
        legendThreeName: '每日环比',
        legendColor: '#fff',
        legendFontSize: 12,
        legendSelected: { '上周期': true, '本周期': true, '每日环比': false },
        xAxisShow: true,
        xAxisType: 'category',
        xAxisData: ['周一', '周二', '周三', '周四', '周五', '周六', '周日'],
        xAxisAxisLabelColor: '#686d77',
        xAxisAxisLabelFontSize: 12,
        yAxisAxisLabelColor: '#686d77',
        yAxisAxisLabelFontSize: 12,
        yAxisLineShow: false,
        seriesOneData: [3, 10, 7, 10, 10, 23, 35],
        seriesOneItemColor: '#166C4E',
        seriesTwoData: [10, 5, 4, 20, 12, 60, 25],
        seriesTwoItemColor: '#28CC7F',
        seriesBarWidht: '25%'
      },
      contrastActiveData: {
        titleShow: true,
        titleText: '日活跃用户周期趋势对比',
        titleTextColor: '#fff',
        titleFontSize: 16,
        gridTop: '25%',
        gridLeft: '16%',
        gridRight: '2%',
        gridBottom: '10%',
        legendShow: true,
        legendOneName: '上周期',
        legendOneIcon: 'rect',
        legendTwoName: '本周期',
        legendTwoIcon: 'rect',
        legendThreeName: '每日环比',
        legendColor: '#fff',
        legendFontSize: 12,
        legendSelected: { '上周期': true, '本周期': true, '每日环比': false },
        xAxisShow: true,
        xAxisType: 'category',
        xAxisData: ['周一', '周二', '周三', '周四', '周五', '周六', '周日'],
        xAxisAxisLabelColor: '#686d77',
        xAxisAxisLabelFontSize: 12,
        yAxisAxisLabelColor: '#686d77',
        yAxisAxisLabelFontSize: 12,
        yAxisLineShow: false,
        seriesOneData: [3, 10, 7, 10, 10, 23, 35],
        seriesOneItemColor: '#30407F',
        seriesTwoData: [10, 5, 4, 20, 12, 60, 25],
        seriesTwoItemColor: '#5C74E2',
        seriesBarWidht: '25%'
      }
    }
  },
  computed: {
    ...mapState({
      bigScreenLists: state => state.bigScreenStore.bigScreenLists
    })
  },
  watch: {
    bigScreenLists: function (val, oldVal) {
      if (val !== null) {
        this.time.day = val.nowTime.day
        this.time.hour = val.nowTime.hour
        this.time.minute = val.nowTime.minute
        this.time.month = val.nowTime.month
        this.time.second = val.nowTime.second
        this.time.week = val.nowTime.week
        this.time.year = val.nowTime.year
        this.loading = false
        this.big = true
        this.popText = false

        this.infoData = val.information

        this.TotalInfoFn(val.countData)
        this.yesterdayInfoFn(val.yesterdayInfo)
        this.informationFn(val.information)
        this.intervaFn(val.intervalDate)
        // 本周对比
        this.trendtRegFn(val.day1contrast.contrast_regs)
        this.trendtPvFn(val.day1contrast.contrast_pv)
        this.trendtUvFn(val.day1contrast.contrast_uv)
        this.trendtWxFn(val.day1contrast.contrast_wxfans)
        this.trendtActiveFn(val.day1contrast.contrast_actives)
        // 近七日对比
        this.contrastRegFn(val.day7contrast.contrast_regs)
        this.contrastPvFn(val.day7contrast.contrast_pv)
        this.contrastUvFn(val.day7contrast.contrast_uv)
        this.contrastWxFn(val.day7contrast.contrast_wxfans)
        this.contrastActiveFn(val.day7contrast.contrast_actives)
        // 切换
        this.toggleFn()
      } else {
        this.loading = false
        this.big = false
        this.popText = true
      }
    }
  },
  created() {
    // 首先我们以1920的宽度为标准，在这里我们要算出我们字体大小在这样的屏幕宽度下占的比例是多少
    // titleFontSize: 12
    let trendProportionTitleFontSize = 12 / 1920
    let trendProportionLegendFontSize = 12 / 1920
    let trendProportionXAxisAxisLabelFontSize = 16 / 1920
    let trendProportionYAxisAxisLabelFontSize = 16 / 1920
    let trendProportionSeriesLabelFontSize = 20 / 1920
    let trendLineProportionTitleFontSize = 16 / 1920
    let trendLineProportionLegendFontSize = 12 / 1920
    let trendLineProportionXAxisAxisLabelFontSize = 16 / 1920
    let trendLineProportionYAxisAxisLabelFontSize = 16 / 1920
    let trendLineProportionSeriesLabelFontSize = 20 / 1920
    let dataProportionTitleFontSize = 18 / 1920
    let dataProportionLegendFontSize = 12 / 1920
    let dataProportionXAxisAxisLabelFontSize = 12 / 1920
    let dataProportionYAxisAxisLabelFontSize = 13 / 1920
    // 拿到当前设备的宽度 通过当前设备的宽度算出响应的宽高等字体大小
    let screenWidth = screen.width
    this.trendRegister.titleFontSize = trendProportionTitleFontSize * screenWidth
    this.trendRegister.legendFontSize = trendProportionLegendFontSize * screenWidth
    this.trendRegister.xAxisAxisLabelFontSize = trendProportionXAxisAxisLabelFontSize * screenWidth
    this.trendRegister.yAxisAxisLabelFontSize = trendProportionYAxisAxisLabelFontSize * screenWidth
    this.trendRegister.seriesLabelFontSize = trendProportionSeriesLabelFontSize * screenWidth
    this.trendRegisterLine.titleFontSize = trendLineProportionTitleFontSize * screenWidth
    this.trendRegisterLine.legendFontSize = trendLineProportionLegendFontSize * screenWidth
    this.trendRegisterLine.xAxisAxisLabelFontSize = trendLineProportionXAxisAxisLabelFontSize * screenWidth
    this.trendRegisterLine.yAxisAxisLabelFontSize = trendLineProportionYAxisAxisLabelFontSize * screenWidth
    this.trendRegisterLine.seriesLabelFontSize = trendLineProportionSeriesLabelFontSize * screenWidth
    this.contrastRegisterData.titleFontSize = dataProportionTitleFontSize * screenWidth
    this.contrastRegisterData.legendFontSize = dataProportionLegendFontSize * screenWidth
    this.contrastRegisterData.xAxisAxisLabelFontSize = dataProportionXAxisAxisLabelFontSize * screenWidth
    this.contrastRegisterData.yAxisAxisLabelFontSize = dataProportionYAxisAxisLabelFontSize * screenWidth
    this.contrastBrowseData.titleFontSize = dataProportionTitleFontSize * screenWidth
    this.contrastBrowseData.legendFontSize = dataProportionLegendFontSize * screenWidth
    this.contrastBrowseData.xAxisAxisLabelFontSize = dataProportionXAxisAxisLabelFontSize * screenWidth
    this.contrastBrowseData.yAxisAxisLabelFontSize = dataProportionYAxisAxisLabelFontSize * screenWidth
    this.contrastIndependentData.titleFontSize = dataProportionTitleFontSize * screenWidth
    this.contrastIndependentData.legendFontSize = dataProportionLegendFontSize * screenWidth
    this.contrastIndependentData.xAxisAxisLabelFontSize = dataProportionXAxisAxisLabelFontSize * screenWidth
    this.contrastIndependentData.yAxisAxisLabelFontSize = dataProportionYAxisAxisLabelFontSize * screenWidth
    this.contrastWeixinData.titleFontSize = dataProportionTitleFontSize * screenWidth
    this.contrastWeixinData.legendFontSize = dataProportionLegendFontSize * screenWidth
    this.contrastWeixinData.xAxisAxisLabelFontSize = dataProportionXAxisAxisLabelFontSize * screenWidth
    this.contrastWeixinData.yAxisAxisLabelFontSize = dataProportionYAxisAxisLabelFontSize * screenWidth
    this.contrastActiveData.titleFontSize = dataProportionTitleFontSize * screenWidth
    this.contrastActiveData.legendFontSize = dataProportionLegendFontSize * screenWidth
    this.contrastActiveData.xAxisAxisLabelFontSize = dataProportionXAxisAxisLabelFontSize * screenWidth
    this.contrastActiveData.yAxisAxisLabelFontSize = dataProportionYAxisAxisLabelFontSize * screenWidth
    this.$store.dispatch({
      type: 'getBigScreenData'
    })
  },
  mounted() {
    this.timeRun()
  },
  beforeUpdate() {
    // 获取咨询内容高度并作判读是否滚动内容
    this.$nextTick(() => {
      this.infoContentHeight = this.$refs.abc.offsetHeight
      this.infoWrakHeight = this.$refs.botRoll.offsetHeight
      this.domAbc = this.infoContentHeight - this.infoWrakHeight
    })
  },
  methods: {
    // timerun
    timeRun() {
      setInterval(() => {
        // 00：00 与 09：00 重新请求数据
        if (this.time.hour === 9 && this.time.minute === 0 && this.time.second === 0 || this.time.hour === 0 && this.time.minute === 0 && this.time.second === 0) {
          this.$store.dispatch({
            type: 'getBigScreenData'
          })
          return
        }
        if (this.time.second === 59) {
          this.time.second = '00'
          if (this.time.minute < 9) {
            this.time.minute++
            this.time.minute = `0${this.time.minute}`
          }
          else {
            this.time.minute++
          }
          if (this.time.minute === 59) {
            this.time.minute = '00'
            if (this.time.hour < 9) {
              this.time.hour++
              this.time.hour = `0${this.time.hour}`
            } else {
              this.time.hour++
            }
          }
          return
        } else {
          if (this.time.second < 9) {
            this.time.second++
            this.time.second = `0${this.time.second}`
            return
          }
          this.time.second++
        }
      }, 1000)
    },
    // 数据切换
    toggleFn() {
      let nub = 0
      let color = ['#ffd300', '#37ACCA', '#D53D87', '#28CC7F', '#5C74E2']
      let titData = ['注册用户近七日趋势对比', '页面浏览近七日趋势对比', '独立访客近七日趋势对比', '微信粉丝近七日趋势对比', '日活跃用户近七日趋势对比']
      let yAxisName = ['人数', '次数', '人次', '人数', '人数']
      setInterval(() => {
        nub++
        switch (nub) {
          case 0:
            this.changeData(color[nub], this.trendRegisterData.seriesTwoData, this.trendRegisterLineData.seriesThreeData, titData[nub], yAxisName[nub])
            this.titIconTog.actives = false
            this.titIconTog.regs = true
            break
          case 1:
            this.changeData(color[nub], this.trendtBrowseData.seriesTwoData, this.trendtBrowseLineData.seriesThreeData, titData[nub], yAxisName[nub])
            this.titIconTog.regs = false
            this.titIconTog.pv = true
            break
          case 2:
            this.changeData(color[nub], this.trendtIndependentData.seriesTwoData, this.trendtIndependentLineData.seriesThreeData, titData[nub], yAxisName[nub])
            this.titIconTog.pv = false
            this.titIconTog.uv = true
            break
          case 3:
            this.changeData(color[nub], this.trendtWeixinData.seriesTwoData, this.trendtWeixinLineData.seriesThreeData, titData[nub], yAxisName[nub])
            this.titIconTog.uv = false
            this.titIconTog.wxfans = true
            break
          case 4:
            this.changeData(color[nub], this.trendtActiveData.seriesTwoData, this.trendtActiveLineData.seriesThreeData, titData[nub], yAxisName[nub])
            this.titIconTog.wxfans = false
            this.titIconTog.actives = true
            nub = -1
            break
        }
      }, this.setTime)
    },
    changeData(color, twoData, threeData, titData, yAxisName) {
      this.trendRegisterLine.legendSelected = { '上周期': false, '本周期': false, '每日环比': false }
      this.trendRegister.seriesTwoItemColor = color
      this.trendRegister.seriesTwoData = twoData
      this.trendRegisterLine.seriesThreeData = threeData
      this.trendRegisterLine.seriesThreeColor = color
      this.trendTit.titText = titData
      this.yAxisName = yAxisName
      setTimeout(() => {
        this.trendRegisterLine.legendSelected = { '上周期': false, '本周期': false, '每日环比': true }
      }, 100)
    },
    // 累计
    TotalInfoFn(info) {
      this.TotalInfo.regsTotal = info.c_regs
      this.TotalInfo.pvTotal = info.c_pv
      this.TotalInfo.uvTotal = info.c_uv
      this.TotalInfo.wxfansTotal = info.c_wxfans
      this.TotalInfo.activesTotal = info.c_actives
    },
    // 昨日数据
    yesterdayInfoFn(info) {
      this.yesterdayInfo.date = info.date
      this.yesterdayInfo.regs = info.regs
      this.yesterdayInfo.pv = info.pv
      this.yesterdayInfo.uv = info.uv
      this.yesterdayInfo.wxfans = info.wxfans
      this.yesterdayInfo.actives = info.actives
    },
    // 资讯信息
    informationFn(info) {
      this.information.title = info[this.infoNub].title
      this.information.content = info[this.infoNub].content
      this.infoRoll()
    },
    // 资讯滚动
    infoRoll() {
      let rollNub = 0
      let timer
      if (this.domAbc >= 0) {
        timer = setInterval(() => {
          rollNub += 1
          this.translateY = 'translateY(-' + rollNub + 'px)'
          if (rollNub >= this.domAbc) {
            clearInterval(timer)
            this.infoRunFn()
          }
        }, 60)
      } else {
        this.infoRunFn()
      }
    },
    // 资讯切换
    infoRunFn() {
      runTime = setTimeout(() => {
        console.log(this.infoNub)
        this.infoNub--
        this.translateY = 'translateY(0px)'
        this.information.title = this.infoData[this.infoNub].title
        this.information.content = this.infoData[this.infoNub].content
        this.infoRoll()
        if (this.infoNub <= 0) {
          this.infoNub = this.infoData.length
        }
      }, 8000)
    },
    // 对比时间范围
    intervaFn(intervalDate) {
      this.trendTit.titTime = '(' + intervalDate.startDate.replace(/-/g, '/') + ' - ' + intervalDate.endDate.replace(/-/g, '/') + ')'
    },
    // 注册用户对比(本周期)
    trendtRegFn(datas) {
      this.trendRegister.seriesTwoData = []
      this.trendRegister.xAxisData = []
      this.trendRegisterLineData.seriesThreeData = []
      let dataTime
      for (let i = 7; i >= 1; i--) {
        dataTime = datas['data' + i].date_s.substring(5, 10).replace(/-/g, '/')
        this.trendRegister.xAxisData.push(dataTime + ' ' + datas['data' + i].week)         // 星期
        this.trendRegisterLineData.seriesThreeData.push(datas['data' + i].percent)         // 百分比
        this.trendRegisterData.seriesTwoData.push(datas['data' + i].value_s)               // 本周期
      }
      // 设置初始值
      this.trendRegister.seriesTwoData = this.trendRegisterData.seriesTwoData
      this.trendRegisterLine.seriesThreeData = this.trendRegisterLineData.seriesThreeData
    },
    // 页面浏览量对比(本周期)
    trendtPvFn(datas) {
      this.trendtBrowseLineData.seriesThreeData = []
      this.trendtBrowseData.seriesTwoData = []
      for (let i = 7; i >= 1; i--) {
        this.trendtBrowseLineData.seriesThreeData.push(datas['data' + i].percent)   // 百分比
        this.trendtBrowseData.seriesTwoData.push(datas['data' + i].value_s)         // 本周期
      }
    },
    // 独立访客对比(本周期)
    trendtUvFn(datas) {
      this.trendtIndependentLineData.seriesThreeData = []
      this.trendtIndependentData.seriesTwoData = []
      for (let i = 7; i >= 1; i--) {
        this.trendtIndependentLineData.seriesThreeData.push(datas['data' + i].percent)   // 百分比
        this.trendtIndependentData.seriesTwoData.push(datas['data' + i].value_s)         // 本周期
      }
    },
    // 微信粉丝对比(本周期)
    trendtWxFn(datas) {
      this.trendtWeixinLineData.seriesThreeData = []
      this.trendtWeixinData.seriesTwoData = []
      for (let i = 7; i >= 1; i--) {
        this.trendtWeixinLineData.seriesThreeData.push(datas['data' + i].percent)   // 百分比
        this.trendtWeixinData.seriesTwoData.push(datas['data' + i].value_s)         // 本周期
      }
    },
    // 日活跃用户对比(本周期)
    trendtActiveFn(datas) {
      this.trendtActiveLineData.seriesThreeData = []
      this.trendtActiveData.seriesTwoData = []
      for (let i = 7; i >= 1; i--) {
        this.trendtActiveLineData.seriesThreeData.push(datas['data' + i].percent)   // 百分比
        this.trendtActiveData.seriesTwoData.push(datas['data' + i].value_s)         // 本周期
      }
    },
    // 注册用户对比
    contrastRegFn(datas) {
      this.contrastRegisterData.xAxisData = []
      this.contrastRegisterData.seriesOneData = []
      this.contrastRegisterData.seriesTwoData = []
      for (let i = 7; i >= 1; i--) {
        this.contrastRegisterData.xAxisData.push(datas['data' + i].week)          // 星期
        this.contrastRegisterData.seriesOneData.push(datas['data' + i].value_c)   // 上周期
        this.contrastRegisterData.seriesTwoData.push(datas['data' + i].value_s)   // 本周期
      }
    },
    // 页面浏览量对比
    contrastPvFn(datas) {
      this.contrastBrowseData.xAxisData = []
      this.contrastBrowseData.seriesOneData = []
      this.contrastBrowseData.seriesTwoData = []
      for (let i = 7; i >= 1; i--) {
        this.contrastBrowseData.xAxisData.push(datas['data' + i].week)          // 星期
        this.contrastBrowseData.seriesOneData.push(datas['data' + i].value_c)   // 上周期
        this.contrastBrowseData.seriesTwoData.push(datas['data' + i].value_s)   // 本周期
      }
    },
    // 独立访客对比
    contrastUvFn(datas) {
      this.contrastIndependentData.xAxisData = []
      this.contrastIndependentData.seriesOneData = []
      this.contrastIndependentData.seriesTwoData = []
      for (let i = 7; i >= 1; i--) {
        this.contrastIndependentData.xAxisData.push(datas['data' + i].week)          // 星期
        this.contrastIndependentData.seriesOneData.push(datas['data' + i].value_c)   // 上周期
        this.contrastIndependentData.seriesTwoData.push(datas['data' + i].value_s)   // 本周期
      }
    },
    // 微信粉丝对比
    contrastWxFn(datas) {
      this.contrastWeixinData.xAxisData = []
      this.contrastWeixinData.seriesOneData = []
      this.contrastWeixinData.seriesTwoData = []
      for (let i = 7; i >= 1; i--) {
        this.contrastWeixinData.xAxisData.push(datas['data' + i].week)          // 星期
        this.contrastWeixinData.seriesOneData.push(datas['data' + i].value_c)   // 上周期
        this.contrastWeixinData.seriesTwoData.push(datas['data' + i].value_s)   // 本周期
      }
    },
    // 日活跃用户对比
    contrastActiveFn(datas) {
      this.contrastActiveData.xAxisData = []
      this.contrastActiveData.seriesOneData = []
      this.contrastActiveData.seriesTwoData = []
      for (let i = 7; i >= 1; i--) {
        this.contrastActiveData.xAxisData.push(datas['data' + i].week)          // 星期
        this.contrastActiveData.seriesOneData.push(datas['data' + i].value_c)   // 上周期
        this.contrastActiveData.seriesTwoData.push(datas['data' + i].value_s)   // 本周期
      }
    }
  }
}
