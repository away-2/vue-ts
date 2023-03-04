import { reactive } from 'vue'
import { defineStore } from 'pinia'
import { getProducts,IProduct } from '../service/shop'

// defineStore第一种用法
// export const useProductsStore = defineStore('products',{
//     state:() => {
//         return {
//             all: [] as IProduct[]
//         }
//     },
//     getters:{},
//     actions:{
//         async loadAllProduct(){
//             const ret = await getProducts()
//             this.all = ret 
//         }
//     }
// })

//  defineStore第二种用法
// - 大型项目  数据管理  pinia 是新一代的vuex  数据管理 + 界面开发
// - 大型项目 ts 
// 函数式编程  消灭this 
export const useProductsStore  = defineStore('products', () => {
    // let all : IProduct[] = reactive([]);   // 状态交给了响应式
    let state = reactive({
        all: [] as IProduct[]
    })
    const loadAllProducts = async () =>{
        const ret = await getProducts() as IProduct[]
        // console.log(ret,'????')
        state.all = ret
    }
    const decrementProduct = (product :IProduct) => {
        const curProduct = state.all.find(item => item.id === product.id)
        if (curProduct) {
            curProduct.inventory--
        }
    }
    return {
        state,
        loadAllProducts,
        decrementProduct
    }
})