<template>
  <el-row>
    <el-col style="margin:0px 0px 10px 10px">
      <b style="font-size:25px">最新更新</b>
    </el-col>
    <hr />
    <el-col>
      <table style="border-collapse:collapse;margin:0px 0px 10px 10px">
        <tr>
          <td style="font-size:15px">分类</td>
          <td style="font-size:15px">书名</td>
          <td style="font-size:15px">作者</td>
          <td style="font-size:15px">最新章节</td>
          <td style="font-size:15px">更新时间</td>
        </tr>
        <tr v-for="(item, index) in bookList" :key="index">
          <td>
            <a href>
              <div style="width:100px;">[分类,待添加]</div>
            </a>
          </td>
          <td>
            <router-link :to="'/detail/' + item.id">
              <div style="width:220px;">{{ item.bookName }}</div>
            </router-link>
          </td>
          <td>
            <div style="width:70px;">{{ item.authorName }}</div>
          </td>
          <td>
            <a href>
              <div style="width:210px">{{ item.recentChapterName }}</div>
            </a>
          </td>
          <td>
            <div style="width:80px">{{ item.recentChapterUpdateTime }}</div>
          </td>
        </tr>
      </table>
    </el-col>
  </el-row>
</template>

<script>
export default {
  data() {
    return {
      bookList: []
    };
  },
  methods: {
    // 获取首页本周热度榜小说列表
    getRecentUpdateBookList() {
      this.$http.get("/home/book/recent").then(result => {
        let rs = result.data;
        if (rs.code == 0) {
          console.log("首页最新更新小说：", rs.data);
          this.bookList = rs.data;
        }
      });
    }
  },
  mounted() {
    this.getRecentUpdateBookList();
  }
};
</script>
<style scoped>
table > tr > td {
  width: 200px;
  font: 14px/25px PingFangSC-Regular, "-apple-system", Simsun;
}
table > tr:first-child {
  background-color: #ededed;
}
table div {
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
table a {
  color: black;
  text-decoration: none;
}
td a:hover {
  color: #5ba4e9;
}
</style>