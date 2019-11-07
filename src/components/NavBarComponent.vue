<template>
    <div>
        <scrollactive class="level navbar is-fixed-top  is-hidden-mobile" role="navigation"
                      aria-label="main navigation">
            <p class="level-item has-text-centered" v-for="item in sections">
                <a v-if="item !== '$separator$'" class="link is-info navbar-item scrollactive-item" :href="a_hash(item)"
                   v-text="trans(item)">
                </a>
                <img v-if="item === '$separator$'" alt="" src="https://bulma.io/images/bulma-type.png"
                     style="height: 30px;"/>
            </p>
        </scrollactive>
        <div class="navbar is-fixed-top is-hidden-tablet">
            <a role="button" class="navbar-burger is-fixed-top" @click.prevent="toggleMenu"
               :class="{'is-active':is_open}" aria-label="menu" aria-expanded="false">
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
            </a>
            <scrollactive class="navbar-menu is-fixed-top is-hidden-tablet" :class="{'is-active':is_open}"
                          role="navigation"
                          aria-label="main navigation">
                <p class="has-text-centered" v-for="item in sections">
                    <a v-if="item !== '$separator$'" class="link is-info navbar-item scrollactive-item"
                       :href="a_hash(item)"
                       v-text="trans(item)">
                    </a>
                </p>
            </scrollactive>
        </div>

    </div>
</template>
<script>
    import {Affix} from 'vue-affix';
    import Lang from '../core/lang';
    import Constants from '../core/constants';

    export default {
        data() {
            return {
                is_open: false,
                sections: Constants.SECTIONS
            };
        },
        components: {
            Affix,
        },
        methods: {
            toggleMenu() {
                this.is_open = !this.is_open;
            },
            a_hash: (key) => {
                return `#${key}`;
            },
            trans: (key, replacements) => {
                return (new Lang).get(key, replacements)
            }
        }
    };
</script>
<style scoped>
    .nav-container {
        z-index: 999;
        width: 100%;
        background-color: #fff;
    }

    nav.level {
        padding: 10px;
    }
</style>