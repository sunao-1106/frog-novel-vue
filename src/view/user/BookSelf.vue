<template>
    <div class="book-self">
        <el-row>
            <el-col>
                <div class="bookself">
                    <span style="font-size:20px;">我的书架</span>
                    <hr>
                <table class="bookself-table" style="border-collapse:collapse">
                    <tr>
                        <td style="width:90px;color: black">类别</td>
                        <td style="width:130px;color: black">书名 </td>
                        <td style="width:195px;color: black">上次浏览章节</td>
                        <td style="width:100px;color: black"> 最近更新时间</td>
                        <td style="width:60px;color: black">操作</td>
                    </tr>
                    <tr v-for="(item, index) in readHistory" :key="index">
                        <td><el-link href="">{{ item.categroyName }}</el-link></td>
                        <td><el-link href="">{{ item.bookName }}</el-link></td>
                        <td><el-link href="">{{ item.preContentId }}</el-link></td>
                        <td>{{ item.updateTime }}</td>
                        <td><el-link type="primary" href="">继续阅读</el-link></td>
                    </tr>
                    <tr></tr>
                </table>
                </div>
            </el-col>

            <el-col :offset="6" class="pagination">
                   <el-pagination
    layout="prev, pager, next"
    :total="50">
  </el-pagination>
            </el-col>
        </el-row>
    </div>
</template>

<script>
export default {
  data() {
    return {
      readHistory: [
        {
          categroyName: "武侠小说",
          bookName: "仙剑奇侠传",
          preContentId: "第十六章 强强来了",
          updateTime: "2019-10-09"
        },
        {
          categroyName: "武侠小说",
          bookName: "仙剑奇侠传",
          preContentId: "第十六章 强强来了",
          updateTime: "2019-10-09"
        },
        {
          categroyName: "武侠小说",
          bookName: "仙剑奇侠传",
          preContentId: "第十六章 强强来了",
          updateTime: "2019-10-09"
        },
        {
          categroyName: "武侠小说",
          bookName: "仙剑奇侠传",
          preContentId: "第十六章 强强来了",
          updateTime: "2019-10-09"
        },
        {
          categroyName: "武侠小说",
          bookName: "仙剑奇侠传",
          preContentId: "第十六章 强强来了",
          updateTime: "2019-10-09"
        },
        {
          categroyName: "武侠小说",
          bookName: "仙剑奇侠传",
          preContentId: "第十六章 强强来了",
          updateTime: "2019-10-09"
        },
        {
          categroyName: "武侠小说",
          bookName: "仙剑奇侠传",
          preContentId: "第十六章 强强来了",
          updateTime: "2019-10-09"
        },
        {
          categroyName: "武侠小说",
          bookName: "仙剑奇侠传",
          preContentId: "第十六章 强强来了",
          updateTime: "2019-10-09"
        },
        {
          categroyName: "武侠小说",
          bookName: "仙剑奇侠传",
          preContentId: "第十六章 强强来了",
          updateTime: "2019-10-09"
        },
        {
          categroyName: "武侠小说",
          bookName: "仙剑奇侠传",
          preContentId: "第十六章 强强来了",
          updateTime: "2019-10-09"
        },
        {
          categroyName: "武侠小说",
          bookName: "仙剑奇侠传",
          preContentId: "第十六章 强强来了",
          updateTime: "2019-10-09"
        },
        {
          categroyName: "武侠小说",
          bookName: "仙剑奇侠传",
          preContentId: "第十六章 强强来了",
          updateTime: "2019-10-09"
        },
        {
          categroyName: "武侠小说",
          bookName: "仙剑奇侠传",
          preContentId: "第十六章 强强来了",
          updateTime: "2019-10-09"
        },
        {
          categroyName: "武侠小说",
          bookName: "仙剑奇侠传",
          preContentId: "第十六章 强强来了",
          updateTime: "2019-10-09"
        }
        
      ]
    };
  }
};
</script>

<style scoped>
.bookself-table td {
  font: 15px/21px PingFangSC-Regular, "-apple-system", Simsun;
  color: #727377;
}
.bookself {
  margin-top: 10px;
}
.bookself-table > tr:first-child {
  background: #ededed;
}
.book-self {
  margin: auto;
  width: 600px;
}
.pagination {
  margin-top: 10px;
}
</style>