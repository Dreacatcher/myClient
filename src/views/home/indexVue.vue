<template>
  <div id="app">
    <h2>基于vue+webpack的多页面开发-----主页</h2>
  </div>
</template>

<script>
import fetch from 'fetch'
export default {
  data() {
    return {
    }
  },
  created(){
    let data ={}
    fetch.httpRequestPost('http://localhost:3000/api/users/users0002',data,function(datas){
      console.log(datas)
    })
  },
}
</script>

<style type="text/scss" lang="scss">
@import '../../assets/style/_include/_all';
h2 {
  color: $mainPurple;
}
</style>
