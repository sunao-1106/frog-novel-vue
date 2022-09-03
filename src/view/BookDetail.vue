<template>
    <div>
        <el-row>
            <!-- 小说详细信息卡片 -->
            <el-col :span="22" :offset="1" class="book-detail-info" style="border:1px solid blue;height:340px">
                <book-detail-info></book-detail-info>
            </el-col>
            <!-- 小说讨论区、小说章节目录 -->
            <el-col :span="22" :offset="1" class="comment-and-chapter" style="border:1px solid blue;">
                <el-row>
                    <el-col style="border:1px red solid;font-size:20px" :span="3">
                        <a>小说讨论区</a>
                    </el-col>
                    <el-col style="border:1px red solid;font-size:20px" :offset="1" :span="4">
                         <a>小说章节目录</a>
                    </el-col>
                    <el-col style="border:1px red solid;">
                        <router-view/>
                    </el-col>
                </el-row>
                <hr>
            </el-col>
        </el-row>
    </div>
</template>

<script>
import BookDetailInfo from '@/components/BookDetailInfo'
export default {
    components: { BookDetailInfo }
}
</script>

<style scoped>
.book-detail-info {
    background-color: white;
    border-radius: 10px 10px 10px 10px;
}
.comment-and-chapter {
    background-color: white;
    margin-top: 30px;
}
</style>