<template>
  <label class="radio">
    <input
      type="radio"
      :name="group"
      :value="label"
      v-model="value"
      :checked="checked"
      @input="updateModel"
    />
    {{ trans(label) }}
  </label>
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