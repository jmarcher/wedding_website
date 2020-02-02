<template>
    <div>
        <WhatToDo country="germany" :disabled="true"></WhatToDo>
    </div>
</template>

<script>
    export default {
        name: "WhatToDoInGermany",
        components: {
            WhatToDo: () => import('./Sections/WhatToDoComponent'),
        },
    }
</script>

<style lang="scss" scoped>

</style>