commit() 是数据库编程中的一个关键方法，用于永久保存对数据库所做的更改。简单来说，它就是“确认并保存”按钮。
在 Python 中，当你通过连接对象（通常命名为 conn）与数据库（如 SQLite, MySQL, PostgreSQL）交互时，conn.commit() 的作用是将当前事务中所有未保存的修改（如插入、更新、删除）永久写入数据库磁盘，并使这些更改对其他数据库连接可见。

<img width="465" height="240" alt="Image" src="https://github.com/user-attachments/assets/8d1cf8bf-8cde-40c2-964b-d50683478653" />