

## 正确命令：
```bash
# 从本地 上传到 远程
scp /home/ldb/下载/crawlersys/downloaded_images/gettyimages#20260203#人床_1.zip admin@192.168.0.173:/share/Task_Server/0021BabyBodyAge/Class0026#AdultTopView/00RawData/
```

## 详细说明：
- **本地文件**：`/home/ldb/下载/crawlersys/downloaded_images/gettyimages#20260203#人床_1.zip`
- **远程目标**：`admin@192.168.0.173:/share/Task_Server/0021BabyBodyAge/Class0026#AdultTopView/00RawData/`

## 完整命令：
```bash
scp "/home/ldb/下载/crawlersys/downloaded_images/gettyimages#20260203#人床_1.zip" admin@192.168.0.173:"/share/Task_Server/0021BabyBodyAge/Class0026#AdultTopView/00RawData/"
```

## 其他有用参数：
```bash
# 1. 显示进度
scp -v "/home/ldb/下载/crawlersys/downloaded_images/gettyimages#20260203#人床_1.zip" admin@192.168.0.173:"/share/Task_Server/0021BabyBodyAge/Class0026#AdultTopView/00RawData/"

# 2. 使用特定端口（如果不是默认22）
scp -P 2222 "/home/ldb/下载/crawlersys/downloaded_images/gettyimages#20260203#人床_1.zip" admin@192.168.0.173:"/share/Task_Server/0021BabyBodyAge/Class0026#AdultTopView/00RawData/"

# 3. 压缩传输（对大文件有用）
scp -C "/home/ldb/下载/crawlersys/downloaded_images/gettyimages#20260203#人床_1.zip" admin@192.168.0.173:"/share/Task_Server/0021BabyBodyAge/Class0026#AdultTopView/00RawData/"

# 4. 保持文件属性
scp -p "/home/ldb/下载/crawlersys/downloaded_images/gettyimages#20260203#人床_1.zip" admin@192.168.0.173:"/share/Task_Server/0021BabyBodyAge/Class0026#AdultTopView/00RawData/"
```

## 执行步骤：
```bash
# 1. 先测试连接
ssh admin@192.168.0.173 "ls -la /share/Task_Server/0021BabyBodyAge/"

# 2. 上传文件
scp "/home/ldb/下载/crawlersys/downloaded_images/gettyimages#20260203#人床_1.zip" admin@192.168.0.173:"/share/Task_Server/0021BabyBodyAge/Class0026#AdultTopView/00RawData/"

# 3. 验证上传
ssh admin@192.168.0.173 "ls -la /share/Task_Server/0021BabyBodyAge/Class0026#AdultTopView/00RawData/"
```

## 如果文件名有特殊字符：
```bash
# 使用引号包裹路径
scp "/home/ldb/下载/crawlersys/downloaded_images/gettyimages#20260203#人床_1.zip" \
    admin@192.168.0.173:"/share/Task_Server/0021BabyBodyAge/Class0026#AdultTopView/00RawData/"
```

## 如果文件很大，可以先用 rsync（支持断点续传）：
```bash
rsync -avzP "/home/ldb/下载/crawlersys/downloaded_images/gettyimages#20260203#人床_1.zip" \
    admin@192.168.0.173:"/share/Task_Server/0021BabyBodyAge/Class0026#AdultTopView/00RawData/"
```

请运行这个正确的命令。