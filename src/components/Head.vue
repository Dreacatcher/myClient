<template>
  <div>
	<x-header class="headfix">{{headfont}}</x-header>
	<div class="headMargin"></div>
  </div>
</template>

<script>
import fetch from 'fetch'
export default {
  data() {
    return {

    }
  },
  components: {
	XHeader
  },
  props: {
	headfont: {
		type: String,
		default: '导航'
	}
  },
  created(){
    let data ={}
    fetch.httpRequestPost('http://localhost:3000/api/users/users0002',data,function(datas){
      console.log(datas)
    })
  },
  //实例初始化最之前，无法获取到data里的数据
  beforeCreate(){
  }, 
  //在挂载开始之前被调用
  beforeMount(){

  }, 
  //已成功挂载，相当ready()
  mounted(){

  },
  //相关操作事件
  methods: {
 
  }
}
</script>

<style type="text/scss" lang="scss">
@import '../../assets/style/_include/_all';
h2 {
  color: $mainLightPurple;
}
</style>
