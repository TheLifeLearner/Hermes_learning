import { h } from 'vue'
import DefaultTheme from 'vitepress/theme'
import BrailleFooter from './BrailleFooter.vue'

export default {
  extends: DefaultTheme,
  Layout() {
    return h(DefaultTheme.Layout, null, {
      'doc-footer-before': () => h(BrailleFooter)
    })
  }
}
