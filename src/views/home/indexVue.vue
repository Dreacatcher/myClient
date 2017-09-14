<template>
  <div id="app">

    <div class="usersModul">
      <h2>基于vue+webpack的多页面开发-----主页</h2>
      <h2>用户信息模块</h2>
      <section class="regist">
        <label for=""><input type="text" class="nameIpt" placeholder="请输入你的用户名" v-model="nameIptVal"></label>
        <label for=""><input type="text" class="pswIpt" placeholder="请输入你的密码" v-model="pswIptVal"></label>
        <label for=""><input type="text" class="emailIpt" placeholder="请输入你的邮箱" v-model="emailIptVal"></label>
        <button class="submit registBtn" @click="registHandler(nameIptVal,pswIptVal,emailIptVal)">提交</button>
      </section>
      <section class="queryAllUsers">
        <button class="submit queryAllUsersBtn" @click="queryAllUsersHandler">查询全部用户</button>
      </section>
      <section class="queryAllUsers">
        <label for=""><input type="text" class="queryAllUsersIpt" placeholder="请输入你的邮箱或者用户名"></label>
        <div class="queryCont">{
          <ul>
            <li v-for=" (item,index) in queryAllUsersInfos" :key="index">{{item.name}}</li>
          </ul>
        </div>
        <button class="submit queryMyUserBtn" @click="queryMyUserHandler">查询个人信息</button>
      </section>
      <section class="deleteUser">
        <label for=""><input type="text" class="deleteUserIpt" placeholder="请输入你的邮箱或者用户名"></label>
        <button class="submit deleteUserBtn" @click="deleteUserHandler">删除</button>
      </section>
    </div>
  </div>
</template>

<script>
import crypto from 'crypto'
import fetch from 'fetch'
export default {
  data() {
    return {
      nameIptVal: '',
      pswIptVal: '',
      emailIptVal: '',
      queryAllUsersInfos: {}
    }
  },
  created() {
  },
  methods: {
    registHandler(_name, _password, _email) {
      let md5 = crypto.createHash('md5');
      _password = md5.update(_password).digest('hex');
      let data = {
        name: _name,
        password: _password,
        email: _email
      }
      fetch.httpRequestPost('http://localhost:3000/api/users/users0001', data, function(datas) {
        console.log(datas)
      })
    },
    queryAllUsersHandler() {
      let data = {}
      let self =this
      fetch.httpRequestPost('http://localhost:3000/api/users/users0002', data, function(datas) {
       self.queryAllUsersInfos=datas.data.body.datas
      })
    },
    queryMyUserHandler() {
      let data = {}
      fetch.httpRequestPost('http://localhost:3000/api/users/users0002', data, function(datas) {
        console.log(datas)
      })
    },
    deleteUserHandler() {
      let data = {}
      fetch.httpRequestPost('http://localhost:3000/api/users/users0002', data, function(datas) {
        console.log(datas)
      })
    }
  }
}
</script>

<style type="text/scss" lang="scss">
@import '../../assets/style/_include/_all';
.usersModul {
  width: 1000px;
  margin: 0 auto;
}

h2 {
  color: $mainPurple;
}

label {
  display: block;
}

section {
  padding: 30px;
  border: 1px solid $black;
  margin-top: 5px;
}
</style>
