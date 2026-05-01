import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'LifeLearnerLab',
  description: 'Hands-on guides for setting up AI agents, securing VPS servers, and building real-world tech skills.',

  head: [
    ['link', { rel: 'icon', type: 'image/svg+xml', href: '/logo.svg' }]
  ],

  themeConfig: {
    logo: '/logo.svg',
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

    footer: {
      message: 'Built for people who learn by doing.',
    },

    search: {
      provider: 'local'
    }
  }
})
