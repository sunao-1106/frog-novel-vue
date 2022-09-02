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
        <b>登录</b>
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

        <el-form-item style="margin: 10px 0; text-align: right">
          <el-switch
            v-model="value1"
            active-text="记住密码"
          >
          <!--  inactive-text="无需记住" -->
          </el-switch>
          <el-button
            type="primary"
            size="small"
            autocomplete="off"
            @click="login"
            >登录</el-button
          >
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
      user: {},
      value1: true,
      value2: true,
      rules: {
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
      },
    };
  },
  methods: {
    login() {
      //登录函数
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