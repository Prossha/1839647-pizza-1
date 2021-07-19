import Index from "@/views/Index.vue";
import Login from "@/views/Login.vue";
import Cart from "@/views/Cart.vue";
import Orders from "@/views/Orders.vue";
import Profile from "@/views/Profile";

export default [
  {
    path: "/",
    name: "IndexMain",
    component: Index,
    meta: { layout: "AppLayoutDefault" },
    children: [
      {
        path: "/login",
        name: "LoginIndex",
        component: Login,
        meta: { layout: "AppLayoutDefault" },
      },
    ],
  },
  {
    path: "/cart",
    name: "CartIndex",
    component: Cart,
    meta: { layout: "AppLayoutDefault" },
  },
  {
    path: "/orders",
    name: "OrdersIndex",
    component: Orders,
    meta: { layout: "AppLayoutMain" },
  },
  {
    path: "/profile",
    name: "ProfileIndex",
    component: Profile,
    meta: { layout: "AppLayoutMain" },
  },
];
