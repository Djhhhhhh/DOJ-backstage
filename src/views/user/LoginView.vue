<script setup lang="ts">
import { reactive } from "vue";
import { UserControllerService, UserLoginDTO } from "@/api";
import { useRouter } from "vue-router";
const route = useRouter();
const user = reactive({
  userAccount: "",
  userPassword: "",
} as UserLoginDTO);
/**
 * 提交表单
 * @param data
 */
const handleSubmit = async () => {
  const res = await UserControllerService.loginUserUsingPost(user);
  if (res.code === 0) {
    alert("登录成功");
    route.push("/");
  } else {
    alert("登陆失败");
  }
};
</script>
<template>
  <div
    style="
      height: 100%;
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
    "
  >
    <a-card class="card">
      <a-card-meta title="登录" description="This is loginPage">
        <template #avatar>
          <div style="width: 100%; height: 100%">
            <a-form :model="user" :style="{ width: '100%' }" layout="vertical">
              <a-form-item
                field="name"
                tooltip="Please enter username"
                label="Username"
              >
                <a-input
                  v-model="user.userAccount"
                  placeholder="please enter your username..."
                />
              </a-form-item>
              <a-form-item field="post" label="Password">
                <a-input
                  v-model="user.userPassword"
                  placeholder="please enter your password..."
                />
              </a-form-item>
              <a-form-item field="isRead">
                <a-checkbox> 记住密码 </a-checkbox>
              </a-form-item>
              <a-form-item>
                <a-button
                  type="outline"
                  long
                  style="margin-right: 200px"
                  @click="handleSubmit()"
                >
                  登录
                </a-button>
                <a-button type="outline" long>注册</a-button>
              </a-form-item>
            </a-form>
          </div>
        </template>
      </a-card-meta>
    </a-card>
  </div>
</template>

<style>
.card {
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin-top: 15%;
  width: 35%;
  background-color: #f0f0f0;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}
</style>
