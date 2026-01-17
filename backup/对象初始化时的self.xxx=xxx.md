<img width="908" height="681" alt="Image" src="https://github.com/user-attachments/assets/d6e83689-b639-4ad7-9f0c-8e9155632086" />
###如果不写这行代码，会有什么后果？
后果：card_key 只是一个函数内部的局部变量。函数（__init__）运行完后，这个变量就会消失，你的线程对象就“忘记”了这个卡密。
解决：通过 self.card_key = ...，你把这个局部变量“提升”为了实例属性。