<template>
  <div>
    <UHeader>
      <template #title>
        <NuxtImg
          src="/nuxt-starter-logo.png"
          alt="Your Logo"
          height="48"
          class="my-1"
        />
      </template>

      <template #right>
        <UColorModeButton />
      </template>
    </UHeader>

    <UMain>
      <slot />
    </UMain>

    <UFooter />
  </div>
</template>
