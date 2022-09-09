<template>
  <div class="book-detail">
    <el-row>
      <!-- 小说封面图片 -->
      <el-col :span="5" class="noval-image">
        <el-image style="width: 180px; height: 245px;  box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.5);" src="http://r.m.biqu5200.net/cover/aHR0cDovL3FpZGlhbi5xcGljLmNuL3FkYmltZy8zNDk1NzMvMTAwMzY5NDMzMy8xODA=" fit="fit"></el-image>
      </el-col>
      <!-- 小说信息 -->
      <el-col :span="9" class="novel-description" style="height:250px">
        <h2>重生后，摄政王他不肯退婚</h2>
        <el-tag size="mini">标签一</el-tag>
        <el-tag type="success" size="mini">标签二</el-tag>
        <el-tag type="info" size="mini">标签三</el-tag>
        <el-tag type="warning" size="mini">标签四</el-tag>
        <el-tag type="danger" size="mini">标签五</el-tag>
        <p style="font-size: 15px; color: #a6a6a6;">作者：张三</p>
        <p style="font-size: 20px;">124.5万字</p>
        <div class="hidden-if-beyond" style="color:#666">
          【1v1，双洁，甜宠】
          世人皆知沈家嫡女沈清漪，生的钟灵毓秀，仙姿佚貌，可惜眼神不太好。
          放着温润若玉的摄政王不爱，偏偏去爱那个金玉其外败絮其中的梁王赵宪。【1v1，双洁，甜宠】
          世人皆知沈家嫡女沈清漪，生的钟灵毓秀，仙姿佚貌，可惜眼神不太好。
          放着温润若玉的摄政王不爱，偏偏去爱那个金玉其外败絮其中的梁王赵宪。
        </div>
      </el-col>
      <el-col>
        <hr style="border:1px solid #a6a6a6;" />
      </el-col>
      <el-col>
        <el-row>
          <el-col :span="3" :offset="7"> 
            <el-button type="warning">在线阅读</el-button>
          </el-col>
          <el-col :span="3" :offset="3">
            <el-button type="primary">加入书籍</el-button>
          </el-col>
        </el-row>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
/* 多行超出部分显示... */
.hidden-if-beyond {
  width: 350px;
  height: 105px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 5;
  -webkit-box-orient: vertical;
  font: 14px/21px PingFangSC-Regular, "-apple-system", Simsun;
}
.novel-description > p,
h2 {
  margin: 0;
  padding: 0;
  line-height: 2;
}
.novel-description {
  margin-top: 20px;
  margin-left: 10px;
}
.noval-image {
  margin-top: 20px;
  margin-left: 20px;
  
}

</style>