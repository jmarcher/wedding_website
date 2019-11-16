<template>
    <div>
        do this in
        <span v-text="this.country"></span>
        <h3 class="title is-3">{{ trans('tips') }}</h3>
        <div class="tile is-ancestor">
            <div class="tile is-vertical is-parent"
                 v-for="tips in this.groupBy(this.data.location_tips, 'group')">
                <tip v-for="tip in tips" :tip="tip" :key="tip.key">

                </tip>
            </div>
            <!-- <div class="tile is-4 is-vertical is-parent">
              <div class="tile is-child box">
                <p class="title">One</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare magna eros, eu pellentesque tortor vestibulum ut. Maecenas non massa sem. Etiam finibus odio quis feugiat facilisis.</p>
              </div>
              <div class="tile is-child box">
                <p class="title">Two</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare magna eros, eu pellentesque tortor vestibulum ut. Maecenas non massa sem. Etiam finibus odio quis feugiat facilisis.</p>
              </div>
            </div>
            <div class="tile is-parent">
              <div class="tile is-child box">
                <p class="title">Three</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam semper diam at erat pulvinar, at pulvinar felis blandit. Vestibulum volutpat tellus diam, consequat gravida libero rhoncus ut. Morbi maximus, leo sit amet vehicula eleifend, nunc dui porta orci, quis semper odio felis ut quam.</p>
                <p>Suspendisse varius ligula in molestie lacinia. Maecenas varius eget ligula a sagittis. Pellentesque interdum, nisl nec interdum maximus, augue diam porttitor lorem, et sollicitudin felis neque sit amet erat. Maecenas imperdiet felis nisi, fringilla luctus felis hendrerit sit amet. Aenean vitae gravida diam, finibus dignissim turpis. Sed eget varius ligula, at volutpat tortor.</p>
                <p>Integer sollicitudin, tortor a mattis commodo, velit urna rhoncus erat, vitae congue lectus dolor consequat libero. Donec leo ligula, maximus et pellentesque sed, gravida a metus. Cras ullamcorper a nunc ac porta. Aliquam ut aliquet lacus, quis faucibus libero. Quisque non semper leo.</p>
              </div>
            </div> -->
        </div>
    </div>
</template>

<script>
    import Constants from "../../core/constants";
    import {transMixin} from "../../core/lang";
    import Tip from './Partials/Tip';

    export default {
        props: ["country"],
        mixins: [transMixin],
        components: {Tip},
        data() {
            return {
                data: Constants.SECTIONS[`what_to_do_in_${this.country}`]
            };
        },
        methods: {
            groupBy: (xs, key) => {
                return xs.reduce((rv, x) => {
                    (rv[x[key]] = rv[x[key]] || []).push(x);
                    return rv;
                }, {});
            }
        },
    };
</script>

<style scoped>
</style>