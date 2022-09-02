<template>
  <div>
    <!-- 本月最热 -->
    <el-row>
        <el-col><b style="font-size:25px">本月点击榜</b></el-col>
      <el-col style="border:1px red solid">
        <div>
          <table border="1px red">
            <tr>
              <td>
                <b>1</b>
              </td>
              <td>替嫁医妃：王爷起来喝药了</td>
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

</style>