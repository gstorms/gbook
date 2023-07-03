```python
		image_dir = os.path.join(RunConfig.NEW_REPORT, "image", file_name) # 图片地址
        RunConfig.driver.save_screenshot(image_dir)
        with open(image_dir, "rb") as f:
            file = f.read()
            allure.attach(file, "失败截图", allure.attachment_type.PNG) # 将图片附加到报告中
```

