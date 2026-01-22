如果你在一个 HTML 文件（比如 page1.html）里写了 <style>，它只会影响 page1.html 自己。当你打开另一个 HTML 文件（page2.html）时，page1.html 里的样式完全失效，一点都不会“污染”到 page2.html。

> [!NOTE]
>  
在 Vue 的 .vue 文件中，只要你写了 <style> 标签（没有加 scoped），它就会被 Vue 自/动注入到页面 里，变成全局样式。