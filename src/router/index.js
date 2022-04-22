import { createRouter, createWebHashHistory } from "vue-router";
// 路由信息
const routes = [
  {
    path: "/Login",
    name: "login",
    component: () => import("@/views/login/Login.vue"),
  },
];

// 导出路由

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    // 模拟 “滚动到锚点” 的行为：
    if (to.hash) {
      return {
        el: to.hash,
        behavior: "smooth",
      };
    } else {
      return { top: 0 };
    }
  },
});

router.beforeEach((to, from, next) => {
  const isAuthenticated = localStorage.getItem("token");
  if (to.name !== "login" && !isAuthenticated) next({ name: "login" });
  else next();
});

export default router;
