<template>
  <div>
    <el-row>
      <!-- 走马灯 -->
      <el-col :span="15">
        <el-carousel :interval="4000" type="card" height="250px">
          <el-carousel-item v-for="(item, index) in bookList" :key="index">
            <h3 class="medium">
              <el-image style="width: 330px; height: 250px" :src="item.image" fit="fit"></el-image>
            </h3>
          </el-carousel-item>
        </el-carousel>
      </el-col>
      <!-- 公告栏 -->
      <!-- 1 + 8 + 15=24 正好占1行 -->
      <el-col :span="8" :offset="1">
        <div class="public-notice">
          <p style="font-size:25px">
            <b>公告</b>
          </p>
          <hr />
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [1, 2, 3],
      bookList: [
        {
          id: 1,
          image:
            "https://bossaudioandcomic-1252317822.image.myqcloud.com/activity/document/e74b548e6b94bc55439a0ddd10060ffb.jpg"
        },
        {
          id: 2,
          image:
            "https://bossaudioandcomic-1252317822.image.myqcloud.com/activity/document/60ac0f6c16e3d3e9b09cac3e012e3fdb.jpg"
        },
        {
          id: 3,
          image:
            "https://bossaudioandcomic-1252317822.image.myqcloud.com/activity/document/1f8da54caaa3a1f801f5f7ee6ce5322d.jpg"
        }
      ]
    };
  }
};
</script>

<style>
.el-carousel__item h3 {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  line-height: 200px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
.public-notice {
  margin-top: -20px;
  height: 280px;
  background-color: white;
  border-radius: 10px 10px 10px 10px;
}
</style>