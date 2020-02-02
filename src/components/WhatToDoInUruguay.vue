<template>
    <div>
        <WhatToDoComponent country="uruguay"></WhatToDoComponent>
    </div>
</template>

<script>
    export default {
        name: "WhatToDoInUruguay",
        components: {
            WhatToDoComponent: () => import('./Sections/WhatToDoComponent'),
        },
    }
</script>

<style lang="scss" scoped>

</style>