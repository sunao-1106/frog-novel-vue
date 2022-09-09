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
        <router-link to="/login">
          <el-link class="link-a" href="/login" target="_blank">
            <b>登录</b>
          </el-link>
        </router-link>
        <router-link to="/register">
          <el-link class="link-a" href="/reagister" target="_blank">
            <b>注册</b>
          </el-link>
        </router-link>
        <router-link to="/user/book">
          <el-link class="link-a" target="_blank">
            <i class="el-icon-collection" style="color:#409eff"></i>
            <b>我的书架</b>
          </el-link>
        </router-link>
      </el-col>
      <!-- 头部导航栏 -->
      <el-col :span="24" class="header-navigation">

        <a href="/">首页</a>

        <a href="/all">全部小说</a>
        <a href="#">排行榜</a>
        <a href="#">免费小说</a>
        <a href="#">完本小说</a>
        <br />
        <hr style="border:3px #5ba4e9 solid" />
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      input: ""
    };
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