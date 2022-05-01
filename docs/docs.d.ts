// declare module 'vitepress-theme-demoblock/components/Demo.vue' {
//   const demoblock: any
//   export default demoblock
// }

// declare module 'vitepress-theme-demoblock/components/DemoBlock.vue' {
//   const demoblock: any
//   export default demoblock
// }

declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/ban-types
  const component: DefineComponent<{}, {}, any>
  export default component
}
