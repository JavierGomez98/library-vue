import Vue from 'vue'
import App from './App.vue'
import './assets/scss/main.scss'
import MigranteVue from './components'

Vue.config.productionTip = false
Vue.use(MigranteVue);

Vue.directive('click-outside', {
  bind: function (el, binding, vnode) {
      window.event = function (event) {
          if (!(el == event.target || el.contains(event.target))) {
              vnode.context[binding.expression](event);
          }
      };
      document.body.addEventListener('click', window.event)
  },
  unbind: function () {
      document.body.removeEventListener('click', window.event)
  },
});

new Vue({
  render: h => h(App),
}).$mount('#app')