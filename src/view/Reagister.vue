<template>
  <div class="wrapper">
    <div
      style="
        margin: 150px auto;
        background-color: #fff;
        width: 500px;
        height: 400px;
        padding: 20px;
        border-radius: 10px;
      "
    >
      <div style="margin: 20px 0; text-align: center; font-size: 24px">
        <b>加入青蛙</b>
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
                @click="login"
                >确定</el-button
              >
            </el-col>
            <el-col :span="3" :offset="18">
              <el-button
                style="text-align: right"
                type="primary"
                size="small"
                autocomplete="off"
                @click="$router.push('/login')"
                >登录</el-button
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
      user: {},
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
    login() {
      //注册函数
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
</style>