<template>
  <div>
    <el-card header="请先登录" class="login-card">
      <el-form @submit.native.prevent="login">
        <el-form-item label="用户名">
          <el-input v-model="model.username"></el-input>
        </el-form-item>
        <el-form-item label="密码">
          <el-input type="password" v-model="model.password"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" native-type="submit">登录</el-button>
          <el-button type="info" @click="model = {}">重置</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      model: {
        username: 'admin',
        password: '123456'
      }
    }
  },
  methods: {
    async login() {
      const res = await this.$http.post('login', this.model)
      localStorage.token = res.data.token
      this.$router.push('/')
      this.$message.success('登录成功')
    }
  }
}
</script>

<style lang="less" scoped>
.login-card {
  width: 40rem;
  margin: 10rem auto;
}
</style>
