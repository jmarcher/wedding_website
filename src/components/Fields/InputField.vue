<template>
  <div class="field">
    <input
      v-if="this.type === 'checkbox'"
      @change="updateModel"
      class="is-checkradio"
      :id="label"
      :class="{'is-danger':wasFocused && !valid_input, 'is-success':valid_input}"
      @focus="wasFocused=true"
      :type="this.type"
      v-model="value"
      :checked="value"
    />
    <label class="label" :for="label">{{ trans(label) }}</label>
    <div class="control has-icons-left has-icons-right" v-if="this.fieldType">
      <input
        v-if="type !== 'textarea'"
        class="input"
        @input="updateModel"
        :class="{'is-danger':wasFocused && !valid_input, 'is-success':valid_input}"
        @focus="wasFocused=true"
        :type="type || 'text'"
        v-model="value"
        :placeholder="placeholderTranslated || ''"
      />
      <textarea
        v-if="type === 'textarea'"
        class="textarea"
        @input="updateModel"
        :class="{'is-danger':wasFocused && !valid_input, 'is-success':valid_input}"
        @focus="wasFocused=true"
        :placeholder="placeholderTranslated || ''"
      ></textarea>
      <span class="icon is-small is-left" v-if="this.icon">
        <font-awesome-icon :icon="['fas', this.icon]"></font-awesome-icon>
      </span>
      <span class="icon is-small is-right" v-show="valid_input">
        <font-awesome-icon :icon="['fas', 'check-circle']" class="has-text-success"></font-awesome-icon>
      </span>
      <span class="icon is-small is-right" v-show="wasFocused && !valid_input">
        <font-awesome-icon :icon="['fas', 'times-circle']" class="has-text-danger"></font-awesome-icon>
      </span>
    </div>
    <p class="help is-danger" v-show="wasFocused && !valid_input" v-html="trans(error)"></p>
  </div>
</template>

<script>
import { transMixin } from "../../core/lang";

export default {
  props: ["label", "type", "placeholder", "error", "icon", "validation"],
  name: "InputField",
  mixins: [transMixin],
  data() {
    return {
      wasFocused: false,
      value: this.type === "checkbox" ? false : "",
      validatables: this.validation || {}
    };
  },
  computed: {
    placeholderTranslated() {
      if (this.placeholder) {
        return this.trans(this.placeholder);
      }
      return "";
    },
    fieldType() {
      return !["checkbox"].includes(this.type);
    },
    valid_input() {
      if (
        this.validatables.required === true ||
        (this.fieldType ? this.value : "").trim().length > 0
      ) {
        return this.wasFocused && this.checkInputValidity();
      }

      return this.wasFocused;
    }
  },
  methods: {
    validEmail(email) {
      return /\S+@\S+\.\S+/.test(email);
    },
    checkInputValidity() {
      switch (this.type) {
        case "email":
          return this.validEmail(this.value);
        case "text":
          return this.value.trim().length > (this.validatables.min - 1 || 0);
      }
      return false;
    },
    updateModel() {
      if (this.valid_input) {
        this.$emit("input", this.value);
      }
    }
  }
};
</script>

<style scoped>
</style>