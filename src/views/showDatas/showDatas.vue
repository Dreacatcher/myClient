<template>
  <div class="bigWarp">
    <div class="bigLoadingWarp" v-if="loading">
      <div class="bigloading">
        <img src="./img/loading.gif">
        <div class="pop" v-if="popText">加载错误,请联系技术人员！</div>
      </div>
    </div>
    <div class="big" v-if="big">
      <div class="bitTit">筑民生运营数据实时展示区</div>
      <div class="bigTop">
        <div class="bigTopLeft">
          <horn></horn>
          <div class="collectionTime">数据采集日期：{{yesterdayInfo.date}}</div>
          <div class="topReg">
            <div class="topRegLeft">
              <span class="icon-register bigIcon"></span>
            </div>
            <div class="topRegRight">
              <span class="topRegR_tit">注册用户</span>
              <span class="topRegR_mid">registered user</span>
              <div class="topRegR_bot">{{yesterdayInfo.regs}}<sub>人</sub></div>
              <span class="topRegR_lj">累计用户{{TotalInfo.regsTotal}}人</span>
            </div>
          </div>
          <div class="topReg">
            <div class="topRegLeft">
              <span class="icon-browse bigIcon"></span>
            </div>
            <div class="topRegRight">
              <span class="topRegR_tit">页面浏览量(PV)</span>
              <span class="topRegR_mid">page view</span>
              <div class="topRegR_bot">{{yesterdayInfo.pv}}<sub>次</sub></div>
              <span class="topRegR_lj">累计浏览量{{TotalInfo.pvTotal}}次</span>
            </div>
          </div>
          <div class="topReg">
            <div class="topRegLeft">
              <span class="icon-independent bigIcon"></span>
            </div>
            <div class="topRegRight">
              <span class="topRegR_tit">独立访客数(UV)</span>
              <span class="topRegR_mid">unique visitor</span>
              <div class="topRegR_bot">{{yesterdayInfo.uv}}<sub>人次</sub></div>
              <span class="topRegR_lj">累计访客数{{TotalInfo.uvTotal}}人</span>
            </div>
          </div>
          <div class="topReg">
            <div class="topRegLeft">
              <span class="icon-weixin bigIcon"></span>
            </div>
            <div class="topRegRight">
              <span class="topRegR_tit">微信粉丝净增</span>
              <span class="topRegR_mid">wechAT fans </span>
              <div class="topRegR_bot">{{yesterdayInfo.wxfans}}<sub>人</sub></div>
              <span class="topRegR_lj">累计粉丝数{{TotalInfo.wxfansTotal}}人</span>
            </div>
          </div>
          <div class="topReg">
            <div class="topRegLeft">
              <span class="icon-active bigIcon"></span>
            </div>
            <div class="topRegRight">
              <span class="topRegR_tit">日活跃用户(DAU)</span>
              <span class="topRegR_mid">day active user</span>
              <div class="topRegR_bot">{{yesterdayInfo.actives}}<sub>人</sub></div>
              <span class="topRegR_lj">累计活跃用户{{TotalInfo.activesTotal}}人</span>
            </div>
          </div>
        </div>
        <div class="bigTopRight">
          <horn></horn>
          <div class="tiemTop">
            {{time.year}}
            <sub>年</sub>{{time.month}}
            <sub>月</sub>{{time.day}}
            <sub>日</sub>{{time.week}}
          </div>
          <div class="tiemBot">{{`${time.hour}:${time.minute}:${time.second}`}}</div>
        </div>
      </div>
      <div class="bigMiddle">
        <div class="bigMidLeft">
          <horn></horn>
          <div class="bigL_top">
            <div class="bigL_topL">
              <div class="trendIcon">
                <span class="icon-trend trendReg" :class="{'regs': titIconTog.regs, 'pv':  titIconTog.pv, 'uv':  titIconTog.uv, 'wxfans':  titIconTog.wxfans, 'actives':  titIconTog.actives}" :style="{'color': trendTit.titBg}"></span>
              </div>
              <div class="trendText">
                <div class="trendTextTop">{{trendTit.titText}}</div>
                <div class="trendTextTime">{{trendTit.titTime}}</div>
              </div>
            </div>
            <div class="bigL_topR">
              <div class="dayWark">
                <span class="dayIcon" :style="{'background-color': trendRegister.seriesTwoItemColor}"></span>
                <span class="dayData">当日数据</span>
              </div>
              <div class="dayWark">
                <span class="monIcon" :style="{'background-color': trendRegister.seriesTwoItemColor}"></span>
                <span class="dayMon">每日环比</span>
              </div>
            </div>
          </div>
          <div class="bigL_bot">
            <div class="gap">{{yAxisName}}</div>
            <ContrastRegisterVue proId="rollReg" v-model="trendRegister"></ContrastRegisterVue>
            <div class="bigL_bot_top">
              <ContrastRegisterVue proId="rolltop" v-model="trendRegisterLine"></ContrastRegisterVue>
            </div>
          </div>
        </div>
        <div class="bigMidRight">
          <horn></horn>
          <div class="bigR_top">
            <span class="bigR_topTit">{{information.title}}</span>
          </div>
          <div class="bigR_bot">
            <div class="bigR_botRoll" ref="botRoll">
              <div class="bigR_k" ref="abc" :class="{'bigR_k_line': infoTog}" v-html="information.content" :style="{'transform': translateY}">
              </div>
              <div class="bigR_k" ref="abc" :class="{'bigR_k_line': infoTog}" v-if="infoTog" v-html="information.content" :style="{'transform': translateY}">
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="bigBotton">
        <div class="bigRegister">
          <horn></horn>
          <ContrastRegisterVue proId="myChartRegister" v-model="contrastRegisterData"></ContrastRegisterVue>
        </div>
        <div class="bigRegister">
          <horn></horn>
          <ContrastRegisterVue proId="myChartBrowse" v-model="contrastBrowseData"></ContrastRegisterVue>
        </div>
        <div class="bigRegister">
          <horn></horn>
          <ContrastRegisterVue proId="myChartIndependent" v-model="contrastIndependentData"></ContrastRegisterVue>
        </div>
        <div class="bigRegister">
          <horn></horn>
          <ContrastRegisterVue proId="myChartWeixin" v-model="contrastWeixinData"></ContrastRegisterVue>
        </div>
        <div class="bigRegister">
          <horn></horn>
          <ContrastRegisterVue proId="myChartActive" v-model="contrastActiveData"></ContrastRegisterVue>
        </div>
      </div>
    </div>
  </div>
</template>

 <script type="text/ecmascript-6">
import BigScreenJs from 'bigScreenJs'
import ContrastRegisterVue from 'contrastRegisterVue'
import horn from 'hornVue'
export default {
  ...BigScreenJs,
  components: {
    ContrastRegisterVue,
    horn
  }
}
</script>
<style type="text/scss" lang="scss">
@import './scss/bigScreen.scss';
</style>
