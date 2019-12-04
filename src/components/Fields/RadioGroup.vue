<template>
  <div class="field">
    <label class="label" :for="name" v-text="trans(name)" />
    <div class="control">
      <radio-button
        v-for="v in values"
        :group="name"
        v-model="value"
        :checked="value === v"
        :key="v"
        :label="v"
        @input="updateModel()"
      ></radio-button>
    </div>
  </div>
</template>

<script>
import RadioButton from "./RadioButton";
import { transMixin } from "../../core/lang";
export default {
  props: ["values", "name"],
  name: "RadioGroup",
  components: { RadioButton },
  mixins: [transMixin],
  data() {
    return {
      value: this.values[0],
      valid_input: true
    };
  },
  methods: {
    updateModel() {
      this.$emit("input", this.value);
    }
  }
};
</script>

<style scoped>
</style>