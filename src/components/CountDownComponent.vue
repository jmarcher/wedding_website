<template>
  <div class="content has-text-centered">
    <div class="box is-unselectable is-inline">
      <span v-text="trans_choice('countdown_years',{years: this.years})"></span>
      <span v-text="trans_choice('countdown_days',{days: this.days})"></span>
      <span v-text="trans_choice('countdown_hours',{hours: this.hours})"></span>
      <span v-text="trans_choice('countdown_minutes',{minutes: this.minutes})"></span>
    </div>
  </div>
</template>
<script>
import Constants from "../core/constants";
import { transMixin } from "../core/lang";
export default {
  data() {
    return {
      date: moment(Constants.WEDDING_DATE),
      now: moment()
    };
  },
  mixins: [transMixin],
  computed: {
    years() {
      return this.date.diff(this.now, "years");
    },
    days() {
      if (this.years > 0) {
        return this.date.diff(this.now, "days") - this.years * 365;
      }

      return this.date.diff(this.now, "days");
    },
    hours() {
      if (this.date.diff(this.now, "days") > 0) {
        return (
          this.date.diff(this.now, "hours") -
          this.date.diff(this.now, "days") * 24
        );
      }

      return this.date.diff(this.now, "hours");
    },
    minutes() {
      if (this.date.diff(this.now, "hours") > 0) {
        return (
          this.date.diff(this.now, "minutes") -
          this.date.diff(this.now, "hours") * 60
        );
      }

      return this.date.diff(this.now, "minutes");
    },
    seconds() {
      if (this.date.diff(this.now, "minutes") > 0) {
        return (
          this.date.diff(this.now, "seconds") -
          this.date.diff(this.now, "minutes") * 60
        );
      }

      return this.date.diff(this.now, "seconds");
    }
  },
  mounted() {
    setInterval(() => {
      this.now = moment();
    }, 1000);
  }
};
</script>
<style scoped>
</style>