import Demo from 'vitepress-theme-demoblock/components/Demo.vue'
import DemoBlock from 'vitepress-theme-demoblock/components/DemoBlock.vue'
import type {App} from 'vue'
export function registerComponents(app:App<never>) {
  app.component('Demo', Demo)
  app.component('DemoBlock', DemoBlock)
}
