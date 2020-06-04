<template>
  <div class="modal" :class="{'is-active': showNotice}">
    <div class="modal-background" @click="closeNotice"></div>
    <div class="modal-card">
      <!-- <header class="modal-card-head">
        <p class="modal-card-title" v-text="trans('reschedule_notice_title')">Re Save the date</p>
        <button class="delete" aria-label="close" @click="closeNotice"></button>
      </header> -->
      <section class="modal-card-body" v-text="trans('reschedule_notice')">
        <!-- Content ... -->
      </section>
      <!-- <footer class="modal-card-foot">
        <button class="button is-success"   v-text="trans('back_to_website')"></button>
      </footer> -->
    </div>
      <button class="modal-close is-large" @click="closeNotice" aria-label="close"></button>

  </div>
</template>
<script>
import { transMixin } from "../core/lang";
// const NOTICE_STORAGE_KEY = 'notice_reschedule_2020_read';
export default {
  name: "notice-component",
  data() {
    return { show_notice: true /* !!!(window.localStorage.getItem(NOTICE_STORAGE_KEY)) */ };
  },
  mixins: [transMixin],
  computed: {
    showNotice() {
      // This should return true or false depending on the local storage or something
      // that renotes that the user already closed the notice.
      return this.show_notice;
    }
  },
  methods: {
      closeNotice() {
          // window.localStorage.setItem(NOTICE_STORAGE_KEY, true);
          this.show_notice = false;
      }
  },
};
</script>
<style lang="scss" scoped>
.modal {
  .modal-card {
    padding: 1rem;
  }
  .modal-background{
    background: rgba(10, 10, 10, 0.25);
  }
  .modal-card-body{
    background: #f4efe3db;
    -webkit-box-shadow: 1px 2px 13px 4px #00000052;
    box-shadow: 1px 2px 13px 4px #0000001a;
  }
}
</style>