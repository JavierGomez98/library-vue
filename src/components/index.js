import * as Components from "./components";
import '../assets/scss/main.scss'

const MigranteVue = {
    install(Vue) {
        (function registerComponents(components) {
            if (components) {
                for (const key in components) {
                    const component = components[key]
                    if (component)
                        Vue.component(key, component)
                }
                return true
            }
            return true
        })(Components)

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
    }
}

export * from './components'

export { BootstrapVue } from 'bootstrap-vue'

export default MigranteVue