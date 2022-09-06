<template>
  <div>
    <el-row>
      <el-col>
        <table style="border-collapse:collapse;margin-left:20px">
          <tr>
            <td style="font-size:16px">序号</td>
            <td style="font-size:16px">类别</td>
            <td style="font-size:16px">书名</td>
            <td style="font-size:16px">作者</td>
            <td style="font-size:16px">最新章节</td>
            <td style="font-size:16px">小说总字数</td>
          </tr>
          <tr v-for="(item, index) in bookList" :key="index" class="content-list">
            <td>
              <div style="width:40px;">
                <b>{{ item.id }}</b>
              </div>
            </td>
            <td>
              <a href>
                <div style="width:120px;">{{ item.categoryName }}</div>
              </a>
            </td>
            <td>
              <a href>
                <div style="width:260px;">{{ item.bookName }}</div>
              </a>
            </td>
            <td>
              <div style="width:100px;">{{ item.author }}</div>
            </td>
            <td>
              <a href>
                <div style="width:340px;">{{ item.recentChapter }}</div>
              </a>
            </td>
            <td>
              <div style="width:100px;">{{ item.wordCount }}</div>
            </td>
          </tr>
        </table>
      </el-col>
      <el-col :span="10" :offset="8">
        <el-pagination layout="prev, pager, next" :total="50" class="pagination"></el-pagination>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      bookList: [
        {
          id: 1,
          categoryName: "武侠小说",
          bookName: "洪荒之开局成为姜子牙",
          author: "强强",
          recentChapter: "第三百八十一章 强强走了",
          wordCount: "118万"
        },
        {
          id: 1,
          categoryName: "武侠小说",
          bookName: "洪荒之开局成为姜子牙",
          author: "强强",
          recentChapter: "第三百八十一章 强强走了",
          wordCount: "118万"
        },
        {
          id: 1,
          categoryName: "武侠小说",
          bookName: "洪荒之开局成为姜子牙",
          author: "强强",
          recentChapter: "第三百八十一章 强强走了",
          wordCount: "118万"
        },
        {
          id: 1,
          categoryName: "武侠小说",
          bookName: "洪荒之开局成为姜子牙",
          author: "强强",
          recentChapter: "第三百八十一章 强强走了",
          wordCount: "118万"
        },
        {
          id: 1,
          categoryName: "武侠小说",
          bookName: "洪荒之开局成为姜子牙",
          author: "强强",
          recentChapter: "第三百八十一章 强强走了",
          wordCount: "118万"
        },
        {
          id: 1,
          categoryName: "武侠小说",
          bookName: "洪荒之开局成为姜子牙",
          author: "强强",
          recentChapter: "第三百八十一章 强强走了",
          wordCount: "118万"
        },
        {
          id: 1,
          categoryName: "武侠小说",
          bookName: "洪荒之开局成为姜子牙",
          author: "强强",
          recentChapter: "第三百八十一章 强强走了",
          wordCount: "118万"
        },
        {
          id: 1,
          categoryName: "武侠小说",
          bookName: "洪荒之开局成为姜子牙",
          author: "强强",
          recentChapter: "第三百八十一章 强强走了",
          wordCount: "118万"
        },
        {
          id: 1,
          categoryName: "武侠小说",
          bookName: "洪荒之开局成为姜子牙",
          author: "强强",
          recentChapter: "第三百八十一章 强强走了",
          wordCount: "118万"
        },
        {
          id: 1,
          categoryName: "武侠小说",
          bookName: "洪荒之开局成为姜子牙",
          author: "强强",
          recentChapter: "第三百八十一章 强强走了",
          wordCount: "118万"
        },
        {
          id: 1,
          categoryName: "武侠小说",
          bookName: "洪荒之开局成为姜子牙",
          author: "强强",
          recentChapter: "第三百八十一章 强强走了",
          wordCount: "118万"
        },
        {
          id: 1,
          categoryName: "武侠小说",
          bookName: "洪荒之开局成为姜子牙",
          author: "强强",
          recentChapter: "第三百八十一章 强强走了",
          wordCount: "118万"
        },
        {
          id: 1,
          categoryName: "武侠小说",
          bookName: "洪荒之开局成为姜子牙",
          author: "强强",
          recentChapter: "第三百八十一章 强强走了",
          wordCount: "118万"
        },
        {
          id: 1,
          categoryName: "武侠小说",
          bookName: "洪荒之开局成为姜子牙",
          author: "强强",
          recentChapter: "第三百八十一章 强强走了",
          wordCount: "118万"
        },
        {
          id: 1,
          categoryName: "武侠小说",
          bookName: "洪荒之开局成为姜子牙",
          author: "强强",
          recentChapter: "第三百八十一章 强强走了",
          wordCount: "118万"
        },
        {
          id: 1,
          categoryName: "武侠小说",
          bookName: "洪荒之开局成为姜子牙",
          author: "强强",
          recentChapter: "第三百八十一章 强强走了",
          wordCount: "118万"
        },
        {
          id: 1,
          categoryName: "武侠小说",
          bookName: "洪荒之开局成为姜子牙",
          author: "强强",
          recentChapter: "第三百八十一章 强强走了",
          wordCount: "118万"
        },
        {
          id: 1,
          categoryName: "武侠小说",
          bookName: "洪荒之开局成为姜子牙",
          author: "强强",
          recentChapter: "第三百八十一章 强强走了",
          wordCount: "118万"
        },
        {
          id: 1,
          categoryName: "武侠小说",
          bookName: "洪荒之开局成为姜子牙",
          author: "强强",
          recentChapter: "第三百八十一章 强强走了",
          wordCount: "118万"
        },
        {
          id: 1,
          categoryName: "武侠小说",
          bookName: "洪荒之开局成为姜子牙",
          author: "强强",
          recentChapter: "第三百八十一章 强强走了",
          wordCount: "118万"
        }
      ]
    };
  }
};
</script>

<style scoped>
table b {
  color: grey;
  background-color: #ededed;
}
.content-list > td {
  font: 15px/38px PingFangSC-Regular, "-apple-system", Simsun;
}
table a {
  color: black;
  text-decoration: none;
}
table a:hover {
  color: #5ba4e9;
}
table tr:nth-child(2n + 1) {
  background-color: #f9f9f9;
}
.pagination {
    margin-top: 10px;
}
</style>