import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'LifeLearnerLab',
  description: 'Hands-on guides for setting up AI agents, securing VPS servers, and building real-world tech skills.',

  head: [
    ['link', { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' }]
  ],

  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'VPS Setup', link: '/vps-setup' },
      { text: 'Hermes Setup', link: '/hermes-setup' },
      { text: 'AI Terms', link: '/ai-architecture-terms' },
    ],

    sidebar: [
      {
        text: 'Getting Started',
        items: [
          { text: 'VPS Setup & Security', link: '/vps-setup' },
          { text: 'Hermes Agent Setup', link: '/hermes-setup' },
        ]
      },
      {
        text: 'Reference',
        items: [
          { text: 'AI Architecture Terms', link: '/ai-architecture-terms' },
          { text: 'Discord Prep', link: '/discord-prep' },
          { text: 'OpenRouter Prep', link: '/openrouter-prep' },
          { text: 'Hermes Ideas', link: '/hermes-ideas' },
        ]
      }
    ],

    socialLinks: [
      {
        icon: {
          svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 68 24" fill="none"><rect x="0.5" y="0.5" width="67" height="23" rx="4" stroke="currentColor" stroke-opacity="0.25" fill="currentColor" fill-opacity="0.05"/><text x="8" y="17" font-family="monospace" font-size="14" font-weight="bold" fill="currentColor">LLD</text><text x="40" y="17" font-size="10" fill="currentColor" fill-opacity="0.4">⠇⠇⠙</text></svg>'
        },
        link: '/'
      }
    ],

    footer: {
      message: 'Built for people who learn by doing.',
    },

    search: {
      provider: 'local'
    }
  }
})
