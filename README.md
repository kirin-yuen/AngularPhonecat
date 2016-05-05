### PhoneCat Tutorial App

该项目是基于[angular-seed project](https://github.com/angular/angular-seed)作为骨架，进行内容的扩展。  
作为学习，我从step-0版本至step-12中走了一遍，加了一些我认为重要的原文内容作为注释。
教程地址：https://docs.angularjs.org/tutorial


### 安装

教程中需要clone该项目的最新的14个版本到本地
```
git clone --depth=14 https://github.com/angular/angular-phonecat.git
```

如果需要从零开始按步骤完成，可从step-0开始，到最终版本step12
```
git checkout -f step-0
```

安装依赖

```
npm install
```

### 使用

启动服务器，然后打开浏览器填入http://localhost:8000/app/

```
npm start
```



### 运行 Behavior-driven Development (BDD) 测试
```
npm test
```
测试时Karma会自动打开Chrome和Firefox的浏览器，如果只安装了其中一个浏览器，
请更新test/karma.conf.js
```
...
browsers: ['Chrome'], // 只有chrome浏览器
```


### 运行 End to End Tests with Protractor

```
npm run protractor
```
由于需要模拟用户输入，请先启动服务器后再进行测试