import type { App } from 'vue'
import { FileAudioIcon as _FileAudioIcon } from './file-audio'

const FileAudioIcon = {
  install: (app: App) => {
    app.component('FileAudioIcon', _FileAudioIcon)
  }
}

export default FileAudioIcon
