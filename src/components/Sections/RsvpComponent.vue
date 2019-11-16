<template>
    <form action="/api/guests" method="post" novalidate="true">
        <Scrollama @step-enter="stepEnterHandler">
            <input-field v-model="main_guest" label="main_guest" type="text" placeholder="main_guest_placeholder"
                         error="main_guest_error" icon="user"
                         :validation="{
            required:true,
            min:3,
        }"></input-field>
            <input-field v-model="brings_plus_one" label="brings_plus_one" type="checkbox" icon="user"></input-field>
            <input-field v-if="brings_plus_one" v-model="plus_one_name" label="plus_one_name" type="text"
                         placeholder="plus_one_name_placeholder"
                         error="plus_one_name_error" icon="user"
                         :validation="{
            required:true,
            min:3,
        }"></input-field>
            <input-field v-model="email" label="email" type="email" placeholder="email_placeholder" error="email_error"
                         icon="envelope" :validation="{
            required:true,
            min:5,
        }"></input-field>
        </Scrollama>
    </form>
</template>

<script>
    import InputField from "../Fields/InputField";
    import 'intersection-observer' // for cross-browser support
    import Scrollama from 'vue-scrollama'

    export default {
        components: {
            Scrollama,
            InputField,
        },
        name: "RsvpComponent",
        data() {
            return {
                main_guest: null,
                email: null,
                brings_plus_one: false,
                plus_one_name: null,
            };
        },
        methods: {
            stepEnterHandler({element, index, direction}) {
                // handle the step-event as required here
                console.log(element, index, direction)
            }
        }
    }
</script>

<style scoped>

</style>