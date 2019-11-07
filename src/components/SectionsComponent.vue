<template>
    <div>
        <section-partial v-for="section in sections" :key="section" :section="section"></section-partial>
    </div>
</template>

<script>
    import SectionPartial from "./Sections/SectionPartial";
    import Constants from '../core/constants';
    export default {
        name: "SectionsComponent",
        data(){
            return {
                sections: Constants.SECTIONS.filter(section => {
                    return section !== Constants.SECTION_SEPARATOR;
                }),
            };
        },
        components: {SectionPartial},
    }
</script>

<style scoped>

</style>