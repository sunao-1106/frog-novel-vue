<template>
  <div class="user-center">
    <div style="height: 15px"></div>
    <el-row>
      <el-col :span="4">
        <el-avatar
          :size="80"
          src= this.userVo.avatar
        ></el-avatar>
      </el-col>
      <el-col :span="9">
        <div>
          <span>
            <p>{{userVo.nickname}}</p>
          </span>
          <span v-show="this.show">
            <el-tag type="danger" size="mini">
              <b>VIP</b>
            </el-tag>
          </span>
          <span style="font-size:10px">{{userVo.payAmount}}</span>
          <span>
            <el-link type="primary" style="font-size:10px">立即续费</el-link>
          </span>
        </div>
      </el-col>
      <el-col>
        <div class="read-history">
          <div style="text-align: center">
          <span style="font-size:20px;">浏览历史</span>
          </div>

          <hr />
          <table class="read-history-table" style="border-collapse:collapse">
            <tr>
              <td style="width:90px;color: black">类别</td>
              <td style="width:130px;color: black">书名</td>
              <td style="width:195px;color: black">上次浏览章节</td>
              <td style="width:100px;color: black">最近更新时间</td>
              <td style="width:60px;color: black">操作</td>
            </tr>
            <tr v-for="(item, index) in readHistory" :key="index">
              <td>
                <el-link href>{{ item.categroyName }}</el-link>
              </td>
              <td>
                <el-link href>{{ item.bookName }}</el-link>
              </td>
              <td>
                <el-link href>{{ item.preContentId }}</el-link>
              </td>
              <td>{{ item.updateTime }}</td>
              <td>
                <el-link type="primary" href>继续阅读</el-link>
              </td>
            </tr>
            <tr></tr>
          </table>
        </div>
      </el-col>

      <el-col :offset="6" class="pagination">
        <el-pagination layout="prev, pager, next" :total="50"></el-pagination>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      //用户信息
      userVo:{
        nickname: "aaa",
        avatar: "",
        vip: false,
        payAmount: ""
      },
      
      show:false,
      name:"",
      //浏览历史
      readHistory: [
        {
          categroyName: "武侠小说",
          bookName: "仙剑奇侠传",
          preContentId: "第十六章 强强来了",
          updateTime: "2019-10-09"
        },
        {
          categroyName: "武侠小说",
          bookName: "仙剑奇侠传",
          preContentId: "第十六章 强强来了",
          updateTime: "2019-10-09"
        }
      
      ]
    };
  },
  //页面创建时请求页面资源
  created () {
        //个人信息
        this.$http({
         method: "get",
         url: "user/UserInfo",
        }).then((result)=>{
            console.log("====="+result.data.vip);
            console.log(result.data.os);
             this.userVo.nickname = result.data.nickname
             this.userVo.avatar = result.data.avatar,
             this.userVo.payAmount = result.data.payAmount
            //  等于0就是会员
             if(result.data.vip==0){
                this.show=true
             }else{
                this.show=false
             }
        })
        //个人浏览历史
        // this.$http({
        //   method: "get",
        //   url: "user/bookHistory"
        // }).then((result)=>{
        //   //填充数据
        //   result.data
        // })
  },
};
</script>

<style scoped>
.read-history-table td {
  font: 15px/21px PingFangSC-Regular, "-apple-system", Simsun;
  color: #727377;
}
.read-history {
  margin-top: 10px;
}
.read-history-table > tr:first-child {
  background: #ededed;
}
.user-center {
  margin: auto;
  width: 600px;
}
.pagination {
  margin-top: 10px;
}
</style>