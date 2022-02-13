<template>
  <Header title="Clients" addLink="/addclient" />
  <el-table
    :data="this.$store.state.clients.clientsData"
    height="250"
    style="width: 80%"
    @row-click="getUser"
  >
    <el-table-column prop="name" label="Name" width="180">
      <template #default="scope"> 
        <router-link :to="`/updateclient/${scope.row.id}`">{{ scope.row.name }}</router-link>
      </template>
    </el-table-column>
    <el-table-column prop="address" label="Address" width="180" />
    <el-table-column prop="phone" label="Phone" width="180" />
    <el-table-column prop="notes" label="Notes" />
  </el-table>
</template>

<script>
import Header from "../../../layouts/Header/Header.vue";

export default {
  name: "Clients",
  components: {
    Header,
  },
  created() {
    this.$store.dispatch("loadClients", { offset: 0, length: 30 });
  },
  unmounted() {
    this.$store.commit('clearClientsData')
  },
  methods: {
    getUser(data) {
      console.log(data);
    },
  },
};
</script>

<style>
</style>