<script setup lang="ts">
import { IconLink } from '@tabler/icons-vue';
</script>

<template>
    <section class="flex flex-col gap-y-3">
        <a href="#education">
            <div class="flex flex-row gap-1 items-center group relative">
                <IconLink
                    class="absolute transform -translate-x-5 transition duration-200 opacity-0 w-4 h-4 group-hover:opacity-100"
                />
                <h2 class="text-xl font-bold hover:cursor-pointer">
                    {{ $t('education') }}
                </h2>
            </div>
        </a>
        <div class="flex flex-col gap-2">
            <div class="flex flex-col">
                <div
                    class="flex flex-row gap-1 items-center justify-between w-full"
                >
                    <div class="flex flex-col items-start">
                        <div class="flex flex-row items-center gap-2">
                            <a
                                class="text-base sm:text-lg font-bold hover:underline"
                                >{{ $t('gradcollege') }}</a
                            >
                            <p class="sm:hidden block text-sm">• 2022 - 2025</p>
                        </div>
                        <p class="text-xs sm:text-sm">{{ $t('grad') }}</p>
                    </div>

                    <div class="flex flex-col items-end gap-0.5">
                        <p class="hidden sm:block text-sm">2022 - 2025</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="flex flex-col gap-2">
            <div class="flex flex-col">
                <div class="flex flex-row items-center justify-between w-full">
                    <div class="flex flex-col items-start">
                        <div class="flex flex-row items-center gap-2">
                            <a
                                class="text-base sm:text-lg font-bold hover:underline"
                                >{{ $t('college') }}</a
                            >
                            <p class="sm:hidden block text-sm">• 2020 - 2021</p>
                        </div>
                        <p class="text-xs sm:text-sm">{{ $t('twe') }}</p>
                    </div>
                    <p class="hidden sm:block text-sm">2020 - 2021</p>
                </div>
            </div>
        </div>
        <div class="flex flex-col gap-2">
            <div class="flex flex-col">
                <div class="flex flex-row items-center justify-between w-full">
                    <div class="flex flex-col items-start">
                        <div class="flex flex-row items-center gap-2">
                            <a
                                class="text-base sm:text-lg font-bold hover:underline"
                                >{{ $t('school') }}</a
                            >
                            <p class="sm:hidden block text-sm">• 2018 - 2019</p>
                        </div>
                        <p class="text-xs sm:text-sm">{{ $t('ten') }}</p>
                    </div>
                    <p class="hidden sm:block text-sm">2018 - 2019</p>
                </div>
            </div>
        </div>
    </section>
</template>
