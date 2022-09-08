import Vue from "vue";
import App from "./App"; //导入.vue文件时，后缀可以不写
import router from "./router"; //默认导入文件夹下的index.js

Vue.config.productionTip = false; //productionTip设置为 false ，可以阻止 vue 在启动时生成生产提示

new Vue({
  el: "#app",
  router,
  components: { App },
  template: "<App/>"
});
