<img width="773" height="406" alt="Image" src="https://github.com/user-attachments/assets/6eb53a50-5d0c-43ae-a662-96d63fad3242" />


components里面也是组件，但没有App.vue这个根组件厉害

<br>&nbsp;<br>&nbsp;<br>&nbsp;

`import { createApp } from "vue";`


<img width="455" height="271" alt="Image" src="https://github.com/user-attachments/assets/4ef52e04-ad5f-4c9e-bdd2-43f341391ad2" />
<br>&nbsp;<br>&nbsp;<br>&nbsp;


> [!NOTE]
>Vue2中必须这样写吗
是的，你的理解完全正确。

在 Vue 2（以及 Vue 3 的选项式 API）中，如果你想在组件里定义**属于这个组件自己的、可变化的数据**（比如名字、数量、状态开关等），你就必须按照这个格式来写：

### 标准格式

```javascript
export default {
    // ...其他选项
    data() {
        return {
            // 这里放你的具体数据
            message: 'Hello Vue',
            count: 0
        }
    },
    // ...其他选项
}
```
<br>&nbsp;<br>&nbsp;<br>&nbsp;<br>&nbsp;<br>&nbsp;<br>&nbsp;

> [!NOTE]
>在Vue中如果要引入一个模块里面的函数必须要是加上大括号吗

<html>
<body>
<!--StartFragment--><html><head></head><body><p>在 Vue（以及标准的 JavaScript/ES6 模块系统）中，<strong>是否需要加大括号 <code>{}</code></strong>，完全取决于<strong>那个文件是如何“导出”（export）这个函数的</strong>。</p>
<p>简单来说，规则只有两条：</p>
<h3>1. 如果导出时用了 <code>export function</code>（命名导出）</h3>
<p><strong>必须加 <code>{}</code></strong>。</p>
<ul>
<li><strong>导出方（定义函数的文件）是这样写的：</strong><pre><code class="language-javascript">// utils.js
export function myFunc() { // 注意：这里有 export 关键字
    console.log('我是函数')
}
</code></pre>
</li>
<li><strong>引入方（你现在的文件）必须这样写：</strong><pre><code class="language-javascript">// App.vue
import { myFunc } from './utils.js' // 必须加 {}
</code></pre>
<strong>原因：</strong> 这种导出方式叫“命名导出”（Named Export）。文件里可能有多个函数，你必须用 <code>{}</code> 明确告诉电脑：“我要引入的是叫 <code>myFunc</code> 那个特定的函数”。</li>
</ul>
<h3>2. 如果导出时用了 <code>export default</code>（默认导出）</h3>
<p><strong>绝对不能加 <code>{}</code></strong>。</p>
<ul>
<li><strong>导出方是这样写的：</strong><pre><code class="language-javascript">// utils.js
function myFunc() {
    console.log('我是函数')
}
export default myFunc; // 注意：这里是 default
</code></pre>
</li>
<li><strong>引入方必须这样写（不加括号）：</strong><pre><code class="language-javascript">// App.vue
import myFunc from './utils.js' // 不加 {}
</code></pre>
<strong>原因：</strong> <code>default</code> 意味着这个文件“默认”只输出这一个东西。引入时你可以给它起任何名字，而且不需要 <code>{}</code>。</li>
</ul>
<hr>
<h3>总结对比表</h3>

导出方式 (在函数定义的文件里) | 导入方式 (在你现在的文件里) | 备注
-- | -- | --
export function fn() | import { fn } from './xx' | 必须加 {}
export default fn | import fn from './xx' | 不能加 {}


<h3>为什么会有这个区别？</h3>
<p>你可以把模块想象成一个<strong>快递箱</strong>：</p>
<ol>
<li><strong>加 <code>{}</code> 的情况</strong>：箱子是透明的，里面有好几个东西（比如 <code>fn1</code>, <code>fn2</code>）。你要拿 <code>fn1</code>，就必须伸手进去指名道姓地拿：<code>import { fn1 }</code>。</li>
<li><strong>不加 <code>{}</code> 的情况</strong>：箱子是不透明的，里面只有一个东西（<code>default</code>）。你直接把整个箱子抱走就行，不需要指名道姓，所以不加 <code>{}</code>。</li>
</ol>
<p><strong>所以，如果你发现不加 <code>{}</code> 会报错，那通常是因为那个函数在源文件里是用 <code>export function</code> 定义的，这时候你就必须给它加上 <code>{}</code>。</strong></p>
</body></html><!--EndFragment-->
</body>
</html>
