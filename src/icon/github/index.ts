import type { App } from 'vue'
import { GithubIcon as _GithubIcon } from './github'

const GithubIcon = {
  install: (app: App) => {
    app.component('GithubIcon', _GithubIcon)
  }
}

export default GithubIcon
