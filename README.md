
## 工程简介： 
    主要适用于单入口文件、轻量级应用搭建
    -js: 支持js、jsx、ts、tsx， 支持es6, es7新语法，打包时会自动编译为es5
    -css: 支持css、scss、less

## 应用框架：
    react

## 状态管理：
    dva

## 组件库：
    ant Design

## 本地环境开发运行：

```sh
    npm install
    npm start
```

## 开发环境打包：

```sh
    npm run dev
```

## 生产环境打包：

```sh
    npm run build
```

## 目录结构：
    - webpack配置: ./config
    - 前端资源: ./src
        - 组件： ./src/components
        - 静态资源： ./src/asserts
        - api接口： ./src/services
        - 状态管理： ./src/models
        - 公共方法： ./src/utils
            - 请求方法： ./src/utils/request.js
    - 反向代理： ./server.yml
        
## 注意：

### Commit提交代码注意规范：
    - feat: 新功能
    - fix: 修补bug
    - docs： 文档、注释
    - style: 样式（不影响代码运行的变动）
    - refactor： 重构（即不是新功能，也不是修改 bug 的变动）
    - test：增加测试
    - chore：构建过程或辅助工具的变动

