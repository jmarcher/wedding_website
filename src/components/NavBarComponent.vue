<template>
  <div>
    <scrollactive
      class="level navbar is-hidden-mobile"
      role="navigation"
      aria-label="main navigation"
    >
      <p class="level-item has-text-left">
        <span
          @click.prevent="set_locale('es')"
          class="has-cursor-pointer"
          :class="getClassesLocale('es')"
        >ES</span> |
        <span
          @click.prevent="set_locale('de')"
          class="has-cursor-pointer"
          :class="getClassesLocale('de')"
        >DE</span>
      </p>
      <p class="level-item has-text-centered" v-for="item in sections" :key="item">
        <a
          v-if="item !== '$separator$'"
          class="link is-info navbar-item scrollactive-item"
          :href="a_hash(item)"
          v-html="trans(item)"
        ></a>
        <img
          v-if="item === '$separator$'"
          alt
          src="https://bulma.io/images/bulma-type.png"
          style="height: 30px;"
        />
      </p>
    </scrollactive>
    <div class="navbar is-fixed-top is-hidden-tablet">
      <a
        role="button"
        class="navbar-burger is-fixed-top"
        @click.prevent="toggleMenu"
        :class="{'is-active':is_open}"
        aria-label="menu"
        aria-expanded="false"
      >
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
      <scrollactive
        class="navbar-menu is-fixed-top is-hidden-tablet"
        :class="{'is-active':is_open}"
        role="navigation"
        aria-label="main navigation"
      >
        <p class="has-text-centered" v-for="item in sections" :key="item">
          <a
            v-if="item !== '$separator$'"
            class="link is-info navbar-item scrollactive-item"
            :href="a_hash(item)"
            v-html="trans(item)"
            @click="toggleMenu"
          ></a>
        </p>
      </scrollactive>
    </div>
  </div>
</template>
<script>
import { transMixin } from "../core/lang";
import Constants from "../core/constants";

export default {
  data() {
    return {
      is_open: false,
      sections: Object.keys(Constants.SECTIONS)
    };
  },
  mixins: [transMixin],
  methods: {
    toggleMenu() {
      this.is_open = !this.is_open;
    },
    a_hash: key => {
      return `#${key}`;
    },
    getClassesLocale(locale) {
      if (this.get_locale === locale) {
        return ["has-text-weight-bold"];
      }
      return [];
    }
  }
};
</script>
<style scoped lang="scss">
.nav-container {
  z-index: 999;
  width: 100%;
  background-color: #fff;
}
span.has-cursor-pointer {
  cursor: pointer;
}

nav.level {
  padding: 10px;
}
.navbar.is-fixed-top {
  width: 50%;
  right: 0;
  left: auto;
  .navbar-menu{
    background-color: #FFFFFFE8;
    border-radius: 0.4rem;
  }
}
</style>