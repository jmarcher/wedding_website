<template>
  <div>
    <!-- <h4 class="title is-4">{{ trans('contact_our_guys') }}</h4> -->
    <div class="is-text-highlighted">{{ trans('contact_our_guys_description') }}</div>
    <br>
    <div class="columns">
      <!-- Left side -->
      <div class="column">
        <div class="box">
          <article class="media">
            <!-- <div class="media-left">
                    <figure class="image is-64x64">
                      <img src="https://bulma.io/images/placeholders/128x128.png" alt="Image">
                    </figure>
            </div>-->
            <div class="media-content">
              <div class="content">
                <p>
                  <strong>Valentin Arnold</strong><br />  
                  <small v-html="email_valentin"></small>
                  <br />
                  {{ trans('valentin_contact_description') }}
                </p>
              </div>
            </div>
          </article>
        </div>
      </div>
      <div class="column">
        <div class="box">
          <article class="media">
            <!--                 <div class="media-left">
                    <figure class="image is-64x64">
                      <img src="https://bulma.io/images/placeholders/128x128.png" alt="Image">
                    </figure>
            </div>-->
            <div class="media-content">
              <div class="content">
                <p>
                  <strong>Lisa Günster</strong><br /> 
                  <small v-html="email_lisa"></small>
                  <br />
                  {{ trans('lisa_contact_description') }}
                </p>
              </div>
            </div>
          </article>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Constants from "@/core/constants";
import { transMixin } from "@/core/lang";
export default {
  data() {
    return {
      emails: {
        valentin: Constants.EMAIL_VALENTIN,
        lisa: Constants.EMAIL_LISA
      }

    };
  },
  computed: {
    // hide emails
    email_valentin() {
      return this.emails.valentin.replace('@', '<span>&#64;</span>').replace('.', '<span>.</span>'); 
    },
    email_lisa() {
      return this.emails.lisa.replace('@', '<span>&#64;</span>').replace('.', '<span>.</span>'); 
    }
  },
  mixins: [transMixin]
};
</script>

<style scoped>
</style>