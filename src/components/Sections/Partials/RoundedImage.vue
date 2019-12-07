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