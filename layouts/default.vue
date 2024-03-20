<script setup>
    const links = [{
        label: 'Docs',
        icon: 'i-heroicons-book-open',
        to: '/getting-started'
        }, {
        label: 'Pro',
        icon: 'i-heroicons-square-3-stack-3d',
        to: '/pro'
        }, {
        label: 'Releases',
        icon: 'i-heroicons-rocket-launch',
        to: '/releases'
        }]
</script>
<template>
    <UHeader :links="links">
        <template #logo>
            <h1>PANDO APP</h1>
        </template>
        <template #right>
        <UColorModeButton />
        <UButton to="https://github.com/nuxt/ui" target="_blank" icon="i-simple-icons-github" color="gray" variant="ghost" />
        </template>

    </UHeader>
    <NuxtPage />
</template>