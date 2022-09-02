<template>
  <div>
    <el-row>
      <el-col :span="12">
        <el-form :inline="true">
          <el-form-item>
            <el-button type="primary">查找书架</el-button>
          </el-form-item>
          <el-form-item>
            <el-input v-model="input" placeholder="请输入内容"></el-input>
          </el-form-item>
        </el-form>
      </el-col>
      <el-col :span="12">
        <div style="text-align: right">
        <el-select
          v-model="value"
          multiple
          filterable
          allow-create
          default-first-option
          placeholder="请选择文章标签"
        >
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          >
          </el-option>
        </el-select>
        </div>
      </el-col>
    </el-row>
    <my-book-shelf />
  </div>
</template>

<script>
import MyBookShelf from "../components/MyBookShelf.vue";

export default {
  components: { MyBookShelf },
  data() {
    return {
      options: [
        {
          value: "HTML",
          label: "HTML",
        },
        {
          value: "CSS",
          label: "CSS",
        },
        {
          value: "JavaScript",
          label: "JavaScript",
        },
      ],
      value: [],
    };
  },
};
</script>

<style scoped>
.el-row {
  margin-bottom: 20px;
}
.el-col {
  border-radius: 4px;
}
.bg-purple-dark {
  background: #99a9bf;
}
.bg-purple {
  background: #d3dce6;
}
.bg-purple-light {
  background: #e5e9f2;
}
.grid-content {
  border-radius: 4px;
  min-height: 36px;
}
.row-bg {
  padding: 10px 0;
  background-color: #f9fafc;
}
</style>