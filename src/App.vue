<script setup>
import BasicLayout from "@/layouts/BasicLayout.vue";
import { useRouter } from "vue-router";
import { onMounted } from "vue";
const route = useRouter();
/**
 * 全局项目初始化
 */
const doInit = () => {
  console.log("HELLO WORD");
};
onMounted(() => {
  doInit();
});
doInit();
</script>
<template>
  <div id="app">
    <template v-if="route.currentRoute.value.path.startsWith('/user')">
      <router-view />
    </template>
    <template v-else>
      <BasicLayout />
    </template>
  </div>
</template>
<style></style>
