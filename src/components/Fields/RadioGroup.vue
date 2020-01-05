<template>
  <div>
    <div class="field">
      <label
        class="label"
        :for="name"
        v-text="!guest ? trans(asist ? label:'menu_you') : trans(label,{for: guest || trans('you')})"
      />
      <div class="control">
        <radio-button
          v-for="v in values"
          :group="name"
          v-model="value"
          :checked="value === v"
          :key="$vnode.key+v"
          :label="v"
          @input="updateModel()"
        ></radio-button>
      </div>
    </div>
  </div>
</template>

<script>
import RadioButton from "./RadioButton";
import { transMixin } from "../../core/lang";
import { triggerMixin } from "@/core/events";
export default {
  props: ["values", "name", "guest", "label", "asist"],
  name: "RadioGroup",
  components: { RadioButton },
  mixins: [transMixin, triggerMixin],
  data() {
    return {
      value: this.values[0],
      valid_input: true
    };
  },
  mounted() {
    if (this.$vnode.key) {
      this.trigger("menu_changed", {
        guest: this.$vnode.key,
        value: this.value
      });
    }
  },
  methods: {
    updateModel() {
      this.$emit("input", this.value);
      if (this.$vnode.key) {
        this.trigger("menu_changed", {
          guest: this.$vnode.key,
          value: this.value
        });
      }
    }
  }
};
</script>

<style scoped>
</style>