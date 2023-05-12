# [React App ]第二期：财务管理系统

来源：[https://www.youtube.com/watch?v=uoJ0Tv-BFcQ](https://www.youtube.com/watch?v=uoJ0Tv-BFcQ)

B站：[https://www.bilibili.com/video/BV1em4y1273N/](https://www.bilibili.com/video/BV1em4y1273N/)

源项目地址：[https://github.com/ed-roh/finance-app](https://github.com/ed-roh/finance-app)

笔记注释版：[https://github.com/Ashes814/finiancial-management](https://github.com/Ashes814/finiancial-management)

# 0. 简介

![Untitled](%5BReact%20App%20%5D%E7%AC%AC%E4%BA%8C%E6%9C%9F%EF%BC%9A%E8%B4%A2%E5%8A%A1%E7%AE%A1%E7%90%86%E7%B3%BB%E7%BB%9F%204aafe65dde9e4cd79de802101de63e52/Untitled.png)

- 基于`C/S设计模式` 设计的财务管理系统

> *C/S设计模式是一种基于客户端/服务器架构的软件设计模式，它将应用程序的功能和业务逻辑分为两个不同的部分：客户端和服务器。*
> 
> 
> *在C/S模式中，客户端负责用户交互和界面展示，同时也负责将用户的请求发送到服务器。服务器则负责处理这些请求，并返回结果给客户端。客户端和服务器之间通过网络进行通信，这样就可以让用户在任何地方都可以访问到服务器端的功能和数据。*
> 
> *C/S模式通常被用于开发大型、分布式的应用程序，比如电子商务网站、在线银行系统、在线游戏等等。它具有很多优点，比如可以将应用程序的复杂度分散到客户端和服务器两端，提高了应用程序的可扩展性、可维护性和安全性，同时也可以提高应用程序的性能和响应速度。*
> 
- 前端：Vite + TypeScript + React + RTK + MUI
- 后端：Node
- 数据库：MongoDB
- 机器学习：

# 1.工具准备

- `node.js`
- `VS Code`
    - ES7 React
    - Prettier
    - ESLint
- `Chrome`
    - Redux Dev Tools
    - Pesticide for Chrome

# 2.配置前端 - client

- 利用`Vite`搭建脚手架

```bash
npm create vite@latest

#name: client
#React
#TypeScript

cd client
npm install
```

- 安装`react-redux`, `react路由`以及`materialUI`的相关依赖

```bash
npm i react-redux @reduxjs/toolkit react-router-dom @mui/material @emotion/react @emotion/styled @mui/icons-material @mui/x-data-grid
```

- 安装`react`的`Typescript`支持

```bash
npm i -D @types/react-dom #-D 为开发者模式，这样安装后的依赖不会被打包
```

- 配置项目字体-`Google Fonts-inter`
- 配置默认`ESlint`

```bash
npm i -D eslint eslint-config-react-app
```

```json
// client 目录下创建eslintrc.json
{
  "extends": "react-app"
}
```

- 配置BASE_URL

```json
// client 目录下创建.env.local

VITE_BASE_URL=http://localhost:1337
```

```json
// tsconfig.json
...
"types": ["vite/client"] // 加在compilerOptions中
...
```

- 配置简化路径

```bash
npm i -D @types/node
```

```tsx
// vite.config.ts
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [{ find: "@", replacement: path.resolve(__dirname, "src") }],
  },
});
```

```json
// tsconfig.json
...
"paths": {
      "@/*": ["./src/*"]
    }, // 加在compilerOptions中
...
```

- 配置MUI主题 - `theme.ts`
- 扩展主题  - `expanded-theme.ts`
- 在`App.tsx`中配置`materialUI`

# 3. components

- 创建三个组件分别用于设置`flex布局`，`Dashboard盒子`，以及`统计图表`的标题
- `BoxHeader.tsx`
    
    图表的标题，副标题，图标等
    

![Untitled](%5BReact%20App%20%5D%E7%AC%AC%E4%BA%8C%E6%9C%9F%EF%BC%9A%E8%B4%A2%E5%8A%A1%E7%AE%A1%E7%90%86%E7%B3%BB%E7%BB%9F%204aafe65dde9e4cd79de802101de63e52/Untitled%201.png)

- `DashboardBox.tsx`
    
    Dashboard中每个图标区域的的背景颜色，阴影样式等
    
- `FlexBetween.tsx`
    
    flex布局配置
    

# 4. scenes

- 整个前端页面的主体部分，页面由三个部分组成，导航栏navbar，图表区dashboard，机器学习预测predictions

## 4.1 navbar

- 简单的flex布局
- 配置路由链接

![Untitled](%5BReact%20App%20%5D%E7%AC%AC%E4%BA%8C%E6%9C%9F%EF%BC%9A%E8%B4%A2%E5%8A%A1%E7%AE%A1%E7%90%86%E7%B3%BB%E7%BB%9F%204aafe65dde9e4cd79de802101de63e52/Untitled%202.png)

## 4.2 dashboard

- 布局采用CSS Grid，
- 一共十块图标区域，分别对应a - j，采用*`css grid area template`*
- 将整个区域拆分成三行，对应`Row1 - Row3`组件

![Untitled](%5BReact%20App%20%5D%E7%AC%AC%E4%BA%8C%E6%9C%9F%EF%BC%9A%E8%B4%A2%E5%8A%A1%E7%AE%A1%E7%90%86%E7%B3%BB%E7%BB%9F%204aafe65dde9e4cd79de802101de63e52/Untitled%203.png)

- 响应式布局
    
    ```tsx
    const isAboveMediumScreens = useMediaQuery("(min-width: 800px)");
    ```
    

![Untitled](%5BReact%20App%20%5D%E7%AC%AC%E4%BA%8C%E6%9C%9F%EF%BC%9A%E8%B4%A2%E5%8A%A1%E7%AE%A1%E7%90%86%E7%B3%BB%E7%BB%9F%204aafe65dde9e4cd79de802101de63e52/Untitled%204.png)

- 图表采用`[recharts](https://recharts.org/en-US)` 细节见源码

```tsx
npm install recharts
```

## 4.3 predictions

- 简单的`regression` 参考源码

# 5 state

- RTK state，获取服务端数据
- `api.ts`
    - 模版式写法，建立调用api
- `type.ts`
    - 定义后端数据类型，服务Typescript

# 6 配置后端 - server

- `package.json` 利用`npm install`即可
- `data.js`
    - 存放示例数据

## 6.2 数据库 - MongoDB

- [MongoDB](https://www.mongodb.com)
    - 注册MongoDB
    - 创建，连接Cluster - 选择`Connect to Your Application`
    
    ![Untitled](%5BReact%20App%20%5D%E7%AC%AC%E4%BA%8C%E6%9C%9F%EF%BC%9A%E8%B4%A2%E5%8A%A1%E7%AE%A1%E7%90%86%E7%B3%BB%E7%BB%9F%204aafe65dde9e4cd79de802101de63e52/Untitled%205.png)
    
    - `.env` 文件中设置自己的`MongoURL`以及`Port（1337）`

## 6.3 models & route

- KPI, Transactions, Product

## 6.4 `index.js`

- 基本配置
- 配置路由
- 配置数据库