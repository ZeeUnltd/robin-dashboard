
<template>
  <nav class="w-[290px] bg-white" :class="{ 'w-[90px]': isCollapsed }">
    <div class="py-5 border-1">
      <div class="h-8 flex justify-center" :class="{ 'pl-3': isCollapsed, 'lg:pl-[3.3rem]': !isCollapsed }"> <template
          v-if="isCollapsed">
          <div class="w-full">
            <IconsBirdy />
          </div>
        </template>
        <template v-else>
          <div class="w-full">
            <IconsBrandLogo />
          </div>
        </template>
      </div>

      <section class="w-full my-8  text-primary">
        <ul :class="{ 'pl-2': isCollapsed, 'pl-8': !isCollapsed }">
          <li v-for="(menu, index) in menuItems" :key="menu?.id + index" :name="route.name"
            class="my-10 px-5 flex cursor-pointer hover:text-orange" :class="{ 'active': route.name == menu.id }">
            <NuxtLink :to="`${menu.id}`" :activeClass="`${currentPage(menu.name)}`">
              <div class="flex items-center align-middle">
                <span class="text-red mr-3" :qs="`icons-${menu.id}`">
                  <component :is="menu.component" />
                </span>
                <span v-if="!isCollapsed" class="capitalize">
                  {{ menu.name }}
                </span>
              </div>
            </NuxtLink>
          </li>

        </ul>
        <li class="my-10 pt-10 p-5 flex cursor-pointer border-t hover:text-orange"
          :class="{ 'active': route.name == 'feedback' }">
          <NuxtLink @click="toggleSideBar()">
            <div class="flex items-center align-middle">
              <span class="text-red mr-3">
                <IconsCollapse />

              </span>
              <span v-if="!isCollapsed" class="capitalize">
                Collapse
              </span>
            </div>
          </NuxtLink>
        </li>

        <li class="my-10 pt-10 p-5 flex cursor-pointer mt-16 hover:text-orange"
          :class="{ 'active': route.name == 'feedback' }">
          <NuxtLink @click="toggleSideBar()">
            <div class="flex items-center align-middle">
              <span class="text-red mr-3">
                <IconsFeedback />
              </span>
              <span v-if="!isCollapsed" class="capitalize text-[#D53120]">
                Give Feedback
              </span>
            </div>
          </NuxtLink>
        </li>
      </section>
    </div>
  </nav>
</template>

<script lang="ts" setup>
import { IconsGetStarted, IconsCollapse, IconsFeedback, IconsAnalytics, IconsChat, IconsModeration, IconsApi, IconsAnnouncement, IconsSettings } from '#components'
const isCollapsed = useState('sidebarCollapse', () => false)
const router = useRouter()
const route = useRoute()

const menuItems = reactive([
  { name: 'get started', id: 'get-started', component: IconsGetStarted },
  { name: 'analytics', id: 'analytics', component: IconsAnalytics },
  { name: 'chat', id: 'chat', component: IconsChat },
  { name: 'moderation', id: 'moderation', component: IconsModeration },
  { name: 'api & auth keys', id: 'api', component: IconsApi },
  { name: 'announcement', id: 'announcement', component: IconsAnnouncement },
  { name: 'settings', id: 'settings', component: IconsSettings },

])

const currentPage = (path: string) => {
  return route.name === path ? 'active' : ''
}

const toggleSideBar = () => isCollapsed.value = !isCollapsed.value
</script>

<style scoped>
.active {
  @apply text-robin;
}

.active svg {
  stroke: #ea8d51;

}
</style>
