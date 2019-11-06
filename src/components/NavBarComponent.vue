<template>
    <!--    <affix class="nav-container" relative-element-selector="#main_container">-->

    <scrollactive class="level navbar is-fixed-top" role="navigation" aria-label="main navigation">
            <p class="level-item has-text-centered" v-for="item in sections">
                <a v-if="item !== '$separator$'" class="link is-info navbar-item scrollactive-item" :href="a_hash(item)"
                   v-text="trans(item)">
                </a>
                <img v-if="item === '$separator$'" alt="" src="https://bulma.io/images/bulma-type.png"
                     style="height: 30px;"/>
            </p>
    </scrollactive>

    <!--    </affix>-->
</template>
<script>
    import {Affix} from 'vue-affix';
    import Lang from '../core/lang';

    export default {
        data() {
            return {
                sections: [
                    'about_us',
                    'what_to_do_in_uruguay',
                    '$separator$',
                    'what_to_do_in_germany',
                    'rsvp',
                ]
            };
        },
        components: {
            Affix,
        },
        methods: {
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