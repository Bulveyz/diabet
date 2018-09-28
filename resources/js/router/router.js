import Vue from 'vue'
import VueRouter from 'vue-router'
import {routes} from "./routes";

Vue.use(VueRouter);

export const router = new VueRouter({
  mode: 'history',
  scrollBehavior (to, from, savedPosition) {
    let position = { x: 0, y: 0 }
    if (savedPosition) {
      position = savedPosition
    }
    return new Promise((resolve, reject) => {
      resolve(position);
    })
  },
  routes
});