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
                        <div class="w-full lg:hidden block md:w-1/2 py-5 justify-end place-self-end">
                            <div class="flex justify-items-center justify-start">
                                <IconsBrandLogo class="mx-3" />
                                <button
                                    class="ml-1 bg-[#EFEFEF] grid justify-items-center content-center text-[#000] h-[40px] w-[40px] rounded-[50%] opacity-40">
                                    <IconsMobileCollapse />
                                </button>
                            </div>
                        </div>
                        <div class="md:w-1/2 w-full text-right py-5 pr-4 flex justify-end place-self-end items-center">
                            <button class="bg-[#4568D1] hidden lg:block text-[#fff] h-[32px] py-1 px-6 rounded-[30px]">
                                Download Report
                            </button>
                            <button class="ml-4 bg-[#EFEFEF]  text-[#000] h-[40px] w-[40px] rounded-[50%] opacity-40">
                                AG
                            </button>
                        </div>
                    </div>
                </div>

            </div>
        </header>
        <slot> </slot>
    </section>
</template>

<script lang="ts" setup>

const emit = defineEmits(['openSideBar'])

</script>

<style></style>