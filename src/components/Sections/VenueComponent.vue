<template>
  <div>
    <div class="columns">
      <div class="column">
        <hotels-component></hotels-component>
      </div>
      <div class="column">
          <h4 class="title is-4" v-text="trans('venue_location')"></h4>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13105.328115221739!2d-56.019083!3d-34.7975876!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xd1f5f7f60603c9ba!2sFinca%20%22Clara%22%2C%20chacra%20de%20fiestas%20y%20eventos!5e0!3m2!1sde!2sde!4v1574102074260!5m2!1sde!2sde"
          width="500"
          height="400"
          frameborder="0"
          class="box is-paddingless"
          style="border:0;"
          allowfullscreen
        ></iframe>
      </div>
    </div>
  </div>
</template>

<script>
import HotelsComponent from "./HotelsComponent";
import {transMixin} from '../../core/lang';
export default {
  name: "VenueComponent",
  mixins:[transMixin],
  components: { HotelsComponent }
};
</script>

<style scoped>
</style>