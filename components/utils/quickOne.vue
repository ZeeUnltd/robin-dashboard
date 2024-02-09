
<template>
    <nav class="w-[670px] bg-white">
        <div class="py-5 border-1">
            <div class="h-8 lg:pl-[3.3rem] pl-2">
            </div>

            <section class="w-full my-5 p-5 text-primary">


                <base-button @click="tryApi(urlFirst)" text="fly am"></base-button>

                <p>
                    <span v-if="resulted"> {{ resulted }}</span>
                </p>

            </section>
        </div>
    </nav>
</template>
  
<script lang="ts" setup>


let urlFirst = ref('https://www.letsrevolutionizetesting.com/challenge?id=756775492')
const resulted = ref({})

const fixUrl = (url: string) => url.replace('challenge?', 'challenge.json?')

async function tryApi(path: string) {
    try {
        const response: any = await $fetch(fixUrl(path))
        if (response?.follow) {
            urlFirst.value = response?.follow

        } else {
            resulted.value = response
        }
    } catch (error) {
        console.log({ error });

    }

}
tryApi(urlFirst)

// useFetch(url, {
//     method,
//     body,
//     ...RequestInterceptorConfig,
//     retry: 1,
//     ...options,
//   })
</script>
  