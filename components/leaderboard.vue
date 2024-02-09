<template>
    <div>
        <div class="flex text-[#51545C]">
            leaderboard
            Last updated 1 minute ago
            <button class="flex items-center">
                <IconsRefresh class="ml-8" />
                <span class="ml-2 text-[#15AE73]">
                    Refresh
                </span>
            </button>
        </div>

        <div class="md:grid md:grid-cols-2 lg:grid-cols-4  gap-4 w-full my-4 overflow-auto text-primary">
            <div
                class="py-[22px] px-[24px] rounded-[5px] bg-[#fff] border border-primary border-opacity-10 min-w-[228px] w-full">
                <p class="text-sm uppercase font-medium">
                    users online
                </p>
                <p class="mt-[12px] text-4xl font-bold font-hanken leading-8">
                    274
                </p>
            </div>
            <div
                class="py-[22px] px-[24px] rounded-[5px] bg-[#fff] border border-primary border-opacity-10 min-w-[228px] w-full">
                <p class="text-sm uppercase font-medium">
                    users active today
                </p>
                <p class="mt-[12px] text-4xl font-bold font-hanken leading-8">
                    816
                </p>
            </div>
            <div
                class="py-[22px] px-[24px] rounded-[5px] bg-[#fff] border border-primary border-opacity-10 min-w-[228px] w-full">
                <p class="text-sm uppercase font-medium">
                    users active this month
                </p>
                <p class="mt-[12px] text-4xl font-bold font-hanken leading-8">
                    883
                </p>
            </div>
            <div
                class="py-[22px] px-[24px] rounded-[5px] bg-[#fff] border border-primary border-opacity-10 min-w-[228px] w-full">
                <p class="text-sm uppercase font-medium">
                    peak concurrency (monthly)
                </p>
                <p class="mt-[12px] text-4xl font-bold font-hanken leading-8">
                    883
                </p>
            </div>
            <div
                class="py-[22px] px-[24px] rounded-[5px] bg-[#fff] border border-primary border-opacity-10 min-w-[228px] w-full">
                <p class="text-sm uppercase font-medium">
                    Dashboard
                </p>
                <p class="mt-[12px] text-4xl font-bold font-hanken leading-8">
                    883
                </p>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>

</script>

<style></style>