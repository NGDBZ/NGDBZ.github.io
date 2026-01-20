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
