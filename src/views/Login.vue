<template>
  <div class="form">
    <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
      <el-form-item label="用户名" prop="username"><el-input type="text" v-model="ruleForm.username" autocomplete="off"></el-input></el-form-item>
      <el-form-item label="密码" prop="password"><el-input type="password" v-model="ruleForm.password" autocomplete="off"></el-input></el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm('ruleForm')">提交</el-button>
        <el-button @click="resetForm('ruleForm')">重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {

  data() {


    return {
      ruleForm: {
        username: 'admin',
        password: '123456',
      },
      rules: {
        username: [{ required: true, message: '请输入用户名', trigger: 'blur'  }],
        password: [{ required: true, message: '请输入密码', trigger: 'blur'  }],
      }
    };
  },
  methods: {
    submitForm(formName) {

      this.$refs[formName].validate(valid => {
        if (valid) {
          localStorage.setItem('user',JSON.stringify(this.ruleForm));
          this.$router.push('/Home');

        } else {
          console.log('error submit!!');
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    }
  }
};
</script>

<style></style>
