<template>
  <div class="mascot">
    <div :id="proId" :style="{width: '100%', height: '100%'}"></div>
  </div>
</template>

<script type="text/ecmascript-6">
import contrastRegister from 'contrastRegisterJs'
export default {
  ...contrastRegister
}
</script>
<style type="text/scss" lang="scss">
.mascot {
  width: 100%;
  height: 100%;
  background: #030c1c;
}
</style>
