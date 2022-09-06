<template>
  <div class="userinfo-form">
    <!-- 昵称、性别、头像、手机号码、邮箱 -->
    <el-form ref="userForm" :model="userForm" label-width="80px">
      <el-form-item label="头像">
        上传图片！
      </el-form-item>
      <el-form-item label="昵称">
        <el-input v-model="userForm.nickname"></el-input>
      </el-form-item>
      <el-form-item label="性别">
        <el-radio-group v-model="userForm.gender">
          <el-radio label="男"></el-radio>
          <el-radio label="女"></el-radio>
        </el-radio-group>
      </el-form-item>
            <el-form-item label="手机号">
        <el-input v-model="userForm.phone"></el-input>
      </el-form-item>
            <el-form-item label="邮箱">
        <el-input v-model="userForm.email"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">立即修改</el-button>
        <el-button>取消</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      userForm: {
        nickname: "",
        gender: "",
        phone: "",
        email: ""
      }
    };
  },
  methods: {
    onSubmit() {
      console.log("submit!");
    }
  }
};
</script>

<style scoped>
.userinfo-form {

  width: 400px;
 
  margin: auto;
}

</style>