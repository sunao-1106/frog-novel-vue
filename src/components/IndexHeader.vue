<template>
  <div>
    <el-row>
      <el-col :span="3">
          <el-image
      style="width: 100px; height: 100px"
      src="https://img2.baidu.com/it/u=2864572493,3868817951&fm=253&fmt=auto&app=138&f=JPEG?w=400&h=400"
      fit="fit"></el-image>
      </el-col>
      <!-- 这里的24就相当于20 因为最外面el-col=20 24也就是占满20 -->
      <!-- 搜索框 -->
      <el-col :span="8" :offset="4" class="search-box">
        <el-form :inline="true">
          <el-form-item>
            <el-input v-model="input" placeholder="请输入内容"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" icon="el-icon-search">搜索</el-button>
          </el-form-item>
        </el-form>
      </el-col>
      <!-- 登录、注册、我的书架 -->
      <el-col :span="5" :offset="18" class="header-link">
        <!-- 在登录成功后 隐藏登录显示退出 -->
        <router-link to="/login" >
          <el-link v-show="show" class="link-a" href="/login" target="_blank">
            <b>登录</b>
          </el-link>
        </router-link>
        <router-link to="/index" >
          <el-link v-show="!show" class="link-a" href="/index" target="_blank" >
            <b @click="outlogin">退出登录</b>
          </el-link>
        </router-link>
        <router-link to="/register">
          <el-link v-show="show" class="link-a" href="/reagister" target="_blank">
            <b>注册</b>
          </el-link>
        </router-link>
        <router-link to="/user/book">
          <el-link v-show="!show" class="link-a" target="_blank">
            <i class="el-icon-collection" style="color:#409eff"></i>
            <b>我的书架</b>
          </el-link>
        </router-link>
      </el-col>
      <!-- 头部导航栏 -->
      <el-col :span="24" class="header-navigation">

        <router-link to="/">首页</router-link>

        <router-link to="/all">全部小说</router-link>
        <router-link to="#">排行榜</router-link>
        <router-link to="#">免费小说</router-link>
        <router-link to="#">完本小说</router-link>
        <br />
        <hr style="border:3px #5ba4e9 solid" />
      </el-col>
    </el-row>
  </div>
</template>

<script>
import {getToken,removeToken} from '../utils/cookeisutils'
export default {
  data() {
    return {
      input: "",
      show: true
    };
  },
  methods: {
    outlogin(){
        console.log("退出登录命令执行");
        //发送退出命令 , 删除reids 缓存
        this.$http({
         method: "get",
         url: "user/outLogin",
        }).then((result)=>{
        //清除 token
        removeToken()
        // console.log(result);
           //显示登录
        this.show=!this.show
        //显示成功
        this.$message({
        message: "退出成功",
        type: "success",
          });
        })
    },
  },


//加载页面时判断是否登录
  created(){
    //如果页面刷新的话window.performance.navigation.type的值为1，如果值不是1就证明页面首次加载
    if (window.performance.navigation.type === 1) {
        //检查cookeis 如果cookies 里面存放着token 那么就判断已经登录
        if(getToken()!=null){
         //判断已经登录就隐藏掉登录按钮，显示退出按钮
         this.show= false
     }
     // console.log('页面刷新')
    } else {
     // console.log('页面首次加载');


    }
  }
};
</script>

<style scoped>
.link-a {
  padding-left: 15px;
}
.search-box {
  margin-top: 30px;
}
.header-link {
  margin-top: -30px;
}
.header-navigation > a {
  padding-right: 20px;
  font-size: 15px;
  text-decoration: none;
  color: #000;
}
.header-navigation {
  margin-top: 20px;
}
.header-navigation > a:hover {
  background-color: rgb(96, 154, 206);
}
</style>