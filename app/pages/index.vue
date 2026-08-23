<template>
  <UPage>
    <UPageBody>
      <UPageHero
        title="TJ's Nuxt Starter"
        description="A modern starter template for building Nuxt 4 applications."
      />
      <UPageSection
        title="Sensible Conventions"
        description="Built with industry-standard conventions for maintainable, scalable projects."
        :features="conventions"
      />
      <UPageSection
        title="Build Faster with AI"
        description="Designed for AI-assisted workflows—ship features faster with intelligent code generation"
        :features="features"
      />
    </UPageBody>
  </UPage>
</template>

<script setup lang="ts">
const conventions = [
  {
    icon: 'i-lucide-folder-open',
    title: 'File Structure',
    description: 'Organized file structure following Nuxt 4 best practices.',
  },
  {
    icon: 'i-lucide-palette',
    title: 'Theming',
    description: 'Dark and light mode support with easy customization.',
  },
  {
    icon: 'i-lucide-component',
    title: 'UI Components',
    description: 'Pre-built UI components using Nuxt UI for rapid development.',
  },
]
const features = [
  {
    icon: 'i-lucide-robot',
    title: 'AI Integration',
    description: 'Seamlessly integrate with AI code generation and assistance tools.',
  },
  {
    icon: 'i-lucide-rocket',
    title: 'Instant Prototyping',
    description: 'Go from idea to working prototype in minutes, not hours.',
  },
  {
    icon: 'i-lucide-handshake',
    title: 'AI Context Built-In',
    description: 'AGENTS.md gives AI tools the context they need to help you code faster.',
  },
]
</script>
