<template>
    <div>
        <div class="recommend">
            <Banners v-if="banners.length" :banners="banners"/>
        </div>
    </div>
</template>

<script setup lang="ts">
import { onMounted ,computed} from 'vue'
import { useRecommendStore } from '@/store/recommend'
import Banners from '@/components/banners/Index.vue'

const recommendStore = useRecommendStore()
const banners = computed(() => recommendStore.banners)
onMounted(async () =>{
    const bannersData = await recommendStore.getBannersData()
    console.log(bannersData)
})
// recommendStore.getBannersData()
</script>

<style scoped>

</style>