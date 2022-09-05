<template>
  <div>
    <el-row>
      <el-col>
        <span>正文</span>
      </el-col>
      <el-col
        span="6"
        style="border:1px blue solid;margin-top:5px"
        v-for="(item, index) in chapters"
        :key="index"
      >
        <a href>
          <div class="chapter-name">
              <el-tag type="success" effect="plain" size="mini">{{ item.label }}免费</el-tag>
            {{ item.chapterName }}
          </div>
        </a>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      chapters: [
        {
          chapterName: "第一卷 第一章 魔法师之国 [免费]",
          isFree: ""
        },
        {
          chapterName: "第一卷 第一章 魔法师之国 [免费]",
          isFree: ""
        },
        {
          chapterName: "第一卷 第一章 魔法师之国 [免费]",
          isFree: ""
        },
        {
          chapterName: "第一卷 第一章 魔法师之国 [免费]",
          isFree: ""
        },
        {
          chapterName: "第一卷 第一章 魔法师之国 [免费]",
          isFree: ""
        },
        {
          chapterName: "第一卷 第一章 魔法师之国 [免费]",
          isFree: ""
        },
        {
          chapterName: "第一卷 第一章 魔法师之国 [免费]",
          isFree: ""
        },
        {
          chapterName: "第一卷 第一章 魔法师之国 [免费]",
          isFree: ""
        },
        {
          chapterName: "第一卷 第一章 魔法师之国 [免费]",
          isFree: ""
        },
        {
          chapterName: "第一卷 第一章 魔法师之国 [免费]",
          isFree: ""
        },
        {
          chapterName: "第一卷 第一章 魔法师之国 [免费]",
          isFree: ""
        },
        {
          chapterName: "第一卷 第一章 魔法师之国 [免费]",
          isFree: ""
        },
        {
          chapterName: "第一卷 第一章 魔法师之国 [免费]",
          isFree: ""
        },
        {
          chapterName: "第一卷 第一章 魔法师之国 [免费]",
          isFree: ""
        },
        {
          chapterName: "第一卷 第一章 魔法师之国 [免费]",
          isFree: ""
        },
        {
          chapterName: "第一卷 第一章 魔法师之国 [免费]",
          isFree: ""
        },
        {
          chapterName: "第一卷 第一章 魔法师之国 [免费]",
          isFree: ""
        },
        {
          chapterName: "第一卷 第一章 魔法师之国 [免费]",
          isFree: ""
        },
        {
          chapterName: "第一卷 第一章 魔法师之国 [免费]",
          isFree: ""
        },
        {
          chapterName: "第一卷 第一章 魔法师之国 [免费]",
          isFree: ""
        },
        {
          chapterName: "第一卷 第一章 魔法师之国 [免费]",
          isFree: ""
        },
        {
          chapterName: "第一卷 第一章 魔法师之国 [免费]",
          isFree: ""
        },
        {
          chapterName: "第一卷 第一章 魔法师之国 [免费]",
          isFree: ""
        },
        {
          chapterName: "第一卷 第一章 魔法师之国 [免费]",
          isFree: ""
        },
        {
          chapterName: "第一卷 第一章 魔法师之国 [免费]",
          isFree: ""
        },
        {
          chapterName: "第一卷 第一章 魔法师之国 [免费]",
          isFree: ""
        },
        {
          chapterName: "第一卷 第一章 魔法师之国 [免费]",
          isFree: ""
        },
        {
          chapterName: "第一卷 第一章 魔法师之国 [免费]",
          isFree: ""
        },
        {
          chapterName: "第一卷 第一章 魔法师之国 [免费]",
          isFree: ""
        },
        {
          chapterName: "第一卷 第一章 魔法师之国 [免费]",
          isFree: ""
        }
      ]
    };
  }
};
</script>

<style scoped>
.chapter-name {
  font-size: 13px;
  width: 210px;
  border: 1px red solid;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}

a {
  text-decoration: none;
  color: black;
}
a:hover {
  color: #5ba4e9;
}
</style>