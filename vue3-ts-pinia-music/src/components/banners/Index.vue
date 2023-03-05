<template>
    <div>
      {{ JSON.stringify(banners) }}
    </div>
</template>

<script lang="ts" setup>
defineProps({
    banners:{
        type:Array,
        default:[]
    }
})
</script>

<style lang="stylus" scoped>

</style>