<template>
  <div>
    <div class="content">
      <p v-html="this.introduction_text"></p>
    </div>
    <h3 class="title is-3">{{ trans('tips') }}</h3>
    <div class="tabs is-centered is-toggle">
      <ul>
        <li v-for="tab in tabs" :class="{'is-active':tab===activeTab}" @click="makeActiveTab(tab)" :key="tab">
          <a>
            <span class="icon is-small is-marginless-mobile"><font-awesome-icon :icon="['fas', getIcon(tab)]" /></span>
            <span class="is-hidden-mobile">{{ trans(`tips_${tab}`) }}</span>
          </a>
        </li>
      </ul>
    </div>
    <div class="separator"></div>
    <div v-if="tips.length > 0">
      <div class="tile is-ancestor" v-for="(chunked, index) in chunkedTips" :key="index">
        <div class="tile is-8 is-parent" v-if="index % 2 === 0">
          <tip :tip="chunked.shift()"></tip>
        </div>
        <div class="tile is-4 is-vertical is-parent">
          <tip :tip="tip" :key="tip.key" v-for="tip in (((index % 2) === 0) ? chunked : chunked.take(2))"></tip>
        </div>
        <div class="tile is-8 is-parent" v-if="index % 2 !== 0">
          <tip :tip="chunked.last()"></tip>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Constants from "../../core/constants";
import { transMixin } from "../../core/lang";
import Tip from "./Partials/Tip";
import collect from "collect.js";

export default {
  props: ["country"],
  mixins: [transMixin],
  components: { Tip },
  data() {
    return {
      tabs: ["locations", "restaurants", "activities"],
      activeTab: "locations",
      data: Constants.SECTIONS[`what_to_do_in_${this.country}`],
      tips: []
    };
  },
  created() {
    this.setTips();
  },
  computed: {
    chunkedTips(){
      let tips = collect(this.tips).filter((tip) => {
        return tip.exists;
      });

      if(tips.count() > 0){
        return tips.chunk(3);
      }
      
      return collect();
    },
    introduction_text(){
      return this.trans(`introduction_${this.country}`);
    },
  },
  methods: {
    Collect: collect,
    getIcon(tab) {
      switch (tab) {
        case 'locations':
          return 'archway';
        case 'restaurants':
          return 'hamburger';
        case 'activities':
          return 'biking';
      }
    },
    makeActiveTab(tab) {
      this.activeTab = tab;
      this.setTips();
    },
    setTips() {
      this.tips = this.shuffle(
        Constants.SECTIONS[`what_to_do_in_${this.country}`][
          `${this.activeTab}_tips`
        ] || []
      );
    },
    shuffle(a) {
      for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
      }
      return a;
    }
  }
};
</script>

<style scoped land="scss">
</style>
