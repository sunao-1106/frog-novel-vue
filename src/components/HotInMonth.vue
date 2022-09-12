<template>
  <div>
    <!-- 本月最热 -->
    <el-row>
        <el-col style="margin:0px 0px 10px 0px"><b style="font-size:25px">本月热度榜</b></el-col>
        <hr>
      <el-col>
        <div>
          <table>
            <tr v-for="(item, index) in bookList" :key="index">
              <td>
                <b>{{ index + 1 }}</b>
              </td>
              <td><div><router-link :to="'/detail/' + item.id">{{ item.bookName }}</router-link></div></td>
            </tr>
          </table>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
    data() {
      return {
        bookList: []
      }
    },
    methods: {
    // 获取首页本周热度榜小说列表
    getHotBookInMonthList() {
      this.$http.get("/home/book/month").then(result => {
        let rs = result.data;
        if (rs.code == 0) {
          console.log("本月热度榜：", rs.data);
          this.bookList = rs.data;
        }
      });
    }
    },
    mounted() {
      this.getHotBookInMonthList();
    }
}
</script>

<style scoped>
/* 本月点击的前三名 排名文本添加彩色背景 */
table > tr:nth-child(1) > td:nth-child(1) > b {
  color: white;
  background-color: #ff589d;
}
table > tr:nth-child(2) > td:nth-child(1) > b {
  color: white;
  background-color: #84e7d6;
}
table > tr:nth-child(3) > td:nth-child(1) > b {
  color: white;
  background-color: #81de87;
}
table > tr > td:nth-child(1) > b {
  color: grey;
  background-color: #ededed;
}
/* 设置书名字体样式 */
table > tr > td:nth-child(2) {
 font: 14px/31px PingFangSC-Regular,'-apple-system',Simsun;
}

td div {
    overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  width: 175px;
}
td a {
  color:black;
  text-decoration: none;
}
td a:hover {
  color: #5ba4e9;
}
</style>