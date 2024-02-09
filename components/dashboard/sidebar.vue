
<template>
  <nav class="w-[290px] bg-white hidden lg:block" :class="{ 'w-[90px]': isCollapsed }">
    <div class="py-5 border-1">
      <div class="h-8 grid justify-self-center">
        <template v-if="isCollapsed">
          <div class="w-full grid justify-items-center">
            <IconsBirdy />
          </div>
        </template>
        <template v-else>
          <div class="w-ful grid justify-items-center">
            <IconsBrandLogo />
          </div>
        </template>
      </div>

      <section class="w-full my-8  text-primary">
        <ul :class="{ 'pl-8': !isCollapsed }">
          <li v-for="(menu, index) in menuItems" :key="menu?.id + index"
            class="my-10 px-5 flex cursor-pointer hover:text-orange"
            :class="{ 'active': route.name == menu.id, 'justify-center': isCollapsed }">
            <NuxtLink :to="`${menu.id}`" :title="`${currentPage(menu.name)}`">
              <div class="flex items-center align-middle justify-start" :title="`${currentPage(menu.name)}`">
                <span class="text-red" :qs="`icons-${menu.id}`">
                  <component :is="menu.component" />
                </span>
                <span v-show="!isCollapsed" class="capitalize link-item ml-3">
                  {{ menu.name }}
                </span>
              </div>
            </NuxtLink>
          </li>
          <div
            class="w-[3px] h-[20px] bg-darkestText rounded-tl rounded-bl absolute transition-transform right-0 ease-spring duration-500"
            style="transform: translateY(138.5px);"></div>

        </ul>
        <li class="my-10 pt-10 p-5 flex cursor-pointer border-t hover:text-orange w-full border-primary border-opacity-10"
          :class="{ 'active': route.name == 'feedback', 'pl-8': !isCollapsed, 'justify-center': isCollapsed }">
          <NuxtLink @click="toggleSideBar()">
            <div class="flex items-center align-middle justify-center">
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
          :class="{ 'active': route.name == 'feedback', 'pl-8': !isCollapsed, 'justify-center': isCollapsed }">
          <NuxtLink @click="toggleSideBar()">
            <div class="flex items-center align-middle justify-center">
              <span class="text-red mr-3">
                <IconsFeedback />
              </span>
              <span v-show="!isCollapsed" class="capitalize text-[#D53120]">
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


// Methods
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

/* element.style {
    transform: translateY(138.5px);
}
.ease-spring {
    animation-timing-function: cubic-bezier(0,1.93,1,1.01);
}
.duration-500 {
    animation-duration: .5s;
}
.ease-spring {
    transition-timing-function: cubic-bezier(0,1.93,1,1.01);
}
.duration-500 {
    transition-duration: .5s;
}
.transition-transform {
    transition-property: transform;
    transition-timing-function: cubic-bezier(.4,0,.2,1);
    transition-duration: .15s;
}
.bg-darkestText {
    background-color: var(--darkest-text);
}
.rounded-tl {
    border-top-left-radius: 0.25rem;
}
.rounded-bl {
    border-bottom-left-radius: 0.25rem;
}
.w-\[3px\] {
    width: 3px;
}
.h-\[20px\] {
    height: 20px;
}
.right-0 {
    right: 0;
}
.absolute {
    position: absolute;
} */
</style>
