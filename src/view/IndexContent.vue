<template>
  <div>
    <el-row>
      <!-- 走马灯和公告 -->
      <el-col class="content-el-col carousel-and-notice" style="border:1px solid blue;">
        <carousel-and-notice></carousel-and-notice>
      </el-col>
      <!-- 猜你喜欢 -->
      <el-col class="content-el-col" style="border:1px solid blue;">
        <recommend></recommend>
      </el-col>
      <!-- 精选完本、本周点击榜 -->
      <el-col class="content-el-col" style="border:1px solid blue;">
        <el-row>
          <el-col :span="16" class="selected" style="border:1px solid pink;">
            <selected></selected>
          </el-col>
          <el-col :span="6" class="hot-in-week" :offset="2" style="border:1px solid pink">
            <hot-in-week></hot-in-week>
          </el-col>
        </el-row>
      </el-col>
      <!-- 最新发布、本月点击榜 -->
      <el-col class="content-el-col" style="border:1px solid blue;">
        <el-row>
          <el-col :span="17" class="selected" style="border:1px solid pink;">
            <recent-publish></recent-publish>
          </el-col>
          <el-col :span="6" class="hot-in-week" :offset="1" style="border:1px solid pink">
            <hot-in-month></hot-in-month>
          </el-col>
        </el-row>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import CarouselAndNotice from "@/components/CarouselAndNotice";
import Recommend from "@/components/Recommend";
import HotInWeek from "@/components/HotInWeek";
import Selected from "@/components/Selected";
import RecentPublish from "@/components/RecentPublish";
import HotInMonth from "@/components/HotInMonth";
export default {
  components: {
    CarouselAndNotice,
    Recommend,
    HotInWeek,
    Selected,
    RecentPublish,
    HotInMonth
  }
};
</script>

<style scoped>
.carousel-and-notice {
  background-color: white;
  border-radius: 10px 10px 10px 10px;
}
.content-el-col {
  margin-top: 15px;
}
.hot-in-week {
  margin-top: 20px;
}
.selected {
  margin-top: 20px;
}
</style>