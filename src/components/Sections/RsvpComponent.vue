<template>
  <form action="/api/guests" method="post" novalidate="true">
    <input-field
      v-model="main_guest"
      label="main_guest"
      type="text"
      placeholder="main_guest_placeholder"
      error="main_guest_error"
      icon="user"
      :validation="{
    required:true,
    min:3,
    }"
    />
    <input-field v-model="brings_plus_one" label="brings_plus_one" type="checkbox" icon="user"></input-field>
    <input-field
      v-if="brings_plus_one"
      v-model="plus_one_name"
      label="plus_one_name"
      type="text"
      placeholder="plus_one_name_placeholder"
      error="plus_one_name_error"
      icon="user"
      :validation="{
            required:true,
            min:3,
        }"
    />
    <input-field
      v-model="email"
      label="email"
      type="email"
      placeholder="email_placeholder"
      error="email_error"
      icon="envelope"
      :validation="{
            required:true,
            min:5,
        }"
    />
    <input-field
      v-model="notes"
      label="notes"
      type="textarea"
      placeholder="notes_placeholder"
      error="notes_error"
      icon="note"
      :validation="{
            required:false,
            min:5,
        }"
    />

    <div class="buttons">
      <button class="button is-primary" :disabled="!formIsCompleted" v-text="trans('submit')"></button>
    </div>
  </form>
</template>

<script>
import InputField from "../Fields/InputField";
import { transMixin } from "../../core/lang";

export default {
  name: "RsvpComponent",
  mixins: [transMixin],
  components: {
    InputField
  },
  data() {
    return {
      main_guest: null,
      email: null,
      brings_plus_one: false,
      plus_one_name: null,
      notes: null
    };
  },
  computed: {
    formIsComplete() {
      return (
        this.main_guest !== null &&
        this.email !== null &&
        (!this.brings_plus_one || this.plus_one_name !== null)
      );
    }
  }
};
</script>

<style scoped>
</style>