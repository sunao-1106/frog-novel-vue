<template>
  <div>
    <!-- 本月最热 -->
    <el-row>
        <el-col style="margin:0px 0px 10px 0px"><b style="font-size:25px">本月点击榜</b></el-col>
        <hr>
      <el-col>
        <div>
          <table>
            <tr>
              <td>
                <b>1</b>
              </td>
              <td><div>替嫁医妃：王爷起来喝药了sssss</div></td>
            </tr>
            <tr>
              <td>
                <b>2</b>
              </td>
              <td>替嫁医妃：王爷起来喝药了</td>
            </tr>
            <tr>
              <td>
                <b>3</b>
              </td>
              <td>替嫁医妃：王爷起来喝药了</td>
            </tr>
            <tr>
              <td>
                <b>4</b>
              </td>
              <td>替嫁医妃：王爷起来喝药了</td>
            </tr>
            <tr>
              <td>
                <b>5</b>
              </td>
              <td>替嫁医妃：王爷起来喝药了</td>
            </tr>
            <tr>
              <td>
                <b>6</b>
              </td>
              <td>替嫁医妃：王爷起来喝药了</td>
            </tr>
            <tr>
              <td>
                <b>7</b>
              </td>
              <td>替嫁医妃：王爷起来喝药了</td>
            </tr>
            <tr>
              <td>
                <b>8</b>
              </td>
              <td>替嫁医妃：王爷起来喝药了</td>
            </tr>
            <tr>
              <td>
                <b>9</b>
              </td>
              <td>替嫁医妃：王爷起来喝药了</td>
            </tr>
            <tr>
              <td>
                <b>10</b>
              </td>
              <td>替嫁医妃：王爷起来喝药了</td>
            </tr>
          </table>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
    
}
</script>

<style scoped>
/* 本月点击的前三名 排名文本添加彩色背景 */
table > tr:nth-child(1) > td:nth-child(1) > b {
  color: white;
  background-color: #ff589d;
}
table > tr:nth-child(2) > td:nth-child(1) > b {
  color: white;
  background-color: #84e7d6;
}
table > tr:nth-child(3) > td:nth-child(1) > b {
  color: white;
  background-color: #81de87;
}
table > tr > td:nth-child(1) > b {
  color: grey;
  background-color: #ededed;
}
/* 设置书名字体样式 */
table > tr > td:nth-child(2) {
 font: 14px/31px PingFangSC-Regular,'-apple-system',Simsun;
}

td div {
    overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  width: 175px;
}
</style>