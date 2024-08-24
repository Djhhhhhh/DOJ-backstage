import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import UserLayout from "@/layouts/UserLayout.vue";
import UserLogin from "@/views/user/LoginView.vue";
import MdEditor from "@/components/MdEditor.vue";
import AddQuestionView from "@/views/question/AddQuestionView.vue";
import ACCESS_ENUM from "@/access/accessEnum";
import ManageQuestionView from "@/views/question/ManageQuestionView.vue";
const routes: Array<RouteRecordRaw> = [
  {
    path: "/user",
    name: "用户",
    component: UserLayout,
    children: [
      {
        path: "login",
        name: "用户登录",
        component: UserLogin,
      },
    ],
  },
  {
    path: "/write",
    name: "文档编辑",
    component: MdEditor,
  },
  {
    path: "/add/question",
    name: "添加题目页",
    component: AddQuestionView,
    meta: {
      access: ACCESS_ENUM.ADMIN,
    },
  },
  {
    path: "/manage/question",
    name: "管理题目",
    component: ManageQuestionView,
  },
  {
    path: "/update/question",
    name: "修改题目",
    component: AddQuestionView,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
