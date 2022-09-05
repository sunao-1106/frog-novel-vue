<template>
  <div>
    <el-row>
      <el-col style="margin:10px 0px 10px 5px">
        <span style="font-size:20px;">
          <b>正文:共162卷</b>
        </span>
      </el-col>
      <el-col :span="6" style="margin:15px 0px 0px 0px" v-for="(item, index) in chapters" :key="index">
        <a href="#">
          <div class="chapter-name">
            <el-tag type="success" effect="plain" size="mini" v-if="item.isFree == 0">免费</el-tag>
            <el-tag type="danger" effect="plain" size="mini" v-else-if="item.isFree == 1">VIP</el-tag>
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
          isFree: 0
        },
        {
          chapterName: "第一卷 第一章 魔法师之国 [免费]",
          isFree: 0
        },
        {
          chapterName: "第一卷 第一章 魔法师之国 [免费]",
          isFree: 0
        },
        {
          chapterName: "第一卷 第一章 魔法师之国 [免费]",
          isFree: 0
        },
        {
          chapterName: "第一卷 第一章 魔法师之国 [免费]",
          isFree: 0
        },
        {
          chapterName: "第一卷 第一章 魔法师之国 [免费]",
          isFree: 0
        },
        {
          chapterName: "第一卷 第一章 魔法师之国 [免费]",
          isFree: 0
        },
        {
          chapterName: "第一卷 第一章 魔法师之国 [免费]",
          isFree: 0
        },
        {
          chapterName: "第一卷 第一章 魔法师之国 [免费]",
          isFree: 0
        },
        {
          chapterName: "第一卷 第一章 魔法师之国 [免费]",
          isFree: 0
        },
        {
          chapterName: "第一卷 第一章 魔法师之国 [免费]",
          isFree: 0
        },
        {
          chapterName: "第一卷 第一章 魔法师之国 [免费]",
          isFree: 0
        },
        {
          chapterName: "第一卷 第一章 魔法师之国 [免费]",
          isFree: 0
        },
        {
          chapterName: "第一卷 第一章 魔法师之国 [免费]",
          isFree: 0
        },
        {
          chapterName: "第一卷 第一章 魔法师之国 [免费]",
          isFree: 0
        },
        {
          chapterName: "第一卷 第一章 魔法师之国 [免费]",
          isFree: 0
        },
        {
          chapterName: "第一卷 第一章 魔法师之国 [免费]",
          isFree: 0
        },
        {
          chapterName: "第一卷 第一章 魔法师之国 [免费]",
          isFree: 0
        },
        {
          chapterName: "第一卷 第一章 魔法师之国 [免费]",
          isFree: 0
        },
        {
          chapterName: "第一卷 第一章 魔法师之国 [免费]",
          isFree: 0
        },
        {
          chapterName: "第一卷 第一章 魔法师之国 [免费]",
          isFree: 0
        },
        {
          chapterName: "第一卷 第一章 魔法师之国 [免费]",
          isFree: 1
        },
        {
          chapterName: "第一卷 第一章 魔法师之国 [免费]",
          isFree: 1
        },
        {
          chapterName: "第一卷 第一章 魔法师之国 [免费]",
          isFree: 1
        },
        {
          chapterName: "第一卷 第一章 魔法师之国 [免费]",
          isFree: 1
        },
        {
          chapterName: "第一卷 第一章 魔法师之国 [免费]",
          isFree: 1
        },
        {
          chapterName: "第一卷 第一章 魔法师之国 [免费]",
          isFree: 1
        },
        {
          chapterName: "第一卷 第一章 魔法师之国 [免费]",
          isFree: 1
        },
        {
          chapterName: "第一卷 第一章 魔法师之国 [免费]",
          isFree: 1
        },
        {
          chapterName: "第一卷 第一章 魔法师之国 [免费]",
          isFree: 1
        },
        {
          chapterName: "第一卷 第一章 魔法师之国 [免费]",
          isFree: 1
        },
        {
          chapterName: "第一卷 第一章 魔法师之国 [免费]",
          isFree: 1
        },
        {
          chapterName: "第一卷 第一章 魔法师之国 [免费]",
          isFree: 1
        },
        {
          chapterName: "第一卷 第一章 魔法师之国 [免费]",
          isFree: 1
        },
        {
          chapterName: "第一卷 第一章 魔法师之国 [免费]",
          isFree: 1
        },
        {
          chapterName: "第一卷 第一章 魔法师之国 [免费]",
          isFree: 1
        },
        {
          chapterName: "第一卷 第一章 魔法师之国 [免费]",
          isFree: 1
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