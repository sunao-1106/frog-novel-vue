<template>
  <div>
    <el-row>
      <el-col style="margin:0px 0px 10px 10px">
        <b style="font-size:25px">精选完本</b>
      </el-col>
      <hr />
      <el-col :span="10" class="book-item" v-for="(item, index) in bookList" :key="index">
        <el-row>
          <el-col :span="6">
            <router-link :to="'/detail/' + item.id">
              <el-image
                style="width: 72px; height: 96px"
                :src="item.image"
                fit="fit"
                class="novel-image"
              ></el-image>
            </router-link>
          </el-col>
          <el-col :span="16" :offset="1" style="height:100px">
            <p class="novel-description">
              <router-link
                :to="'/detail/' + item.id"
                href="#"
                style="text-decoration:none; color:black"
              >
                <div class="novel-name">{{ item.bookName }}</div>
              </router-link>
            </p>
            <p style="font-size:10px;color:#a6a6a6">
              <i class="el-icon-user"></i>
              ：{{ item.authorName }}
            </p>
            <div class="hidden-if-beyond">{{ item.description }}</div>
          </el-col>
        </el-row>
      </el-col>
    </el-row>
  </div>
</template>
<script>
export default {
  data() {
    return {
      bookList: []
    };
  },
  methods: {
    // 获取首页猜你喜欢小说列表
    getSelectBookList() {
      this.$http.get("/home/book/selected").then(result => {
        let rs = result.data;
        if (rs.code == 0) {
          console.log("精选完本：", rs.data);
          this.bookList = rs.data;
        }
      });
    }
  },
  mounted() {
    this.getSelectBookList();
  }
};
</script>

<style scoped>
.novel-image {
  /* 水平 垂直 模糊距离 */
  box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.5);
}
.novel-description {
  padding: 0;
  margin: 0;
  line-height: 1;
}
.book-item {
  margin-top: 10px;
  margin-left: 60px;
}
/* 多行超出部分显示... */
.hidden-if-beyond {
  width: 205px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  font: 10px/15px PingFangSC-Regular, "-apple-system", Simsun;
}
.novel-name {
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  width: 200px;
}
</style>