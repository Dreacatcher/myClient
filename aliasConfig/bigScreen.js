/*
* @Author: willy
* @Date:   2017-08-09
*/

'use strict'
var path = require('path')
var srcDir = path.resolve(process.cwd(), 'src')
module.exports = {
// **************************bigScreen************************************//
  // bigScreen
  bigScreenJs: srcDir + '/views/showDatas/controllers/bigScreen',
  bigScreenVue: srcDir + '/views/showDatas/showDatas.vue',
  // contrastRegister
  contrastRegisterJs: srcDir + '/views/showDatas/ui/controllers/contrastRegister',
  contrastRegisterVue: srcDir + '/views/showDatas/ui/contrastRegister',
  // horn
  hornVue: srcDir + '/views/showDatas/ui/horn',
  // store
  bigScreenStore: srcDir + '/store/modules/bigScreen',
}

