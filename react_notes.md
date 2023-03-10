# Schedule

|Date | Section|
|-|-|
|2022-12-29|3.28|
|2022-12-30|3.42|

# Others
[Working with Mulitple Project in VScode](https://www.youtube.com/watch?v=MUlisk6Om20&t=4s)
[Note taking inside of VSCode](https://www.youtube.com/watch?v=dW6m4_O0qvQ)
[windows 批处理工具语法](https://www.cnblogs.com/zhaoqingqing/p/4620402.html)


# Javascript 
### Class

class在JS始终还是 prototype inheretence?? (pysudo)
在ES6之后, JS才有class keyword. 在ES6之前, 如果要定义的类的方法, 需要用prototype关键词
constructor是在每次类初始化(当new出现)时, 调用的方法
但是这些class的写法只是语法糖, 底层还是运行以前的JS

### shallow merge

```javascript
obj1 = {name: 'xiao'}
obj2 = Object.assign({}, obj1)  //以第一个参数为模板, 将obj1 copy的属性复制进去, 创建一个新的对象
obj2 === obj1 // false

// 拼接新的对象
obj3 = Object.assign({age: 22, obj1}) // obj3 = {age: 22, name: 'xiao'} 
```


```javascript
class Elf {
   constructor(name, weapon) {
      this.name = name;
      this.weapon = weapon;
   }
   attack() {
      return 'attack with ` + this.weapon;
   }
}

// 初始化
const peter = new Elf('Peter', 'stones');
console.log(peter instanceof Elf);
peter.attack();


```
### map
```javascript
myArray = [1, 2, 3]
myArray.map(ele => ele + 1)
```
### filter
```javascript
myArray = [1, 2, 3]
myArray.filter((ele)=>ele <= 2)

```


# React Development tools
1. React Developer Tool (chrome extension) 可以展示react开发的页面的组件结构. 

# Reference Materials

## Course
### Main
1. [Complete React Developer in 2023 (w/ Redux, Hooks, GraphQL)](https://www.udemy.com/course/complete-react-developer-zero-to-mastery/)

### Refer Course
[Complete NodeJS Developer in 2023](https://www.udemy.com/course/complete-nodejs-developer-zero-to-mastery/learn/lecture/26006902#overview)
[Node.js, Express, MongoDB & More: The Complete Bootcamp 2023](https://www.udemy.com/course/nodejs-express-mongodb-bootcamp/)

[Modern Javascript From the Beginning](https://www.udemy.com/course/modern-javascript-from-the-beginning/learn/lecture/8757064?start=0#overview)
[Javascript: Understanding the Weird Parts](https://www.udemy.com/course/understand-javascript/learn/lecture/2237436?start=0#overview)
[Javascript: The Advanced Concepts 2023](https://www.udemy.com/course/advanced-javascript-concepts/learn/lecture/13512858?start=0#overview)

## React
[React Official Doc](https://reactjs.org/docs/create-a-new-react-app.html)
[nvm](https://github.com/nvm-sh/nvm) 用来控制node version, 类似于python的pyenv
[React code Sandbox Online](https://github.com/nvm-sh/nvm)

## React Packages
[create-react-app](https://create-react-app.dev/docs/getting-started/)


## Projects
1. [Yihua Monster-rolodex](https://zhangmyihua.github.io/monsters-rolodex/)

## API
[json place holder]("https://jsonplaceholder.typicode.com/users")

# Explorer
## Babel
是一种编译器compiler, 可以把现代的JS代码编译成过去的JS代码, 使所有的浏览器都能读懂

## Webpack
是一种打包工具bundler, 可以将现代的前端框架那种模块化的js文件, 打包压缩成单个的js文件, 提高浏览器加载的性能
## Next.js
动态网站和静态网站都可


## Gatsby
适合做静态网站


# React Env
1. Install [nodejs](https://nodejs.org/en/)


## MAC

## Windows

## Vscode settings
[Yihua's vscode Setting](https://www.udemy.com/course/complete-react-developer-zero-to-mastery/learn/lecture/15462544#overview)

## npm
npm 是nodejs的包管理工具. 类似于python的pip
如果npm版本大于5.2 就可以用npx命令来创建react项目

## yarn
yarn和npm的功能相同, 只是一段时间里npm有很多bug, 所以facebook做了yarn
```shell
yarn -v
```

|yarn|npm|usage|
|-|-|-|
|npm install|yarn|Install dependencies from package.json|
|npm install package --save|yarn add package|Install a package and add to package.json|
|npm install pakcage --save-dev|yarn add package --dev|Install a devDependency to package.json|
|npm uninstall package --save|yarn remove package|Remove a dependency from package.json|
|npm update --save|yarn upgrade|Upgrade a package to its latest version|
|npm install package -g|yarn global add package|Install a package globally|
|npm start|yarn start|start develop server|


[Working with Multiple Projects in VS Code](https://www.youtube.com/watch?v=MUlisk6Om20)
# why react
Before react, we use jquery to manipulate DOM cross the browers. DOM is a tree-like structure of html nodes in a page.

What we want is just request once from server to fetch js/html/css files, then the user can intereact with page component only with JS. With this method, it is easier for us to write single-page applications.

MVC Model View Controler. Angularjs是google开发的, 他的作用是开创了前端组件化的先河. 
但是没解决的问题是, 各个组件之间的通信问题(其实现很复杂)
reactjs
1. 由React来操作DOM,而是不是代码直接操作
   React 将imperative转为declaretive的写法. 也就是说, 原来我是命令式的, 主动的上手去做各种组件的变动. 现在我只是声明状态, 然后react自己会替我完成
2. Build website like lego block
3. Unidirectional data flow
   React构造了virtual DOM, 使得我们不必直接操作DOM. virtual DOM本身也是一种tree结构. 所以只要告诉React Status变化和对应的components, 则在对应Components下面的节点, 都会变动. 但是节点之外的分支, 没有必要变动. 而virtual DOM再操作真实的DOM做页面的渲染(这里是React自己完成, 效率很高). 
   因为virtal DOM也是树状结构, 所以status变化节点之下的变化是沿着单个分支单向变化的
4. UI, The rest is up to you
   前后端分离, React只关注前端的呈现


Changing the DOM was a very expensive operation. usually the page need to be reload. 

```javascript
let state = {
    user: 'Andrei Neagoie', 
    isLoggedIn: True, 
    friends: ['Pavel', 'Matt', 'Joy']
}
```
我只要把上面的对象传给React, React会操作DOM自动帮我把页面显示出来
React如何时间页面的组件化? 通过JS函数实现, 这个JS函数return HTML, 而不是字符串
组件化好处是, scale方便, meanwhile, 也可以从其他地方copy现成开发好的组件


## React web开发和其他
React web开发用到了两个Library, 一个是React Core和React DOM, 也就是说如果用React去开发手机应用, 则会使用React Core和React手机的Library
这里提供几个React Library, 其实用于render
[React desktop](https://reactdesktop.js.org/) 用户开发桌面应用
[React Blessed](https://github.com/Yomguithereal/react-blessed) 用于开发命令行应用
[React 360](https://github.com/facebookarchive/react-360) 用于开发VR应用


# Jobs for React Developer
1. Decide on Components
2. Decide the State and Where it lives
3. What changes when state changes


# React Development

## npm vs. npx
本质上, create-react-app是一个facebook创建的package, 是需要安装的, 而且有多个版本. 
注意: 全局安装的包, 在本地是看不到的

```shell
npm install create-react-app # 安装 create-react-app在本地
npm install -g create-react-app # 全局安装 create-react-app
npm list <package-name> # 查看本地是否有这个package
npm list -g <package-name> # 查看全局是否安装了这个package

npx create-react-app <app_name> 

```
npx本质上下载需要的package(最新版), 并且直接运行. 但是不会在package.json中. 

npm start
npm run build
npm run test
npm run eject 作用是输出babel和webpack一级build, start, test用到的js脚本, 这些脚本其实一般的程序员是改不动的, 因为是react的facebook团队在优化这部分代码

## Class Component vs Function Component
本质上他们是做一样的事情

1. class Component会继承Component对象
2. class Component要继承并重写constructor构造方法, 并定义了state属性对象
3. class Component要写render方法, return jsx
4. 在jsx中深复制了一个state初始状态对象
5. React只有在发现state初始状态对象变成一个新的对象时, 才会重新渲染这个component
6. 在jsx中如果要修改初始状态对象, 需要用`this.setState({key: 'value'})` 方法.
7. `setState`方法做的是shallow merge, 也就是说, 它会保留初始状态对象的所有属性, 只修改边变化的属性
8. `setState`并不会校验被修改的属性类型是否和初始状态中的属性是否一致, 所以我们要自己控制, typescript是否能控制
9. React 建议 `setState` 传入update function和callback(可选的) 用来解决异步的问题. 因为callback 只有在state修改完成后才会执行 
10. update function默认有两个参数 state和props(两个都是可选的), state是初始状态, props可以传入外部的新参数
11. `setState`是异步调用, 也就是说如果在`setState`后面有console.log打印出来的是修改之前的状态.
12. React把`setState`作为异步的原因是如果有很多state需要变更, React会把这些变更累加起来, 用优化的方式来决定如何渲染DOM
   
```javascript
import { Component } from 'react';

class App() extends Component {
   constructor() {
      super();
      this.state = {
         key: 'value', //这里是初始状态
      };
   }
   render() {
      return (
         <div className='App'>
            {this.state.key}  // 这里是deep copy了初始状态, 普通的修改并不会改变初始状态对象
            {this.setState((state, props)=>{  // 传入update function, return shallow merge初始状态对象
               return {key: 'value'}
            }, ()=>{})}  // 传入callback函数
         </div>
      )
   }
}

```

### SPA
Single Page Application
不是说这应用只有一页, 而是在第一次请求时, 就会得到html, css, 和react相关的js文件, 在后面请求子页面时, 不需要向服务器再请求html/css/js了, 而是由react相关的js,自己构建html, css文件

### Lifecycle Methods
[react doc lifecycle methods](https://reactjs.org/docs/react-component.html)

当一个component mount到dom时, 有几个操作
1. component初始化执行 construct函数中的内容
2. 执行component中的render函数, 此时component完成mount DOM
3. 执行componentDidMount函数中的内容
4. 如果componentDidMount中修改了state中的对象, 则会再次执行render函数中的内容

JSX is syntax extension of JS, 他把所有的html tag都做了对应的component, 只是写法上会和原来的hmtl有点区别
比如 class改为className, 因为class是JS的保留关键字