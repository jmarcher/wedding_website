<template>
  <div>
    <h3 class="title is-4" v-text="trans('recommended_hotels')"></h3>
    <div class="box" v-for="hotel in hotels" :key="hotel.name">
      <article class="media">
        <div class="media-left">
          <figure class="image is-1by1 is-128x128">
            <img src="/assets/Clear.gif" :style="`background-image: url('${hotel.image}');background-size: cover;background-position: center;`" class="hotel_picture" />
          </figure>
        </div>
        <div class="media-content">
          <div class="content">
            <p>
              <strong v-text="hotel.name"></strong> / 
              <small>{{ trans('distance', {distance: hotel.distance_to_venue}) }}</small>
              <br /><span class="is-size-5">{{ trans('price_from', {price: hotel.price_from}) }} &euro;</span>
            </p>
          </div>
        </div>
      </article>
    </div>
  </div>
</template>

<script>
import Constants from '../../core/constants';
import {transMixin} from '../../core/lang';
export default {
    name: 'HotelsComponent',
    mixins: [transMixin],
    data(){
        return {
            hotels: Constants.HOTELS,
        };
    },
};
</script>

<style scoped>
</style>