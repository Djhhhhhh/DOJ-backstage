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
console.log(store);
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
      <a-menu
        :default-open-keys="['1']"
        :default-selected-keys="['0_3']"
        :style="{ width: '100%' }"
        @menu-item-click="onClickMenuItem"
      >
        <a-menu-item @click="rout('/write')"> markdown编辑器 </a-menu-item>
        <a-menu-item @click="rout('/add/question')"> 添加题目 </a-menu-item>
        <a-menu-item @click="rout('/manage/question')">
          查询题目列表
        </a-menu-item>
      </a-menu>
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
