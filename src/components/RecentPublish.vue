<template>
  <el-row>
    <el-col>
      <b style="font-size:25px">最新更新</b>
    </el-col>
    <el-col style="border:1px blue solid">
      <table border="1px">
        <tr>
          <th>类别</th>
          <th>书名</th>
          <th>作者</th>
          <th>最新章节</th>
          <th>更新时间</th>
        </tr>
        <tr v-for="(item, index) in bookList" :key="index">
          <td>{{ item.category }}</td>
          <td>{{ item.bookName }}</td>
          <td>{{ item.author }}</td>
          <td>{{ item.recent }}</td>
          <td>{{ item.updateTime }}</td>
        </tr>
      </table>
    </el-col>
  </el-row>
</template>

<script>
export default {
  data() {
    return {
      bookList: [
        {
          category: "仙剑奇侠",
          bookName: "替嫁医妃：王爷起来喝药了",
          author: "强强",
          recent: "第三百六十章 强强来了",
          updateTime: "2019-10-09"
        },
                {
          category: "仙剑奇侠",
          bookName: "替嫁医妃：王爷起来喝药了",
          author: "强强",
          recent: "第三百六十章 强强来了",
          updateTime: "2019-10-09"
        },
                {
          category: "仙剑奇侠",
          bookName: "替嫁医妃：王爷起来喝药了",
          author: "强强",
          recent: "第三百六十章 强强来了",
          updateTime: "2019-10-09"
        },
                {
          category: "仙剑奇侠",
          bookName: "替嫁医妃：王爷起来喝药了",
          author: "强强",
          recent: "第三百六十章 强强来了",
          updateTime: "2019-10-09"
        },
                {
          category: "仙剑奇侠",
          bookName: "替嫁医妃：王爷起来喝药了",
          author: "强强",
          recent: "第三百六十章 强强来了",
          updateTime: "2019-10-09"
        },
                {
          category: "仙剑奇侠",
          bookName: "替嫁医妃：王爷起来喝药了",
          author: "强强",
          recent: "第三百六十章 强强来了",
          updateTime: "2019-10-09"
        },
                {
          category: "仙剑奇侠",
          bookName: "替嫁医妃：王爷起来喝药了",
          author: "强强",
          recent: "第三百六十章 强强来了",
          updateTime: "2019-10-09"
        },
                {
          category: "仙剑奇侠",
          bookName: "替嫁医妃：王爷起来喝药了",
          author: "强强",
          recent: "第三百六十章 强强来了",
          updateTime: "2019-10-09"
        }
      ]
    };
  }
};
</script>

<style scoped>
table > tr > th {
  width: 200px;
}
table > tr > td {
  width: 200px;
}
</style>