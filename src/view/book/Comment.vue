<template>
  <div>
    <div style="height: 40px;"
    ></div>
    <div v-for="(comment, index) in comments" :key="index">
      <el-row>
        <el-col :span="2" :offset="1">
          <div class="block">
            <el-avatar :size="80" :src="comment.picture"></el-avatar>
          </div>
        </el-col>
        <el-col :span="10">
          <div style="font-size: 8px; font-weight: 600; height: 30px">
            {{ comment.name }}
          </div>
          <div style="font-weight: 200; height: 30px">
            {{ comment.content }}
          </div>
          <div style="font-weight: 400; font-size: 6px; height: 30px">
            {{ comment.data }}
          </div>
        </el-col>
      </el-row>

      <el-row :span="4" :offset="5">
        <el-button
          type="primary"
          icon="el-icon-edit"
          circle
          @click="answer(comment.userid, index)"
        ></el-button>

        <div v-show="comment.show">
          <el-input
            type="textarea"
            placeholder="回复评论"
            v-model="textareaa"
            maxlength="30"
            show-word-limit
          >
          </el-input>
          <el-button
            type="success"
            icon="el-icon-check"
            circle
            @click="inanswer(textareaa, index)"
          ></el-button>
        </div>
        <el-divider></el-divider>
      </el-row>
    </div>

    <el-input
      type="textarea"
      placeholder="请输入内容"
      v-model="textarea"
      maxlength="90"
      show-word-limit
      :rows="5"
    >
    </el-input>
    <!-- 提交按钮 -->
    <el-button type="primary" plain class="buttom_bule">提交</el-button>
  </div>
</template>
<script>
export default {
  data() {
    return {
      //隐藏回复框
      show: false,
      //头像路径
      circleUrl:
        "https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png",
      //评论区默认值
      textarea: "",
      //回复评论
      textareaa: "",
      //小说评论
      comments: [
        {
          show: false,
          //用户头像
          picture:
            "https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png",
          //用户名字
          name: "名字1",
          //评论内容
          content: "那个黑人哇哈我如何维护",
          //评论时间
          data: "2022-9-5",
          //用户id
          userid: "5",
        },
        {
          show: false,
          picture:
            "https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png",
          name: "名字2",
          content: "评论内容幅度萨芬问题",
          data: "2022-9-5",
          userid: "6",
        },
        {
          show: false,
          picture:
            "https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png",
          name: "名字3",
          content: "评论内容购入热图哈特",
          data: "2022-9-5",
          userid: "7",
        },
      ],
    };
  },
  methods: {
    //点击回复 显示 输入框
    answer(userid, index) {
      this.comments[index].show = !this.comments[index].show;
    },
    //回复内容提交
    inanswer(textareaa, index) {
      //测试提交信息
      console.log(textareaa);
      //重新设置为空
      this.textareaa = "";
      //关闭输入框
      this.comments[index].show = !this.comments[index].show;
      //提交成功
      this.$message({
        message: "提交成功",
        type: "success",
      });
    },
  },
};
</script>

<style scoped>
.buttom_bule {
  width: 100%;
}
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