<template>
  <div class="content has-text-centered">
    <div class="box is-unselectable is-inline-block">
      <div class="time_unit">
        <span class="unit_count" v-text="this.years" />
        <div class="unit_translation" v-text="trans_choice('countdown_years',{years: this.years})"></div>
      </div>
      <div class="time_unit">
        <span class="unit_count" v-text="this.days" />
        <div class="unit_translation" v-text="trans_choice('countdown_days',{days: this.days})"></div>
      </div>
      <div class="time_unit">
        <span class="unit_count" v-text="this.hours" />
        <div class="unit_translation" v-text="trans_choice('countdown_hours',{hours: this.hours})"></div>
      </div>
      <div class="time_unit">
        <span class="unit_count" v-text="this.minutes" />
        <div
          class="unit_translation"
          v-text="trans_choice('countdown_minutes',{minutes: this.minutes})"
        ></div>
      </div>
    </div>
  </div>
</template>
<script>
import Constants from "../core/constants";
import moment from "moment";
import { transMixin } from "@/core/lang";
export default {
  data() {
    return {
      date: Constants.WEDDING_DATE,
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
<style scoped lang="scss">
.box {
  padding-bottom: 1rem;
  .time_unit {
    border: 3px solid hsl(0, 0%, 86%);
    border-radius: 50%;
    height: 6rem;
    width: 6rem;
    margin-left: 0.5rem;
    margin-bottom: 0.5rem;
    display: inline-block;
    .unit_count {
      font-size: 2rem;
    }
  }
}
</style>