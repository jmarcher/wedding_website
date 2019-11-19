<template>
    <div>
        <span>{{ this.years }}</span>
        <span>{{ this.days }}</span>
        <span>{{ this.hours }}</span>
        <span>{{ this.minutes }}</span>
    </div>
</template>
<script>
    import Constants from '../core/constants';
    export default {
        props:[],
        data(){
            return{
               date: moment(Constants.WEDDING_DATE),
               now: moment(),
               trans: new Lang,
            }
        },
        created(){
            console.log(Constants.WEDDING_DATE);
        },
        computed:{
            years(){
                return this.date.diff(this.now, 'years')
            },
            days(){
                if(this.years > 0){
                    return this.date.diff(this.now, 'days') - (this.years * 365);
                }

                return this.date.diff(this.now, 'days');
            },
            hours(){
                if(this.date.diff(this.now, 'days') > 0){
                    return this.date.diff(this.now, 'hours') - (this.date.diff(this.now, 'days') * 24);
                }

                return this.date.diff(this.now, 'hours');
            },
            minutes(){
                if(this.date.diff(this.now, 'hours') > 0){
                    return this.date.diff(this.now, 'minutes') - (this.date.diff(this.now, 'hours') * 60); 
                }

                return this.date.diff(this.now, 'minutes');
            },
            seconds(){
                if(this.date.diff(this.now, 'minutes') > 0){
                    return this.date.diff(this.now, 'seconds') - (this.date.diff(this.now, 'minutes') * 60); 
                }

                return this.date.diff(this.now, 'seconds');
            },
        },
        mounted(){
            setInterval(() => {
                this.now = moment();
            }, 1000);
        },
        methods:{
            // ...
        }
    };
</script>
<style scoped>

</style>