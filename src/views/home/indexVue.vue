<template>
  <div id="app">

    <div class="usersModul">
      <h2>用户信息模块</h2>
      <section class="regist">
        <label for=""><input type="text" class="nameIpt" placeholder="请输入你的用户名" v-model="nameIptVal"></label>
        <label for=""><input type="password" class="pswIpt" placeholder="请输入你的密码" v-model="pswIptVal"></label>
        <label for=""><input type="text" class="emailIpt" placeholder="请输入你的邮箱" v-model="emailIptVal"></label>
        <button class="submit registBtn" @click="registHandler(nameIptVal,pswIptVal,emailIptVal)">提交</button>
      </section>
      <section class="queryAllUsers">
        <button class="submit queryAllUsersBtn" @click="queryAllUsersHandler">查询全部用户</button>
        <div class="queryCont">
          <ul>
            <li class="myInfo" v-for=" (item,index) in queryAllUsersInfos" :key="index">
              <p>用户名:{{item.name}}</p>
              <p>用户邮箱:{{item.email}}</p>
            </li>
          </ul>
        </div>
      </section>
      <section class="queryAllUsers">
        <label for=""><input type="text" v-model="queryRequstMyUserInfo" class="queryAllUsersIpt" placeholder="请输入你的邮箱或者用户名"></label>
        <div class="queryCont">
          <ul>
            <li v-for=" (item,index) in queryMyInfos" :key="index">
              <p>用户名:{{item.name}}</p>
              <p>用户邮箱:{{item.email}}</p>
            </li>
          </ul>
        </div>
        <button class="submit queryMyUserBtn" @click="queryMyUserHandler(queryRequstMyUserInfo)">查询个人信息</button>
      </section>
      <section class="deleteUser">
        <label for=""><input type="text" class="deleteUserIpt" placeholder="请输入你的邮箱或者用户名" v-model="deleteUser"></label>
        <button class="submit deleteUserBtn" @click="deleteUserHandler(deleteUser)">删除</button>
      </section>
      <section class="deleteUser">
        <h2>模拟登录模块</h2>
        <div>
          <label class="loginUserNameLabel" for="loginUserNameIpt">登录名</label>
          <input type="text" id='loginUserNameIpt' class="loginUserNameIpt" placeholder="请输入你的用户名或邮箱" v-model="loginUserName">
        </div>
        <div>
          <label class="loginUserPswLabel" for="loginUserPswIpt">密码</label>
          <input type="password" id='loginUserPswIpt' class="loginUserPswIpt" placeholder="请输入你的密码" v-model="loginUserPsw">
        </div>
        <div>
          <button class="submit loginUserBtn" @click="loginHandler(loginUserName,loginUserPsw)">登陆</button>
        </div>
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
      deleteUser: '',
      loginUserName: '',
      loginUserPsw: '',
      queryRequstMyUserInfo: '',
      queryAllUsersInfos: {},
      queryMyInfos: {}
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
      let self = this
      fetch.httpRequestPost('http://localhost:3000/api/users/users0002', data, function(datas) {
        if (datas && datas.data && datas.data.body) {
          self.queryAllUsersInfos = datas.data.body.datas
        }
      })
    },
    queryMyUserHandler(_parma) {
      let reg = /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+/;
      let data = {}
      let self = this
      if (reg.test(_parma)) {
        data.email = _parma
      } else {
        data.name = _parma
      }

      fetch.httpRequestPost('http://localhost:3000/api/users/users0003', data, function(datas) {
        if (datas && datas.data && datas.data.body) {
          self.queryMyInfos = datas.data.body.datas
        }
      })
    },
    deleteUserHandler(_str) {
      let reg = /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+/;
      let data = {}
      let self = this
      if (reg.test(_str)) {
        data.email = _str
      } else {
        data.name = _str
      }
      fetch.httpRequestPost('http://localhost:3000/api/users/users0004', data, function(datas) {
        if (datas && datas.data && datas.data.body) {
          self.queryAllUsersInfos = datas.data.body.datas
        }
      })
    },
    loginHandler(_name, _password) {
      let md5 = crypto.createHash('md5');
      _password = md5.update(_password).digest('hex');
      let self = this
      let data = {
        name: _name,
        password: _password
      }
      fetch.httpRequestPost('http://localhost:3000/api/users/users0005', data, function(datas) {
        if (datas && datas.data && datas.data.body) {
          self.queryAllUsersInfos = datas.data.body.datas
        }
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

.loginUserPswLabel,
.loginUserNameLabel {
  width: 100px;
  display: inline-block;
}

.myInfo {
  margin-bottom: 10px;
  border: 1px solid $black;
}

section {
  padding: 30px;
  border: 1px solid $black;
  margin-top: 5px;
}
</style>
