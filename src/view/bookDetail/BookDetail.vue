<template>
  <div>
    <el-row>
      <!-- 小说详细信息卡片 -->
      <el-col :span="22" :offset="1" class="book-detail-info" style="height:340px">
        <book-detail-info v-bind:bookInfo="bookInfo"></book-detail-info>
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
            <comment v-if="showFlag == 1"></comment>
            <book-chapter-list v-if="showFlag == 2" v-bind:chapterList="chapterList"></book-chapter-list>
          </el-col>
        </el-row>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import BookDetailInfo from "@/components/BookDetailInfo";
import Comment from "@/view/bookDetail/Comment";
import BookChapterList from "@/view/bookDetail/BookChapterList";
export default {
  data() {
    return {
      activeIndex: "2",
      showFlag: 2, // 默认1：展示小说目录章节，2：展示小说评论
      commentList: [],
      chapterList: [],
      bookInfo: {
        id: "",
        bookName: "",
        authorName: "",
        image: "",
        description: "",
        wordCount: "",
        isFinished: "",
        iFree: ""
      }
    };
  },
  components: { BookDetailInfo, Comment, BookChapterList },
  methods: {
    handleSelect(key, keyPath) {
      if (key == 1) {
        this.showFlag = 1;
      } else {
        this.showFlag = 2;
      }
    },
    getBookDetailInfo() {
      let url = this.$route.path;
      this.$http.get("/book/info" + url).then(result => {
        let rs = result.data;
        if (rs.code === 0) {
          let data = rs.data;
          // 封装小说基本信息参数
          this.bookInfo.id = data.id;
          this.bookInfo.bookName = data.bookName;
          this.bookInfo.authorName = data.authorName;
          this.bookInfo.image = data.image;
          this.bookInfo.description = data.description;
          this.bookInfo.wordCount = data.wordCount;
          this.bookInfo.isFinished = data.isFinished;
          this.bookInfo.isFree = data.isFree;
          console.log("小说信息:", this.bookInfo);

          // 封装小说章节列表
          this.chapterList = data.bookChapterVoList;
          // 章节列表按照index升序排序
          this.chapterList.sort((obj1, obj2) => {
            let index1 = obj1.chapterIndex;
            let index2 = obj2.chapterIndex;
            if (index1 > index2) {
              return 1;
            } else if (index1 < index2) {
              return -1;
            } else {
              return 0;
            }
          });
          console.log("小说章节信息:", this.chapterList);
        }
      });
    }
  },
  mounted() {
    this.getBookDetailInfo();
  },
  // 每次进入该页面滚动条都默认最顶部
  updated() {
    window.scroll(0, 0);
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