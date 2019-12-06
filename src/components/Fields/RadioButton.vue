<template>
  <span>
      <input
        class="is-checkradio"
        type="radio"
        :name="group"
        :id="label"
        :value="label"
        v-model="value"
        :checked="checked"
        @input="updateModel"
      />
    <label :for="label">
      {{ trans(label) }}
    </label>
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