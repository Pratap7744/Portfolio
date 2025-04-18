<script setup lang="ts">
useHead({
    title: 'Pratap Pawar',
    meta: [
        {
            name: 'description',
            content:
                "I'm Pratap Pawar, a passionate developer focused on creating responsive UIs, integrating powerful APIs, and building aesthetic web and AI-driven applications. I love exploring new technologies and crafting unique, user-centric experiences."
        },
        {
            property: 'og:title',
            content: 'Pratap Pawar'
        },
        {
            property: 'og:description',
            content:
                "I'm Pratap Pawar, a passionate developer focused on creating responsive UIs, integrating powerful APIs, and building aesthetic web and AI-driven applications. I love exploring new technologies and crafting unique, user-centric experiences."
        },
        {
            property: 'twitter:card',
            content: 'summary'
        }
    ]
});

useSeoMeta({
    title: 'Pratap Pawar',
    description:
        "I'm Pratap Pawar, a passionate developer focused on creating responsive UIs, integrating powerful APIs, and building aesthetic web and AI-driven applications. I love exploring new technologies and crafting unique, user-centric experiences.",
    ogTitle: 'Pratap Pawar',
    ogDescription:
        "I'm Pratap Pawar, a passionate developer focused on creating responsive UIs, integrating powerful APIs, and building aesthetic web and AI-driven applications. I love exploring new technologies and crafting unique, user-centric experiences.",
    twitterCard: 'summary'
});
</script>

<template>
    <div>
        <NuxtPage />
    </div>
</template>
