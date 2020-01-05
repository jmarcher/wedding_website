<template>
  <form method="post" novalidate="true">
    <article class="message is-warning" v-if="aboutToExpire">
      <div class="message-body" v-text="trans('rsvp_is_about_to_expire')"></div>
    </article>
    <article class="message is-danger" v-if="expiredRSVP">
      <div class="message-body" v-text="trans('rsvp_can_not_be_sent_anymore')"></div>
    </article>
    <radio-group
      :values="comming"
      asist="true"
      v-model="is_comming"
      name="are_you_comming"
      label="are_you_comming"
    ></radio-group>
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
      type="tags"
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
    <radio-group
      :values="menus"
      :name="`menu_${key}`"
      label="menu"
      v-for="(guest, key) in guests"
      :key="key"
      :guest="guest"
    ></radio-group>
    <input-field
      v-model="notes"
      label="notes"
      type="textarea"
      placeholder="notes_placeholder"
      error="notes_error"
      :validation="{
            required:false,
            min:5,
        }"
    />
    <div class="buttons">
      <button
        class="button is-primary"
        :class="{'is-loading':formLoading}"
        @click.prevent="sendForm()"
        :disabled="!formIsComplete"
        v-text="trans('submit')"
      ></button>
    </div>
  </form>
</template>

<script>
import InputField from "../Fields/InputField";
import RadioGroup from "../Fields/RadioGroup";
import Constants from "../../core/constants";
import { transMixin } from "../../core/lang";
import { listenMixin } from "@/core/events";
import { sluggifyString } from "@/core/tip";
import Swal from "sweetalert2";
import moment from "moment";

export default {
  name: "RsvpComponent",
  mixins: [transMixin, listenMixin],
  components: {
    InputField,
    RadioGroup
  },
  data() {
    return {
      aboutToExpire: false,
      expiredRSVP: false,
      servertime: null,
      formLoading: false,
      main_guest: null,
      email: null,
      brings_plus_one: false,
      plus_one_name: null,
      menu: Constants.FOOD_MENUS[0],
      notes: null,
      guestlist: {},
      is_comming: 'im_comming',
      comming: ['im_comming', 'im_not_comming'],
    };
  },
  methods: {
    slug(string) {
      return sluggifyString(string);
    },
    cleanForm() {
      this.main_guest = null;
      this.email = null;
      this.brings_plus_one = false;
      this.plus_one_name = null;
      this.menu = Constants.FOOD_MENUS[0];
      this.notes = null;
    },
    sendForm() {
      if (this.expiredRSVP) {
        return;
      }
      this.formLoading = true;
      window.axios
        .post(`${Constants.API_PATH}/guests`, {
          is_comming: this.is_comming === 'is_comming',
          name: this.main_guest,
          brings_plus_one: this.brings_plus_one,
          plus_one_name: this.plus_one_name,
          email: this.email,
          menu: this.menu,
          menus: this.guestlist,
          notes: this.notes
        })
        .then(() => {
          this.formLoading = false;
          Swal.fire({
            type: "success",
            title: this.trans("form_sent_successfully"),
            timer: 2000
          });
          // this.cleanForm();
        })
        .catch(() => {
          this.formLoading = false;
          Swal.fire({
            type: "error",
            title: this.trans("form_sent_error")
            // timer: 2000
          });
        });
    }
  },
  created() {
    window.axios
      .get(`${Constants.API_PATH}/servertime`)
      .then(({ data }) => {
        this.servertime = moment(data.servertime);
        if (this.servertime.isAfter(Constants.RSVP_DEADLINE)) {
          this.expiredRSVP = true;
        } else if (
          Constants.RSVP_DEADLINE.diff(this.servertime, "days") <
          Constants.RSVP_DEADLINE_WARNING
        ) {
          this.aboutToExpire = true;
        }
      })
      .catch(() => {
        this.servertime = moment();
      });

    this.listen("menu_changed", ({ guest, value }) => {
      this.guestlist[guest] = value;
    });
  },
  computed: {
    guests() {
      let result = {};
      result["_mainguest"] = this.main_guest || null;
      if (this.plus_one_name) {
        let plusOnes = this.plus_one_name.split(",");
        for (var index = 0; index <= plusOnes.length - 1; index++) {
          result[this.slug(plusOnes[index])] = plusOnes[index];
        }
      }
      return result;
    },
    menus() {
      return Constants.FOOD_MENUS;
    },
    formIsComplete() {
      return (
        !this.expiredRSVP &&
        this.main_guest !== null &&
        this.email !== null &&
        this.menu !== null &&
        (!this.brings_plus_one || this.plus_one_name !== null)
      );
    }
  }
};
</script>

<style scoped lang="scss">
</style>