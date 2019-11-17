<template>
  <figure class="image" :class="classes">
    <img class="is-rounded" :src="src" />
  </figure>
</template>

<script>
export default {
  props: ["src", "size"],
  name: "RoundedImage",
  computed: {
    computedSize() {
      if (!this.size) return 128;
      return this.size;
      if (this.size >= 128 || this.size >= 96) {
        return 128;
      } else if (this.size <= 96 && this.size > 64) {
        return 96;
      } else if (this.size <= 64 && this.size > 48) {
        return 64;
      } else if (this.size <= 48 && this.size > 32) {
        return 48;
      } else if (this.size <= 32 && this.size > 16) {
        return 32;
      } else if (this.size <= 16) {
        return 16;
      }
    },
    classes() {
      return [`is-${this.computedSize}x${this.computedSize}`];
    }
  }
};
</script>

<style scoped>
figure.is-210x210 {
  width: 210px;
  height: 210px;
}
</style>