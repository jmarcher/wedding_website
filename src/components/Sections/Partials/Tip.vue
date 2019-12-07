<template>
    <div
            class="tile is-child box"
            :style="cardStyle"
            @mouseover="startImageTransition"
            @mouseleave="stopImageTransition"
    >
    <!-- v-touch:swipe.right="rightPicture" -->
    <!-- v-touch:swipe.left="leftPicture" -->
        <p class="title has-text-light" v-text="trans(this.tip.key)"></p>
        <p
                v-html="trans(`${this.tip.key}_description`)"
                class="tile-text has-text-light"
                v-visible="this.timer"
        ></p>
        <p class="links buttons" v-visible="this.timer">
            <a :href="wikipediaLink" target="_blank" class="button">
                <font-awesome-icon :icon="['fab', 'wikipedia-w']"/>
            </a>
            <a :href="googleMapsLink" target="_blank" class="button">
                <font-awesome-icon :icon="['fas', 'map-marked-alt']"/>
            </a>
        </p>
    </div>
</template>

<script>
    import Constants from "../../../core/constants";
    import {transMixin} from "../../../core/lang";

    export default {
        name: "Tip",
        props: ["tip"],
        mixins: [transMixin],
        data() {
            return {
                // actualPicture: this.tip.images[0],
                actualPictureIndex: 0,
                timer: null
            };
        },
        computed: {
            wikipediaLink() {
                return this.tip.links[`wikipedia_${Constants.DEFAULT_LOCALE}`];
            },
            googleMapsLink() {
                return this.tip.links["gmaps"];
            },
            actualPicture() {
                return this.tip.images[this.actualPictureIndex];
            },
            cardStyle() {
                return `background-image:url(${this.actualPicture})`;
            }
        },
        methods: {
            leftPicture() {
                if (this.actualPictureIndex >= this.tip.images.length - 1) {
                    this.actualPictureIndex = 0;
                } else {
                    this.actualPictureIndex++;
                }
            },
            rightPicture() {
                if (this.actualPictureIndex === 0) {
                    this.actualPictureIndex = this.tip.images.length - 1;
                } else {
                    this.actualPictureIndex--;
                }
            },
            startImageTransition() {
                if (!this.timer) {
                    if (this.tip.images.length > 1) {
                        this.timer = setInterval(this.leftPicture, 2000);
                    } else {
                        this.timer = true;
                    }
                }
            },
            stopImageTransition() {
                // this.actualPictureIndex = 0;
                clearInterval(this.timer);
                this.timer = null;
            }
        }
    };
</script>

<style scoped>
    div.tile {
        transition: background-image 0.5s ease;
        background-size: cover;
        background-repeat: no-repeat;
    }

    p.title {
        text-shadow: 2px 2px 2px #777;
    }

    p.tile-text {
        text-shadow: 1px 1px 1px #777;
    }
</style>