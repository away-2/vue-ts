// js 如何提升数据的完整性
// const num:Number = "1112"
// num = "ddd"
// 接口  街头
// JS  为何没有？  弱类型  js  有太多糟粕   接口肯定也没有
// 自定义接口   检查数据  代码在运行之前就报错
// SQL  定义表？
export interface IProduct {
    id: number;
    title: string;
    price: number;
    inventory: number;
}

const _products :IProduct[] = [
    { id:1, title:'iPad 4 Mini',price:500.01,inventory:2},
    { id:2, title:'H&M T-Shift White',price:250.01,inventory:3 },
    { id:3, title:'H&M T-Shift Black',price:250.01,inventory:4 }
]

export const getProducts = async () =>{
    // 延迟加载
    await wait(1000)
    return _products
}

export const buyProducts = async () =>{
    await wait(1000)
    return Math.random() > 0.5
}
function wait(delay:number){
    return new Promise((resolve) =>{
        setTimeout(resolve,delay);  // 
    })
   
}