<script setup lang="ts">
import { IconExternalLink, IconLink } from '@tabler/icons-vue';
useHead({
    script: [
        {
            src: '//cdn.credly.com/assets/utilities/embed.js',
            async: true,
            type: 'text/javascript'
        }
    ]
});
</script>

<template>
    <section class="flex flex-col gap-3">
        <div class="flex flex-row gap-2 items-center">
            <a href="#certifications">
                <div class="flex flex-row gap-1 items-center group relative">
                    <IconLink
                        class="absolute transform -translate-x-5 transition duration-200 opacity-0 w-4 h-4 group-hover:opacity-100"
                    />
                    <h2 class="text-xl font-bold hover:cursor-pointer">
                        {{ $t('certifications') }}
                    </h2>
                </div>
            </a>
            <ClientOnly>
                <ConfettisButton>
                    <template v-slot:default="{ onLaunchConfettis }">
                        <UButton
                            icon="i-tabler-confetti"
                            variant="soft"
                            label="Celebrate"
                            @click="onLaunchConfettis"
                        />
                    </template>
                </ConfettisButton>
            </ClientOnly>
        </div>

        <div class="flex flex-col gap-5">
            <div>
                <div class="flex flex-row justify-between gap-2 w-full">
                    <div class="flex flex-col items-start gap-2 w-3/4">
                        <a
                            class="text-lg font-bold hover:underline"
                            href="https://github.com/Pratap7744/Certificates/blob/main/PratapCertificate.pdf"
                            >React-Complete Guide 2025(Incl. Next.JS, Redux)</a
                        >
                        <p
                            class="text-xs text-pretty text-neutral-600 dark:text-neutral-400"
                        >
                            {{ $t('githubActionsCert.description') }}
                        </p>
                        <p
                            class="text-xs text-pretty text-neutral-600 dark:text-neutral-400 mt-2"
                            v-html="$t('githubActionsCert.skills')"
                        />
                        <p
                            class="text-xs text-pretty text-neutral-600 dark:text-neutral-400 mt-2"
                        >
                            {{ $t('githubActionsCert.recap') }}
                        </p>
                    </div>

                    <div class="flex flex-col justify-start items-end gap-0.5">
                        <p class="text-sm mb-1.5">October 2024</p>
                        <a
                            href="https://github.com/Pratap7744/Certificates/blob/main/PratapCertificate.pdf"
                            target="_blank"
                            class="group relative"
                        >
                            <img
                                src="https://frontends.udemycdn.com/frontends-logged-in-homepages/staticx/udemy/images/v7/logo-udemy.svg"
                                alt="GitHub Cert"
                                class="w-24 h-24"
                            />
                            <IconExternalLink
                                class="w-5 h-5 opacity-0 group-hover:opacity-100 transition duration-300 absolute"
                            />
                        </a>
                    </div>
                </div>
            </div>
            <div>
                <div class="flex flex-row justify-between gap-2 w-full">
                    <div class="flex flex-col items-start gap-2 w-3/4">
                        <a
                            class="text-lg font-bold hover:underline"
                            href="https://github.com/Pratap7744/Certificates/blob/main/PratapDSAcertificate.pdf"
                            >Data Structure and Algorithms</a
                        >
                        <p
                            class="text-xs text-pretty text-neutral-600 dark:text-neutral-400"
                        >
                            {{ $t('githubFoundationsCert.description') }}
                        </p>
                        <p
                            class="text-xs text-pretty text-neutral-600 dark:text-neutral-400 mt-2"
                            v-html="$t('githubFoundationsCert.skills')"
                        />
                        <p
                            class="text-xs text-pretty text-neutral-600 dark:text-neutral-400 mt-2"
                        >
                            {{ $t('githubFoundationsCert.recap') }}
                        </p>
                    </div>

                    <div class="flex flex-col justify-start items-end gap-0.5">
                        <p class="text-sm mb-1.5">July 2024</p>
                        <a
                            href="https://github.com/Pratap7744/Certificates/blob/main/PratapDSAcertificate.pdf"
                            target="_blank"
                            class="group relative"
                        >
                            <img
                                src="https://www.udemy.com/staticx/udemy/images/v7/logo-udemy.svg"
                                alt="GitHub Cert"
                                class="w-24 h-24"
                            />
                            <IconExternalLink
                                class="w-5 h-5 opacity-0 group-hover:opacity-100 transition duration-300 absolute"
                            />
                        </a>
                    </div>
                </div>
            </div>
            
        </div>
    </section>
</template>
