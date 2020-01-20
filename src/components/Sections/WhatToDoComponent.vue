<template>
  <div v-if="!disabled">
    <div class="modal" :class="{'is-active': isModalOpen}">
      <div class="modal-background" @click="closeModal"></div>
      <!-- v-touch:swipe.left="picture(-1)" v-touch:swipe.right="picture(1)" -->
      <div class="modal-content">
        <div class="level is-hidden-mobile">
          <div class="level-left" @click="picture(-1)">
            <i class="arrow left" v-if="hasMorePicturesLeft" />
            <!-- <font-awesome-icon icon="angle-left" v-if="hasMorePicturesLeft" /> -->
          </div>
          <div class="level-right" @click="picture(1)">
            <i class="arrow right" v-if="hasMorePicturesRight" />
            <!-- <font-awesome-icon icon="angle-right" v-if="hasMorePicturesRight" /> -->
          </div>
        </div>
        <p class="image">
          <img class="has-ratio" :src="activeModalPicture" v-touch:swipe="swipePicture" />
        </p>
      </div>
      <button class="modal-close is-large" @click.prevent="closeModal" aria-label="close"></button>
    </div>
    <!-- <div class="content">
      <p v-html="this.introduction_text"></p>
    </div>-->
    <div class="content">
      <slot name="after_intro"></slot>
    </div>
    <h4 class="title is-4">{{ trans('tips') }}</h4>
    <div class="tabs is-centered is-toggle">
      <ul>
        <li v-for="tab in tabs" :class="{'is-active':tab===activeTab}" @click="makeActiveTab(tab)" :key="tab">
          <a>
            <span class="icon is-small is-marginless-mobile">
              <font-awesome-icon :icon="['fas', getIcon(tab)]" />
            </span>
            <span class="is-hidden-mobile">{{ trans(`tips_${tab}`) }}</span>
          </a>
        </li>
      </ul>
    </div>
    <div class="separator"></div>
    <div v-if="tips.length > 0">
      <h5 class="title is-5"><font-awesome-icon icon="certificate" /> {{ trans('can_not_miss') }}</h5>
      <div class="tile is-ancestor" v-for="(chunked, index) in chunkedTips" :key="index">
        <div class="tile is-parent" :class="tileClass" v-for="tip in  chunked" :key="tip.key">
          <tip :tip="tip" :key="tip.key" @click.native="openModal(tip)" :show_city="activeTab === 'restaurants'"></tip>
        </div>
      </div>
    </div>
    <div class="content">
      <slot name="footer"></slot>
    </div>
  </div>
</template>

<script>
import Constants from "../../core/constants";
import { transMixin } from "@/core/lang";
import { triggerMixin } from "@/core/events";
import Tip from "./Partials/Tip";
import collect from "collect.js";

const CHUNK_SIZE = 3;

export default {
  props: ["country", "disabled"],
  mixins: [transMixin, triggerMixin],
  components: { Tip },
  data() {
    return {
      tabs: ["locations", "restaurants", "activities"],
      activeTab: "locations",
      data: Constants.SECTIONS[`party_${this.country}`],
      tips: [],
      isModalOpen: false,
      activeModalTip: null,
      activeModalPictureIndex: 0
    };
  },
  created() {
    this.setTips();
    window.addEventListener("keydown", e => {
      // Right arrow
      if (e.keyCode == 39) {
        this.picture(1);
      }
      // Left arrow
      if (e.keyCode == 37) {
        this.picture(-1);
      }
      // escape key
      if (e.keyCode == 27) {
        this.closeModal();
      }
    });
  },
  computed: {
    tileClass() {
      return [`is-${12/CHUNK_SIZE}`];
    },
    hasMorePicturesLeft() {
      return this.activeModalPictureIndex !== 0;
    },
    hasMorePicturesRight() {
      if (this.activeModalTip) {
        return (
          this.activeModalPictureIndex < this.activeModalTip.images.length - 1
        );
      }
      return false;
    },
    activeModalPicture() {
      if (this.activeModalTip) {
        return this.activeModalTip.images[this.activeModalPictureIndex];
      }

      return null;
    },
    chunkedTips() {
      let tips = collect(this.tips).filter(tip => {
        return tip.exists;
      });

      if (tips.count() > 0) {
        return tips.chunk(CHUNK_SIZE);
      }

      return collect();
    },
    introduction_text() {
      return this.trans(`introduction_${this.country}`);
    }
  },
  methods: {
    swipePicture(){
      return (direction) => {
        this.trigger(direction);
      }
    },
    openModal(tip) {
      this.isModalOpen = true;
      this.activeModalTip = tip;
      this.trigger("modal_open");
    },
    closeModal() {
      this.isModalOpen = false;
      this.activeModalTip = null;
      this.activeModalPictureIndex = 0;
      this.trigger("modal_close");
    },
    picture(offset) {
      this.trigger('moved');
      if (
        (offset == -1 && this.hasMorePicturesLeft) ||
        (offset == 1 && this.hasMorePicturesRight)
      )
        this.activeModalPictureIndex = this.activeModalPictureIndex + offset;
    },
    Collect: collect,
    getIcon(tab) {
      switch (tab) {
        case "locations":
          return "archway";
        case "restaurants":
          return "hamburger";
        case "activities":
          return "ticket-alt";
      }
    },
    makeActiveTab(tab) {
      this.activeTab = tab;
      this.setTips();
    },
    setTips() {
      this.tips =
        Constants.SECTIONS[`party_${this.country}`][`${this.activeTab}_tips`] || [];
    }
  }
};
</script>

<style scoped lang="scss">
.modal {
  .modal-content {
    position: relative;
    .level {
      position: absolute;
      width: 100%;
      z-index: 999999;
      top: 41%;
      color: white;
      font-size: 5rem;
      .no-more {
        color: ghostwhite;
      }
      .level- {
        &right,
        &left {
          cursor: pointer;
          margin-right: 1rem;
          margin-left: 1rem;
        }
      }
    }
  }
}

i {
  border: solid white;
  border-width: 0 3px 3px 0;
  display: inline-block;
  padding: 30px;
  &.arrow {
    &.right {
      transform: rotate(-45deg);
      -webkit-transform: rotate(-45deg);
    }
    &.left {
      transform: rotate(135deg);
      -webkit-transform: rotate(135deg);
    }
  }
}
</style>
