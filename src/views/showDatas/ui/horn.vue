<template>
  <div class="hormWrap">
    <div class="hormTopL">
      <span class="imgIcon"><img src="./img/hron.png"></span>
      <!-- <span class="icon-horn hornIcon"></span> -->
    </div>
    <div class="hormTopR">
      <span class="imgIcon"><img src="./img/hron.png"></span>
    </div>
    <div class="hormBopL">
      <span class="imgIcon"><img src="./img/hron.png"></span>
    </div>
    <div class="hormBopR">
      <span class="imgIcon"><img src="./img/hron.png"></span>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
</script>
<style type="text/scss" lang="scss">
.hornIcon,.imgIcon {
  display: flex;
  font-size: 10px;
}

.horm {
  position: absolute;
  display: block;
}
.imgIcon{
  width: 7px;
  height: 7px;
  img{
    width: 100%;
    height: 100%;
  }
}
$deg: 90deg;
.hormTopL {
  top: -1px;
  left:-1px;
  @extend .horm;
}

.hormTopR {
  top: -1px;
  right: -1px;
  @extend .horm;
  transform: rotate($deg)
}

.hormBopL {
  bottom: -1px;
  left: -1px;
  @extend .horm;
  transform: rotate($deg*3)
}

.hormBopR {
  bottom: -1px;
  right: -1px;
  transform: rotate($deg*2);
  @extend .horm;
}
</style>
