import { createApp } from 'vue';
import router from './router';
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';
import App from './App.vue';
import zhCn from 'element-plus/es/locale/lang/zh-cn'; // 因element-plus默认是英文，我们指定一下默认中文
// 图标并进行全局注册
import * as ElementPlusIconsVue from '@element-plus/icons-vue';
const app = createApp(App);

// 注册ElementPlus
app.use(ElementPlus, {
  locale: zhCn, // 语言设置
  // size: Cookies.get('size') || 'medium' // 设置默认尺寸
});

for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component);
}
// 注册路由
app.use(router);
app.mount('#app');
