# vuecli2-arcgis-base

> vuecli2 接入 arcgis js api 方案模板，无须使用 esri-loader

- [x] 修改webpack配置支持使用arcgis框架
- [x] 修改`html-webpack-plugin`配置，支持动态`require`注入带**Hash**后缀的js和css文件
- [x] 支持`import Map from 'esri/Map'`写法
- [x] 支持通过配置文件加载arcgis框架
- [x] 引入`@types/arcgis-js-api`，`@types/dojo`，`tsd.d.ts`，提供arcgis框架及dojo框架相关api语法提示
- [x] 引入vuex，方便在Map组件实例已挂载情况下，其它组件可以通过`this.map`方法来获取地图实例对象
- [x] 引入eslint(airbnb)、prettier
- [x] 引入githook(pre-commit)，git commit前强制使用prettier，eslint统一代码风格

## 相关命令(默认使用yarn)

``` bash
# install dependencies
yarn

# serve with hot reload at localhost:8080
yarn dev

# build for production with minification
yarn build

# build for production and view the bundle analyzer report
yarn build --report
```
