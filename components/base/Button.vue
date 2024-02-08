<template>
  <button :class="[
    styles,
    processing,
  ]" :disabled="disabled || processing" @click="onClick">
    <div v-if="processing">
      <!-- <img
        src="@/assets/images/loader.gif"
        class="object-cover w-full"
        :class="{
          'h-16 rounded-lg': size === 'large',
          'h-12 rounded-md': size === 'medium',
          'h-10 rounded-md': size === 'small',
        }"
        style="min-width: 100px"
      /> -->
      <span>Loading...</span>
    </div>
    <div v-else class="whitespace-nowrap" :class="{ size }">
      <div>
        <slot name="preIcon" class="ml-2 lg:ml-0" />
      </div>
      <span v-if="text !== ''" class="whitespace-nowrap" :class="[`${textClass}`]">{{ text }}</span>
      <slot v-else name="default"></slot>
      <div v-show="!processing" class="ml-3">
        <slot name="postIcon" />
      </div>
    </div>
  </button>
</template>
<script  setup >

const props = defineProps({
  disabled: {
    type: Boolean,
    default: false,
  },
  processing: {
    type: Boolean,
    default: false,
  },
  styles: {
    type: String,
    default: '',
  },
  text: {
    type: String,
    default: '',
  },
  textClass: {
    type: String,
    default: '',
  },
  to: {
    type: [String, Object],
    default: undefined,
  },
  type: {
    type: String,
    default: 'primary',
  },
  size: {
    type: String,
    default: 'medium',
  },
})

const emit = defineEmits(['click'])


const onClick = (event) => {
  const router = useRouter()
  console.log('lopppp');
  if (!(props.disabled || props.processing)) {
    emit('click', event)
    if (props.to) {
      router.push(props.to)
    }
  }
}
</script>
