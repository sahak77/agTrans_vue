<template>
    <Header title="Clients" />

  <div>
    <el-form :model="form" :rules="rules" ref="form" class="login_form">
        {{ this.$store.clients }}

      <el-row justify="center">
        <el-col>
          <el-form-item prop="name">
            <el-input v-model="form.name" placeholder="name" />
          </el-form-item>
        </el-col>
        <el-col>
          <el-form-item prop="address">
            <el-input v-model="form.address" placeholder="address" />
          </el-form-item>
        </el-col>
        <el-col>
          <el-form-item prop="phone">
            <el-input v-model="form.phone" placeholder="phone" />
          </el-form-item>
        </el-col>
        <el-col>
          <el-form-item prop="note">
            <el-input v-model="form.note" placeholder="note" />
          </el-form-item>
        </el-col>
        <el-button @click="submit('form')" type="primary">
          {{ this.$route.params.id ? "update client" : "add client" }}
        </el-button>
      </el-row>
    </el-form>
  </div>
</template>

<script>
import Header from "../../../layouts/Header/Header.vue";

export default {

  name: "addClient",
  data() {
    return {
      form: {
        name: "",
        address: "",
        phone: "",
        note: "",
      },
    };
  },
  components: {
    Header,
  },
  methods: {
    submit() {
      console.log(this.form);
      if (this.$route.params.id) {
          this.$store.dispatch('updateClient', { ...this.form, id: this.$route.params.id })
      } else {
         this.$store.dispatch('addClient', this.form)
      }
    }
  },
  watch: {
    ['$store.state.clients.getClient']: function() {
      this.form.name = this.$store.state.clients.getClient.name || "";
      this.form.address = this.$store.state.clients.getClient.address || "";
      this.form.phone = this.$store.state.clients.getClient.phone || "";
      this.form.note = this.$store.state.clients.getClient.note || "";
    },
  },
  created() {
    if(this.$route.params.id) this.$store.dispatch('getClient', this.$route.params.id)
  }
};
</script>

<style>
</style>