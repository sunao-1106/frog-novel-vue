<template>
  <div class="wrapper">
    <div
      style="
        margin: 150px auto;
        background-color: #fff;
        width: 500px;
        height: 600px;
        padding: 20px;
        border-radius: 10px;
      "
    >
      <div style="margin: 20px 0; text-align: center; font-size: 24px">
        <b>加入青蛙</b>
      </div>
      <div style="text-align: center">
        <!--  action = " 图片的上传地址 " -->
      <el-upload
        class="avatar-uploader"
        action = "http://localhost:88/api/user/upload"
        name="img"
        :show-file-list="false"
        :on-success="handleAvatarSuccess"
        :before-upload="beforeAvatarUpload"
      >
        <img v-if="imageUrl" :src="imageUrl" class="avatar" />
        <i v-else class="el-icon-plus avatar-uploader-icon"></i>
      </el-upload>
      </div>
      <el-form :rules="rules" :model="user" ref="userForm">
        <el-form-item prop="username">
          <el-input
            placeholder="请输入账号"
            size="medium"
            style="margin: 10px 0"
            prefix-icon="el-icon-user"
            v-model="user.username"
          ></el-input>
        </el-form-item>

        <el-form-item prop="nickname">
          <el-input
            placeholder="请输入昵称"
            size="medium"
            style="margin: 10px 0"
            prefix-icon="el-icon-user"
            v-model="user.nickname"
          ></el-input>
        </el-form-item>

        <el-form-item prop="password">
          <el-input
            placeholder="请输入密码"
            size="medium"
            style="margin: 10px 0"
            prefix-icon="el-icon-lock"
            show-password
            v-model="user.password"
          ></el-input>
        </el-form-item>

        <el-form-item prop="confirmPassword">
          <el-input
            placeholder="确认密码"
            size="medium"
            style="margin: 10px 0"
            prefix-icon="el-icon-lock"
            show-password
            v-model="user.confirmPassword"
          ></el-input>
        </el-form-item>

        <el-form-item style="margin: 10px 0">
          <el-row>
            <el-col :span="3">
              <el-button
                style="text-align: right"
                type="primary"
                size="small"
                autocomplete="off"
                @click="$router.push('/login')"
                >登录</el-button
              >
            </el-col>
            <el-col :span="3" :offset="18">
              <el-button
                style="text-align: right"
                type="primary"
                size="small"
                autocomplete="off"
                @click="register"
                >注册</el-button
              >
            </el-col>
          </el-row>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>
<script>
export default {
  name: "Login",
  data() {
    return {
      //图片上传成功后显示图片的地址
      imageUrl: "",
      //用户的信息
      user: {
        username:"",
        nickname:"",
        password:"",
      },
      rules: {
        nickname: [
          { required: true, message: "请输入昵称", trigger: "blur" },
          {
            min: 5,
            max: 10,
            message: "长度在 5 到 10 个字符",
            trigger: "blur",
          },
        ],
        username: [
          { required: true, message: "请输入用户名", trigger: "blur" },
          {
            min: 3,
            max: 10,
            message: "长度在 3 到 10 个字符",
            trigger: "blur",
          },
        ],
        password: [
          { required: true, message: "请输入密码", trigger: "blur" },
          {
            min: 3,
            max: 10,
            message: "长度在 3 到 10 个字符",
            trigger: "blur",
          },
        ],
        confirmPassword: [
          { required: true, message: "请输入密码", trigger: "blur" },
          {
            min: 3,
            max: 10,
            message: "长度在 3 到 10 个字符",
            trigger: "blur",
          },
        ],
      },
    };
  },
  methods: {
    //注册函数
    register() {
      //获取用户名密码等信息，获取头像，获取密码
    console.log("头像"+this.imageUrl+"用户信息"+this.user);
      this.$http({
        method: "post",
        url: "user/Register",
        data: {
          avatar: this.imageUrl,
          username: this.user.username,
          password: this.user.password,
          nickname: this.user.nickname
        },
      }).then((result)=>{
          //注册成功
          if(result.data.code==0){
            this.$message({
            message: result.data.msg,
            type: "success",
          });
          this.$options.methods.rome.bind(this)()
         //跳转登录
          this.$router.push({ path: "/login" })
          //注册失败
          }else{
            this.$message.error(result.data.msg);  
          }
      })
    },
    //清空填写的数据
    rome(){
      this.imageUrl="",
      //用户的信息
      this.user.username="",
      this.user.nickname="",
      this.user.password=""
    },


    //上传接收后加载
    handleAvatarSuccess(response,res, file) {
      console.log(response);
      this.imageUrl = response.msg

  // this.imageUrl = URL.createObjectURL(response.msg);


  // const binaryData = [];
  // binaryData.push(response.msg);
  // this.imageUrl = window.URL.createObjectURL(new Blob(binaryData,{type:'application/pdf;chartset=UTF-8'}));
    },
    beforeAvatarUpload(file) {
      const isJPG = file.type === "image/jpeg";
      const isLt2M = file.size / 1024 / 1024 < 2;

      if (!isJPG) {
        this.$message.error("上传头像图片只能是 JPG 格式!");
      }
      if (!isLt2M) {
        this.$message.error("上传头像图片大小不能超过 2MB!");
      }
      return isJPG && isLt2M;
    },
  },
};
</script>
<style>
.wrapper {
  height: 100vh;
  /* 背景颜色 */
  background-image: linear-gradient(to bottom right, #f6f6f6, #fcfcfc);
  overflow: hidden;
}
.avatar-uploader .el-upload {
  border: 1px dashed #d9d9d9;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}
.avatar-uploader .el-upload:hover {
  border-color: #409eff;
}
.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 80px;
  height: 80px;
  line-height: 80px;
  text-align: center;
}
.avatar {
  width: 80px;
  height: 80px;
  display: block;
}
</style>