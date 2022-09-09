<template>
  <div class="wrapper">
    <div
      style="
        margin: 150px auto;
        background-color: #fff;
        width: 500px;
        height: 300px;
        padding: 20px;
        border-radius: 10px;
      "
    >
      <div style="margin: 20px 0; text-align: center; font-size: 24px">
        <b>青蛙小说</b>
      </div>

      <el-form :rules="rules" :model="user" ref="userForm">
        <el-form-item prop="username">
          <el-input
            size="medium"
            style="margin: 10px 0"
            prefix-icon="el-icon-user"
            v-model="user.username"
          ></el-input>
        </el-form-item>

        <el-form-item prop="password">
          <el-input
            size="medium"
            style="margin: 10px 0"
            prefix-icon="el-icon-lock"
            show-password
            v-model="user.password"
          ></el-input>
        </el-form-item>

        <el-row :gutter="20">
          <el-col :span="7">
            <el-button
              type="primary"
              size="small"
              autocomplete="off"
              @click="login"
              >登录</el-button
            >
          </el-col>
          <el-col :span="7" :offset="10">
            <el-switch v-model="value1" inactive-text="记住密码">
              <!-- active-text="记住密码" -->
            </el-switch>
          </el-col>
        </el-row>

        <el-form-item> </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      user: {},
      value1: true,
      value2: true,
      rules: {
        username: [
          { required: true, message: "请输入用户名", trigger: "blur" },
          {
            min: 2,
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
      },
    };
  },
  methods: {
    login() {
      //登录函数
       this.$refs['userForm'].validate((valid) => {
                        if (valid) {
                                //只有不为空在发送请求   不然浪费资源
                            this.request.post("/user/login",this.user).then(res => {
                                if (res.code="200") {

                                    localStorage.setItem("user",JSON.stringify(res.data))  //存储用户信息到浏览器

                                    this.$router.push("/index")
                                    this.$message.success("登录成功")
                                }else {
                                    this.$message.error(res.msg)
                                }
                            })

                        } else {
                            return false;
                        }
                    });
    },
  },
};
</script>

<style scoped>
.wrapper {
  height: 100vh;
  /* 背景颜色 */
  background-image: linear-gradient(to bottom right, #f6f6f6, #f9f9f9);
  overflow: hidden;
}

</style>