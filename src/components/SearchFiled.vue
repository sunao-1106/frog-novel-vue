<template>
  <div>
    <el-row>
      <el-col>
        <table style="border-collapse:collapse">
          <tr>
            <td>小说分类:</td>
            <td v-for="(item, index) in categoryList" :key="index">
              <a href>{{ item.categoryName }}</a>
            </td>
          </tr>
          <tr>
            <td>是否完结:</td>
            <td>
              <a href="#">不限</a>
            </td>
            <td>
              <a href="#">已完结</a>
            </td>
            <td>
              <a href="#">未完结</a>
            </td>
          </tr>
          <tr>
            <td>作品章节数:</td>
            <td>
              <a href="#">100章以内</a>
            </td>
            <td>
              <a href="#">100-200章</a>
            </td>
            <td>
              <a href="#">200-300章</a>
            </td>
            <td>
              <a href="#">300-500章</a>
            </td>
          </tr>
                   <tr>
            <td>小说总字数:</td>
            <td>
              <a href="#">30万字以下</a>
            </td>
            <td>
              <a href="#">30-50万字</a>
            </td>
            <td>
              <a href="#">50-100万字</a>
            </td>
            <td>
              <a href="#">100-200万字</a>
            </td>
          </tr>
          <tr>
            <td>更新时间:</td>
            <td>
              <a href="#">三天内</a>
            </td>
            <td>
              <a href="#">一周内</a>
            </td>
            <td>
              <a href="#">一个月内</a>
            </td>
            <td>
              <a href="#">半年内</a>
            </td>
            <td>
              <a href="#">一年内</a>
            </td>
          </tr>
        </table>
      </el-col>
    </el-row>
  </div>
</template>
<script>
export default {
  data() {
    return {
      categoryList: [
        {
          categoryName: "武侠小说"
        },
        {
          categoryName: "言情小说"
        }
      ]
    };
  }
};
</script>

<style scoped>
table {
  margin-left: 20px;
}
table tr {
  height: 50px;
}
table td {
  width: 120px;
}
a {
  color: #a6a6a6;
  text-decoration: none;
  font-size: 13px;
}
a:hover {
  color: #5ba4e9;
}
.search-item {
  margin: 10px 0px 0px 0px;
}
</style>