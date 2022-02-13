<template>
  <div class="Header">
    <div class="menu">
      <router-link active-class="active" to="/orders">order</router-link>
      <router-link active-class="active" to="/clients">client</router-link>
      <a @click="logOut">log out</a>
    </div>
    <div class="headTitle">
      <h1>{{ title }}</h1>
       <router-link v-if="addLink" :to="addLink">
       <el-icon :size="30" class=""><Edit /></el-icon>
       </router-link>
    </div>
  </div>
</template>

<script>
import { Edit } from "@element-plus/icons-vue";

export default {
  name: "Header",
  props: {
    title: String,
    addLink: String
  },
  components: {
    Edit,
  },
  methods: {
    logOut() {
      this.$store.commit("logOut");
    },
  },
};
</script>

<style scoped>
.Header {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 90px;
  background-color: antiquewhite;
}
.menu a {
  margin: 20px 30px;
}
.headTitle {
  margin-right: 50px;
  display: flex;
  flex-direction: row;
  align-items: center;
}
.headTitle i {
  margin-left: 20px;
}
.active {
  color: red;
}
</style>