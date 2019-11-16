<template>
    <div>
        <nav class="level">
            <div class="level-item has-text-centered">
                <div>
                    <p class="heading">Joaquín</p>
                    <rounded-image src="./assets/images/pic-groom.jpg" :size="480"></rounded-image>
                </div>
            </div>
            <div class="level-item has-text-centered">
                <div>
                    <p class="heading">Rebecca</p>
                    <rounded-image src="./assets/images/pic-bride.jpg" :size="480"></rounded-image>
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