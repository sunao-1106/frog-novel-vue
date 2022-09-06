<template>
  <el-row>
    <el-col style="margin:0px 0px 10px 10px">
      <b style="font-size:25px">最新更新</b>
    </el-col>
          <hr />
    <el-col>
      <table style="border-collapse:collapse;margin:0px 0px 10px 10px">
        <tr>
          <td style="font-size:15px">类别</td>
          <td style="font-size:15px">书名</td>
          <td style="font-size:15px">作者</td>
          <td style="font-size:15px">最新章节</td>
          <td style="font-size:15px">更新时间</td>
        </tr>
        <tr v-for="(item, index) in bookList" :key="index">
           <td><a href=""><div style="width:100px;">{{ item.category }}</div></a></td>
          <td><a href=""><div style="width:220px;">{{ item.bookName }}</div></a></td>
          <td><div style="width:70px;">{{ item.author }}</div></td>
          <td><a href=""><div style="width:210px">{{ item.recent }}</div></a></td>
          <td><div style="width:80px">{{ item.updateTime }}</div></td>
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
          category: "[仙剑奇侠测试ss]",
          bookName: "替嫁医妃：王爷起来喝药了sssssssssssssssssssss",
          author: "强强sssssssss",
          recent: "第三百六十章 强强来了sssssssssssssssssssssss",
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
  color:black;
  text-decoration: none;
}
td a:hover {
  color: #5ba4e9;
}
</style>