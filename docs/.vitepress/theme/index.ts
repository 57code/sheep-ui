import DefaultTheme from 'vitepress/theme'
import Button from '../../../src/button/src/Button'

export default {
  ...DefaultTheme,
  enhanceApp({ app }) {
    // register global components
    app.component('s-button', Button)
  }
}
