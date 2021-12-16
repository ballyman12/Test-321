import { createWebHistory, createRouter } from "vue-router";

const routes = [
  {
    path: "",
    name: "Home",
    component: () => import("./layouts/main/Main.vue"),
    children: [
      {
        path: "",
        redirect: "/campaign",
      },
      {
        path: "/campaign",
        name: "Campaign",
        component: () => import("./views/CampaignPage.vue"),
      },
      {
        path: "/campaign/createCampaign",
        name: "Create-Campaign",
        component: () => import("./views/form/CreateCampaign.vue"),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
