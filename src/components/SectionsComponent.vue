<template>
    <div>
        <section-partial v-for="(section, name) in sections" :key="name" :section="section"></section-partial>
    </div>
</template>

<script>
    import SectionPartial from "./Sections/SectionPartial";
    import Constants from '../core/constants';
    export default {
        name: "SectionsComponent",
        data(){
            return {
                sections: Constants.SECTIONS,
            };
        },
        components: {SectionPartial},
    }
</script>

<style scoped>

</style>