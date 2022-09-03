<template>
  <div>
    <el-row>
        <!-- 菜单栏 -->
      <el-col :span="5" style="border:1px solid red">
        <el-menu
          :default-active="activeIndex"
          class="el-menu-demo"
          mode="vertical"
          @select="handleSelect"
          style="height:490px"
          router
        >
          <el-menu-item index="/user/center">
            <i class="el-icon-user"></i>个人中心
          </el-menu-item>
          <el-menu-item index="/user/book"><i class="el-icon-reading"></i>我的书架</el-menu-item>
          <el-menu-item index="3"><i class="el-icon-chat-line-round"></i>我的书评</el-menu-item>
          <el-menu-item index="/user/info"><i class="el-icon-edit"></i>个人信息</el-menu-item>
          <el-menu-item index="5"><i class="el-icon-coin"></i>充值会员</el-menu-item>
        </el-menu>
      </el-col>
      <!-- 菜单栏页面视图 -->
      <el-col :span="14" :offset="1" class="menu-view" style="border:1px solid blue">
            <router-view></router-view>
      </el-col>
    </el-row>
  </div>
</template>
<script>
export default {
  data() {
      return {
        activeIndex: '1'
      };
    },
   methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      }
    }
}
</script>

<style scoped>
.menu-view {
  background-color: white;
  border-radius: 10px 10px 10px 10px;
}
</style>