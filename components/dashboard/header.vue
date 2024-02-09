<template>
    <section class="w-full bg-main-bg  min-h-screen">
        <header class="flex gap-20 w-full xl:mt-3 border-b border-primary border-opacity-10 text-primary">
            <div class="w-full border-b border-primary border-opacity-10">
                <div class="w-full lg:px-[3.3rem] px-1">
                    <div class="w-full flex lg:justifiy-between justify-end">
                        <div class="w-1/2 py-5 hidden lg:block">
                            <span class="">
                                Hello 👋🏾
                            </span>
                        </div>
                        <div class="md:w-1/2 w-full text-right py-5 pr-4">
                            <!-- <base-button class="md:block hidden bg-blue p-4">download</base-button> -->
                            Download report
                            <span>
                                avatar
                            </span>
                        </div>
                    </div>
                </div>

            </div>
        </header>
        <slot> </slot>
    </section>
</template>

<script lang="ts" setup>

</script>

<style></style>