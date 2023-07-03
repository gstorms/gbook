# 使用seldom框架，设置手机模式

在`run.py`设置`browser`参数为手机就行了  
run.py
```python
...
if __name__ == '__main__':
    ChromeConfig.options = f'--user-data-dir={CHROME_PATH}'
    ChromeConfig.headless = False
    ChromeConfig.executable_path = osSystem()   # 默认根据操作系统自行选择Chromedriver驱动
    seldom.main(
        path='./test_case/',
        browser='iPhone 7', # 这里设置browser=‘iPhone 7’
        # browser='chrome',
        debug=False,
        rerun=0,
        timeout=10,
        save_last_run=True,
        title='自动化测试报告',
        description='测试环境：Chrome'
    )
```
支持的手机在seldom/driver.py中有：  
seldom/driver.py
```python
...
PHONE_LIST = [
    'iPhone 5', 'iPhone 6', 'iPhone 7', 'iPhone 8', 'iPhone 8 Plus',
    'iPhone X', 'Pixel 2', 'Pixel XL', "Galaxy S5"
]
PAD_LIST = ['iPad', 'iPad Pro']
...
```
