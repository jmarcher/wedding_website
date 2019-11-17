<template>
    <div>
        <nav class="level">
            <div class="level-item has-text-centered">
                <div>
                    <p class="heading is-size-4">Joaquín</p>
                    <rounded-image src="./assets/images/pic-groom.jpg" :size="210"></rounded-image>
                </div>
            </div>
            <div class="level-item has-text-centered">
                <div>
                    <p class="heading is-size-4">Rebecca</p>
                    <rounded-image src="./assets/images/pic-bride.jpg" :size="210"></rounded-image>
                </div>
            </div>
        </nav>
    </div>
</template>

<script>
    import RoundedImage from "./Partials/RoundedImage";
    export default {
        name: "AboutUsComponent",
        components:{RoundedImage},
    }
</script>

<style scoped>

</style>