 假设 card_key = "ABC'; DROP TABLE card_keys; --"
```
sql = f"SELECT ... WHERE card_key = '{card_key}'"
conn.execute(sql)
```
"

最终生成的 SQL 变成了：
`SELECT * FROM card_keys WHERE card_key = 'ABC'; DROP TABLE card_keys; --'
`
数据库会傻傻地执行两条命令：先查，再把表删了！


## 使用占位符
`conn.execute('SELECT ... WHERE card_key = ?', (card_key,))
`                                      
加逗号是为了被识别成元组
Python 会告诉数据库：“这是数据，不是代码，请严格按数据处理。”
 即便 card_key 里包含了恶意的 SQL 代码（如上面的 DROP TABLE），
 数据库也会把它当成“普通的字符串”去查找，而不会去执行它。  

<img width="407" height="97" alt="Image" src="https://github.com/user-attachments/assets/5df4d32e-2b39-4546-ada2-c071a82e5a8d" />

### **_为什么要是元组？_**

execute() 方法非常严格，它要求参数必须是“序列类型”（Sequence）。

### **_什么是序列类型？_**

<img width="464" height="194" alt="Image" src="https://github.com/user-attachments/assets/b90091e2-a437-4b9e-81d9-05a0edad2623" />



                                 