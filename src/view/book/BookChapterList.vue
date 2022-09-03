<template>
    <div>
        <el-row>
            <el-col>
                <span>正文</span>
            </el-col>
            <el-col span="6" style="border:1px blue solid;margin-top:5px" v-for="(item, index) in chapters" :key="index">
                <span class="chapter-name"><a href="">{{ item.chapterName }}</a></span>
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
                    chapterName: '第一卷 第一章 魔法师之国 [免费]',
                    isFree: ''
                },
                                {
                    chapterName: '第一卷 第一章 魔法师之国 [免费]',
                    isFree: ''
                },
                                {
                    chapterName: '第一卷 第一章 魔法师之国 [免费]',
                    isFree: ''
                },
                                {
                    chapterName: '第一卷 第一章 魔法师之国 [免费]',
                    isFree: ''
                },
                                {
                    chapterName: '第一卷 第一章 魔法师之国 [免费]',
                    isFree: ''
                },
                                {
                    chapterName: '第一卷 第一章 魔法师之国 [免费]',
                    isFree: ''
                },
                  {
                    chapterName: '第一卷 第一章 魔法师之国 [免费]',
                    isFree: ''
                },
                  {
                    chapterName: '第一卷 第一章 魔法师之国 [免费]',
                    isFree: ''
                },
                  {
                    chapterName: '第一卷 第一章 魔法师之国 [免费]',
                    isFree: ''
                },
                  {
                    chapterName: '第一卷 第一章 魔法师之国 [免费]',
                    isFree: ''
                },
                  {
                    chapterName: '第一卷 第一章 魔法师之国 [免费]',
                    isFree: ''
                },
                  {
                    chapterName: '第一卷 第一章 魔法师之国 [免费]',
                    isFree: ''
                },
                  {
                    chapterName: '第一卷 第一章 魔法师之国 [免费]',
                    isFree: ''
                },
                  {
                    chapterName: '第一卷 第一章 魔法师之国 [免费]',
                    isFree: ''
                },
                  {
                    chapterName: '第一卷 第一章 魔法师之国 [免费]',
                    isFree: ''
                },
                  {
                    chapterName: '第一卷 第一章 魔法师之国 [免费]',
                    isFree: ''
                },
                  {
                    chapterName: '第一卷 第一章 魔法师之国 [免费]',
                    isFree: ''
                },
                  {
                    chapterName: '第一卷 第一章 魔法师之国 [免费]',
                    isFree: ''
                },
                  {
                    chapterName: '第一卷 第一章 魔法师之国 [免费]',
                    isFree: ''
                },  {
                    chapterName: '第一卷 第一章 魔法师之国 [免费]',
                    isFree: ''
                },
  {
                    chapterName: '第一卷 第一章 魔法师之国 [免费]',
                    isFree: ''
                },
                  {
                    chapterName: '第一卷 第一章 魔法师之国 [免费]',
                    isFree: ''
                },
                  {
                    chapterName: '第一卷 第一章 魔法师之国 [免费]',
                    isFree: ''
                },
                  {
                    chapterName: '第一卷 第一章 魔法师之国 [免费]',
                    isFree: ''
                },
                  {
                    chapterName: '第一卷 第一章 魔法师之国 [免费]',
                    isFree: ''
                },
                  {
                    chapterName: '第一卷 第一章 魔法师之国 [免费]',
                    isFree: ''
                },
                  {
                    chapterName: '第一卷 第一章 魔法师之国 [免费]',
                    isFree: ''
                },
                  {
                    chapterName: '第一卷 第一章 魔法师之国 [免费]',
                    isFree: ''
                },
                  {
                    chapterName: '第一卷 第一章 魔法师之国 [免费]',
                    isFree: ''
                },
                  {
                    chapterName: '第一卷 第一章 魔法师之国 [免费]',
                    isFree: ''
                }

            ]
        }
    }
}
</script>

<style scoped>
.chapter-name > a{
    font-size: 10px;
    color: black;
}
</style>