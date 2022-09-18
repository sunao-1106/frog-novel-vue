<template>
  <div>
    <!-- 内容主体 -->
    <el-row>
      <!-- 左侧边栏 -->
      <el-col :span="2" :offset="1">
        <div class="left-sidebar" :style="'background-color:' + computedBackgroundColor ">
          <div class="sidebar-item">
            <a href>
              <!-- <i class="el-icon-tickets" style="font-size:30px;color:black;margin:auto"></i> -->
              <el-button type="info" size="mini" icon="el-icon-tickets" circle></el-button>
              <span :style="'color:' + computedFontColor">目录</span>
            </a>
            <hr />
          </div>
          <div class="sidebar-item">
            <a href>
              <el-button type="info" size="mini" icon="el-icon-circle-plus-outline" circle></el-button>
              <span :style="'color:' + computedFontColor">书架</span>
            </a>
            <hr />
          </div>
          <div class="sidebar-item">
            <el-button
              type="info"
              size="mini"
              icon="el-icon-view"
              circle
              @click="dialogTableVisible = true"
            ></el-button>
            <span :style="'color:' + computedFontColor">主题</span>
          </div>
        </div>
      </el-col>
      <el-col :span="20">
        <div class="book-content" :style="'background-color:' + computedBackgroundColor ">
          <div class="chapter-content">
            <p
              :style="'font-size:30px;color:' + computedFontColor"
            >{{ chapterContentInfo.chapterName }}</p>
            <p>
              <span>分类：待添加</span>
              <span>作者：{{ chapterContentInfo.authorName }}</span>
              <span>字数：待添加</span>
              <span>更新时间：{{chapterContentInfo.createTime}}</span>
            </p>
            <hr />
            <p
              v-for="(item, index) in chapterContentInfo.chapterContent"
              :key="index"
              :style="'color:' + computedFontColor"
            >{{item}}</p>
          </div>
        </div>
      </el-col>

      <el-col :span="20">
        <div class="bottom-sidebar" :style="'background-color:' + computedBackgroundColor ">
          <el-row>
            <el-col :span="6" :offset="2">
              <el-button type="info" round>上一章</el-button>
            </el-col>
            <el-col :span="6" :offset="2">
              <el-button type="info" round>目录</el-button>
            </el-col>
            <el-col :span="6" :offset="2">
              <el-button type="info" round>下一章</el-button>
            </el-col>
          </el-row>
        </div>
      </el-col>
    </el-row>

    <el-dialog title="选择主题" :visible.sync="dialogTableVisible">
      <el-button class="green" circle @click="changeViewTopic(0)"></el-button>
      <el-button class="blue" circle @click="changeViewTopic(1)"></el-button>
      <el-button class="black" circle @click="changeViewTopic(2)"></el-button>
      <el-button class="yello" circle @click="changeViewTopic(3)"></el-button>
    </el-dialog>
  </div>
</template>

<script>
export default {
  inject: ["changeTopic"],
  data() {
    return {
      chapterContentInfo: {
        chapterId: "",
        authorName: "",
        categoryName: "",
        chapterName: "",
        createTime: "",
        chapterContent: [],
        isFree: ""
      },
      backgroundColor: "",
      fontColor: "",
      dialogTableVisible: false
    };
  },
  methods: {
    changeViewTopic(color) {
      // TODO 改变当前backgroundColor
      if (color === 0) {
        this.backgroundColor = "#dce6dc";
        this.fontColor = "black";
      } else if (color === 1) {
        this.backgroundColor = "#cfdde1";
        this.fontColor = "black";
      } else if (color === 2) {
        this.backgroundColor = "black";
        // 修改白色的字体颜色
        this.fontColor = "#666666";
      } else if (color === 3) {
        this.backgroundColor = "#f1e6c5";
        this.fontColor = "black";
      }
      this.changeTopic(color);
    },
    // 获取当前章节的信息及内容
    getChapterContent() {
      console.log(this.$route.path);
      let uri = this.$route.path;
      if (uri.indexOf("/vip") != -1) {
        this.$http.get("/book" + uri).then(result => {
          let rs = result.data;
          if (rs.code === 0) {
            // 封装信息
            this.setChapterContentInfo(rs.data);
          }
        });
      }
      if (uri.indexOf("/free") != -1) {
        this.$http.get("/book/chapter" + uri).then(result => {
          let rs = result.data;
          if (rs.code === 0) {
            // 封装信息
            this.setChapterContentInfo(rs.data);
          }
        });
      }
    },
    setChapterContentInfo(data) {
      this.chapterContentInfo.chapterId = data.chapterId;
      this.chapterContentInfo.authorName = data.authorName;
      this.chapterContentInfo.categoryName = data.categoryName;
      this.chapterContentInfo.chapterName = data.chapterName;
      this.chapterContentInfo.createTime = data.createTime;
      this.chapterContentInfo.isFree = data.isFree;
      // 将章节内容转化为一个数组 每一行对应一个数组项
      // 首先截取文章内容的 []
      let temp = data.chapterContent.substring(
        data.chapterContent.indexOf("[") + 1,
        data.chapterContent.indexOf("]") - 1
      );
      this.chapterContentInfo.chapterContent = temp.split("/");
      console.log("chapterContentInfo", this.chapterContentInfo);
    }
  },
  computed: {
    computedBackgroundColor() {
      return this.backgroundColor;
    },
    computedFontColor() {
      return this.fontColor;
    }
  },
  created() {
    // 修改该页面的默认颜色
    this.changeTopic(0);
    // 初始化当前页面的章节信息及内容
    this.getChapterContent();
  }
};
</script>

<style scoped>
p > span {
  font-size: 10px;
  margin-right: 10px;
  color: #a6a6a6;
}
.chapter-content {
  width: 700px;
  margin: auto;
  padding-top: 20px;
  padding-bottom: 20px;
}
.book-content {
  width: 800px;
  margin: auto;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.12), 0 0 6px rgba(0, 0, 0, 0.04);
  margin-top: 15px;
}
.chapter-content > p {
  font-family: PingFangSC-Regular, HelveticaNeue-Light, "Helvetica Neue Light",
    "Microsoft YaHei", sans-serif;
  font-size: 18px;
}
.left-sidebar {
  width: 60px;
  margin-top: 15px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.12), 0 0 6px rgba(0, 0, 0, 0.04);
}
.sidebar-item {
  width: 30px;

  margin: auto;
  margin-top: 10px;
}
.sidebar-item span,
a {
  font-size: 5px;
  text-decoration: none;
  color: black;
}

.green {
  background-color: #dce6dc;
}
.blue {
  background-color: #cfdde1;
}
.black {
  background-color: black;
}
.yello {
  background-color: #f1e6c5;
}
.bottom-sidebar {
  padding-top: 20px;
  width: 800px;
  margin: auto;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.12), 0 0 6px rgba(0, 0, 0, 0.04);
  margin-top: 15px;
  margin-left: 160px;
  height: 60px;
}
</style>