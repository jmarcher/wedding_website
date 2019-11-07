<template>
    <section class="section" :id="section">
        <div class="container">
            <div class="box">
                <h1 class="title has-text-grey-dark has-text-centered-desktop">{{ trans(section) }}</h1>
                <p>&nbsp;</p>
                <p>&nbsp;</p>
                <p>&nbsp;</p>
                <p>&nbsp;</p>
            </div>
        </div>
    </section>
</template>

<script>
    import Lang from '../../core/lang';
    export default {
        props: ['section'],
        name: "SectionPartial",
        created(){
            console.log(this.section);
        },
        methods:{
            trans: (key, replacements) => {
                return (new Lang).get(key, replacements)
            }
        },
    }
</script>

<style scoped>

</style>