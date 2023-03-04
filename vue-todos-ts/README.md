# vue 集训一

- vue 3.0 + pinia + ts
- node + mysql
- vue 2.0


- npm i nanoid   一个微小的，安全的，URL友好的，唯一的JavaScript字符串ID生成器。
- 路由 ts 规则

  1. ts 为了代码的正确性
  2. craeteRouter() RouterOptions ts 类型约束
     typescript 通过类型约束 可以让所有人的代码写的一致
     ts  多了一些代码量， 难难难
     对新手友好  不用删代码跑路
     js 代码太随意， 原因是没有类型约束 弱类型语言
     企业级开发，

- store 的 ts 规则

  1. 数据管理很重要
      约束数据 todos
  2. type Todo  声明自定义类型
      id
      isComplete
      text
  3. pinia 响应式的状态
      Ref  类型
      todo[]   
