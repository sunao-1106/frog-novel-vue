<template>
  <div>
    <el-row>
      <!-- 小说详细信息卡片 -->
      <el-col :span="22" :offset="1" class="book-detail-info" style="height:340px">
        <book-detail-info></book-detail-info>
      </el-col>
      <!-- 小说讨论区、小说章节目录 -->
      <el-col :span="22" :offset="1" class="comment-and-chapter">
        <el-row>
          <el-col>
            <el-menu
              :default-active="activeIndex"
              class="el-menu-demo"
              mode="horizontal"
              @select="handleSelect"
              style="border-radius: 10px 10px 0px 0px;"
            >
              <el-menu-item index="1">小说讨论区</el-menu-item>
              <el-menu-item index="2">小说目录章节</el-menu-item>
            </el-menu>
          </el-col>
          <el-col>
             <comment />
          </el-col>
        </el-row>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import BookDetailInfo from "@/components/BookDetailInfo";
import Comment from './Comment.vue'
export default {
    data() {

        return {
            activeIndex: "1"
        }
    },
  components: { BookDetailInfo,
          Comment },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    }
  }
};
</script>

<style scoped>
.book-detail-info {
  background-color: white;
  border-radius: 10px 10px 10px 10px;
  margin-top: 30px;
}
.comment-and-chapter {
  background-color: white;
  margin-top: 25px;
  border-radius: 10px 10px 10px 10px;
}
</style>