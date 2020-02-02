<template>
  <div>
    <h4 class="title is-4">{{ trans('contact_our_guys') }}</h4>
    <h5 class="subtitle is-5">{{ trans('contact_our_guys_description') }}</h5>
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
                  <small v-text="emails.valentin"></small>
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
                  <small v-text="emails.lisa"></small>
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
  mixins: [transMixin]
};
</script>

<style scoped>
</style>