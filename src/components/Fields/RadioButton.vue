<template>
  <span>
      <input
        class="is-checkradio"
        type="radio"
        :name="group"
        :id="$vnode.key+label"
        :value="label"
        v-model="value"
        :checked="checked"
        @input="updateModel"
      />
    <label :for="$vnode.key+label">
      {{ trans(label) }}
    </label><br class="is-hidden-tablet">
  </span>
</template>

<script>
import { transMixin } from "../../core/lang";

export default {
  props: ["label", "group", "error", "icon", "validation", "checked"],
  name: "RadioButton",
  mixins: [transMixin],
  data() {
    return { value: this.checked ? this.label : null };
  },
  methods: {
    updateModel() {
      this.$emit("input", this.label);
    }
  }
};
</script>

<style scoped>
</style>