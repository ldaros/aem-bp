<template>
  <div class="image-vue">
    <img :src="source" />
  </div>
</template>

<script>
export default {
  data() {},

  props: {
    source: {
      type: String,

      default: "Default message",
    },
  },
};
</script>
