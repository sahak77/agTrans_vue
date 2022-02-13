<template>
  <div class="container flex-center">
    <el-form :model="form" :rules="rules" ref="form" class="login_form">
      <el-row justify="center">
        <el-col>
          <el-form-item prop="email">
            <el-input v-model="form.email" placeholder="mail" />
          </el-form-item>
        </el-col>
        <el-col>
          <el-form-item prop="password">
            <el-input
              type="password"
              v-model="form.password"
              placeholder="password"
            />
          </el-form-item>
        </el-col>
        <el-button @click="submit('form')" type="primary">
          Log in<el-icon class="el-icon--right"><Edit /></el-icon>
        </el-button>
      </el-row>
    </el-form>
  </div>
</template>

<script>
import { Edit } from "@element-plus/icons-vue";

export default {
  data() {
    return {
      form: {
        email: "",
        password: "",
      },
      rules: {
        email: [
          {
            required: true,
            message: "Please input name",
            trigger: "blur",
          },
        ],
        password: [
          {
            required: true,
            min: 8,
            message: "min Length should be 8",
            trigger: "blur",
          },
        ],
      },
    };
  },
  components: {
    Edit,
  },
  methods: {
    submit(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) this.$store.dispatch("loginAction", this.form);
        else return false;
      });
    },
  },
};
</script>

<style scoped>
.login_form {
  padding: 20px;
  background-color: antiquewhite;
}
</style>
