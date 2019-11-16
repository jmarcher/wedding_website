<template>
        <section class="hero is-fullheight bd-index-fullscreen content-section" data-step="a"
                 :class="{'has-background-white-bis': this.position%2 === 0, 'has-background-white-ter':this.position%2 !== 0}"
                 :id="this.$vnode.key">
            <div class="hero-head">
                <div class="container">
                    <h1 class="title has-text-grey-dark has-text-centered-desktop">
                        <slot name="title"></slot>
                    </h1>
                </div>
            </div>
            <div class="hero-body">
                <div class="container">
                    <slot></slot>
                </div>
            </div>
        </section>
</template>

<script>
    export default {
        props: ['section', 'position'],
        name: "SectionPartial",
    }
</script>

<style scoped>
    .hero-head .title {
        padding-top: 3.5rem;
    }
</style>