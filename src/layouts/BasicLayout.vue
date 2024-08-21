<script setup>
import { useRouter } from "vue-router";
import { useStore } from "vuex";
const route = useRouter();
const rout = (key) => {
  route.push({
    path: key,
  });
};

const store = useStore();
</script>
<template>
  <a-layout class="layout">
    <a-layout-sider
      class="sider"
      :width="300"
      theme="dark"
      breakpoint="xl"
      collapsible
    >
      1
    </a-layout-sider>
    <a-layout>
      <a-layout-header class="header">
        <a-popover position="bottom">
          <a-avatar class="avatar" :size="60">
            {{ store.state.user.loginUser.userName }}
          </a-avatar>
          <template #content>
            <p class="loginOut" @click="rout('/user/login')">登出账户</p>
          </template>
        </a-popover>
      </a-layout-header>
      <a-layout-content>
        <router-view />
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>
<style scoped>
.layout {
  position: absolute;
  width: 100%;
  height: 100%;
}
.header {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  height: 10%;
  width: 100%;
  background-color: #cfd3dc;
}
.header .avatar {
  margin-right: 3%;
}
.loginOut:hover {
  background-color: red;
}
</style>
