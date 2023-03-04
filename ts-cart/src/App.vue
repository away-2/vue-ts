<script setup lang="ts">
// import { computed } from '@vue/reactivity';
// import { computed, onMounted } from 'vue';
// import {useProductsStore} from './store/products'
// const productsStore = useProductsStore()

// const all = computed(() => productsStore.state.all)


// onMounted(async () => {
//   await productsStore.loadAllProducts();
// })
// productsStore.loadAllProducts();
// setTimeout(() =>{
//   console.log(all,'!!!!!')
// },4000);
// console.log(all,'//////')
import ProductsList from './components/ProductsList.vue'
import Cart from './components/Cart.vue'
</script>

<template>
<h1>购物车</h1>
<hr>
<h1>商品列表</h1>
<ProductsList />
<hr>
<Cart />
</template>

<style>

</style>