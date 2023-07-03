# 用python做接口测试（1）

使用python3+pytest+allure+Jenkins


### 项目结构

![](https://cdn.nlark.com/yuque/0/2021/png/12492743/1611199540280-0b27e401-9b9b-4eef-962a-008f78711468.png#align=left&display=inline&height=412&margin=%5Bobject%20Object%5D&originHeight=412&originWidth=624&size=0&status=done&style=none&width=624)

读取文件数据file_reader.py

```
import yaml
import os
from xlrd import open_workbook


class YamlReader:
    def __init__(self, yamlf):
        if os.path.exists(yamlf):
            self.yamlf = yamlf
        else:
            raise FileNotFoundError('文件不存在！')
        self._data = None

    @property
    def data(self):
        # 如果是第一次调用data，读取yaml文档，否则直接返回之前保存的数据
        if not self._data:
            with open(self.yamlf, 'rb') as f:
                self._data = list(yaml.safe_load_all(f))  # load后是个generator，用list组织成列表
        return self._data


class SheetTypeError(Exception):
    pass


class ExcelReader:
    """
        读取excel文件中的内容。返回list。

        如：
        excel中内容为：
        | A  | B  | C  |
        | A1 | B1 | C1 |
        | A2 | B2 | C2 |

        如果 print(ExcelReader(excel, title_line=True).data)，输出结果：
        [{A: A1, B: B1, C:C1}, {A:A2, B:B2, C:C2}]

        如果 print(ExcelReader(excel, title_line=False).data)，输出结果：
        [[A,B,C], [A1,B1,C1], [A2,B2,C2]]

        可以指定sheet，通过index或者name：
        ExcelReader(excel, sheet=2)
        ExcelReader(excel, sheet='BaiDuTest')
        """

    def __init__(self, excel, sheet="版本", title_line=True):
        if os.path.exists(excel):
            self.excel = excel
        else:
            raise FileNotFoundError('文件不存在！')
        self.sheet = sheet
        self.title_line = title_line
        self._data = list()

    @property
    def data(self):
        if not self._data:
            workbook = open_workbook(self.excel)
            if type(self.sheet) not in [int, str]:
                raise SheetTypeError('Please pass in <type int> or <type str>, not {0}'.format(type(self.sheet)))
            elif type(self.sheet) == int:
                s = workbook.sheet_by_index(self.sheet)
            else:
                s = workbook.sheet_by_name(self.sheet)

            if self.title_line:
                title = s.row_values(0)  # 首行为title
                for col in range(1, s.nrows):
                    # 依次遍历其余行，与首行组成dict，拼到self._data中
                    self._data.append(dict(zip(title, s.row_values(col))))
            else:
                for col in range(0, s.nrows):
                    # 遍历所有行，拼到self._data中
                    self._data.append(s.row_values(col))
        return self._data
```

读取配置config.py

```python
"""
读取配置。这里配置文件用的yaml，也可用其他如XML,INI等，需在file_reader中添加相应的Reader进行处理。
"""
import os
from common.file_reader import YamlReader

# 通过当前文件的绝对路径，其父级目录一定是框架的base目录，然后确定各层的绝对路径。如果你的结构不同，可自行修改。
# 之前直接拼接的路径，修改了一下，用现在下面这种方法，可以支持linux和windows等不同的平台，也建议大家多用os.path.split()和os.path.join()，不要直接+'\\xxx\\ss'这样
BASE_PATH = os.path.split(os.path.dirname(os.path.abspath(__file__)))[0]
# BASE_PATH = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
CONFIG_FILE = os.path.join(BASE_PATH, 'config.yaml')
DATA_PATH = os.path.join(BASE_PATH, 'data')
DRIVER_PATH = os.path.join(BASE_PATH, 'drivers')
LOG_PATH = os.path.join(BASE_PATH, 'logs')
REPORT_PATH = os.path.join(BASE_PATH, 'report')
SCREENSHOTS_PATH = os.path.join(BASE_PATH, 'screenshots')

class Config:
    def __init__(self, config=CONFIG_FILE):
        self.config = YamlReader(config).data

    def get(self, element, index=0):
        """
        yaml是可以通过'---'分节的。用YamlReader读取返回的是一个list，第一项是默认的节，如果有多个节，可以传入index来获取。
        这样我们其实可以把框架相关的配置放在默认节，其他的关于项目的配置放在其他节中。可以在框架中实现多个项目的测试。
        """
        return self.config[index].get(element)
```

日志logger.py

```
import logging
import time
from logging.handlers import TimedRotatingFileHandler
from common.config import Config, LOG_PATH


class Logger(object):
    def __init__(self, logger_name='framework'):
        self.logger = logging.getLogger(logger_name)
        logging.root.setLevel(logging.NOTSET)
        c=Config().get('log')
        rq = time.strftime('%Y%m%d', time.localtime(time.time()))
        self.log_file_name = c.get('file_name') if c and c.get('file_name') else rq+'.log'  # 日志文件
        self.backup_count = c.get('backup') if c and c.get('backup') else 5  # 保留的日志数量
        # 日志输出级别
        self.console_output_level =c.get('console_level') if c and c.get('console_level') else 'INFO'
        self.file_output_level = c.get('file_level') if c and c.get('file_level') else 'INFO'
        # 日志输出格式
        # pattern=c.get('pattern') if c and c.get('pattern') else '%(asctime)s - %(name)s - %(levelname)s - %(message)s'
        pattern=c.get('pattern') if c and c.get('pattern') else '%(asctime)s - %(levelname)s - %(name)s - %(message)s'
        self.formatter = logging.Formatter(pattern)

    def get_logger(self):
        """在logger中添加日志句柄并返回，如果logger已有句柄，则直接返回"""
        if not self.logger.handlers:  # 避免重复日志
            console_handler = logging.StreamHandler()
            console_handler.setFormatter(self.formatter)
            console_handler.setLevel(self.console_output_level)
            self.logger.addHandler(console_handler)

            # 每天重新创建一个日志文件，最多保留backup_count份
            file_handler = TimedRotatingFileHandler(filename=LOG_PATH + "/"+self.log_file_name,
                                                    when='D',
                                                    interval=1,
                                                    backupCount=self.backup_count,
                                                    delay=True,
                                                    encoding='utf-8'
                                                    )
            file_handler.setFormatter(self.formatter)
            file_handler.setLevel(self.file_output_level)
            self.logger.addHandler(file_handler)
        return self.logger


logger = Logger().get_logger()
```

configHttp.py

```
import json
import requests
import allure
from common.config import Config
from common.logger import Logger
from common.commons import strdict, urljoin
from common.comapi import Comapi

logger = Logger(logger_name='configHttp').get_logger()


class ConfigHttp:
    def __init__(self):
        global weburl, appurl, port, timeout
        weburl = Config().get('HTTP').get('baseurl')
        appurl = Config().get('HTTP').get('appurl')
        port = Config().get('HTTP').get('port')
        timeout = Config().get('HTTP').get('timeout')
        self.headers = Config().get('HTTP').get('headers')
        self.params = {}
        self.data = {}
        self.url = None
        self.files = {}

    @allure.step("设置参数")
    def set_config(self, host=None, url=None, header=None, param=None, data=None, files=None, content_type=None):
        self.set_url(host, url)
        self.set_headers(header)
        if param:
            self.set_params(param)
        if data:
            self.set_data(data)
        if files:
            self.set_files(files)
        if content_type:
            self.set_content_type(content_type)
    @allure.step("设置URL")
    def set_url(self, host=None, url=None):
        """set url"""
        if host:
            if url:
                self.url = urljoin(appurl, url)
            else:
                self.url = urljoin(appurl)
        else:
            if url:
                self.url = urljoin(weburl, url)
            else:
                self.url = urljoin(weburl)



    @allure.step("设置headers")
    def set_headers(self, header):
        """set header"""
        if header and isinstance(header, str):
            header = json.loads(header)
        self.headers.update(header)

    @allure.step("设置params")
    def set_params(self, param):
        """set param"""
        param = strdict(param)
        # self.params = json.dumps(param).encode('utf-8')
        self.params = param

    @allure.step("设置data")
    def set_data(self, data):
        """set data"""
        token = "0f9d83580ad57479eecec9fb2faa1099fe35"
        self.data = data
        dd = strdict(self.data)
        dd['token'] = token
        self.data = json.dumps(dd).encode('utf-8')

    @allure.step("设置files")
    def set_files(self, file):
        """set files"""
        self.files = file

    @allure.step("设置content_type")
    def set_content_type(self, content_type):
        """set content_type"""
        self.headers['Content-Type'] = content_type

    # 定义http的get方法
    @allure.step("执行GET方法")
    def get(self):
        """GET 方法"""
        try:
            logger.info("GET请求URL：{}".format(self.url))
            logger.info("GET请求参数：{}".format(self.params))
            logger.info("GET请求Headers：{}".format(self.headers))
            logger.info(timeout)
            s = requests.session()
            response = s.get(self.url, params=self.params, headers=self.headers, timeout=float(timeout), verify=False)
            logger.info("GET请求返回结果：{}".format(response))
            return response
        except TimeoutError:
            logger.error('Time out!')
            return None

    # 定义http的post方法
    @allure.step("执行POST方法")
    def post(self):
        """POST 方法"""
        try:
            logger.info("POST请求URL：{}".format(self.url))
            logger.info("POST请求data：{}".format(self.data))
            logger.info("POST请求Headers:{}".format(self.headers))
            s = requests.session()
            response = s.post(self.url, headers=self.headers, params=self.params, data=self.data, verify=False)
            logger.info("POST请求返回结果：{}".format(response))
            return response
        except TimeoutError:
            logger.error('Time out!')
            return None
        except Exception as e:
            logger.info("postcuowu")
            logger.error(e)
            return None
```

测试用例test_inter.py

```
import sys
from common.config import BASE_PATH
sys.path.append(BASE_PATH)
# import os
import pytest
import allure
import json
from common.configHttp import ConfigHttp
from common.logger import Logger
# from common.file_reader import ExcelReader
from common.commons import strdict
# from common.assertpymy import assert_that
from common.comapi import Comapi
from common.errors import MethodException
from common.check_result import CheckResult
logger = Logger(logger_name='Main').get_logger()


@allure.feature("接口测试")
class TestInter:
    """接口测试"""

    @classmethod
    def setup_class(cls):
        cls.token = Comapi().get_login_token()

    @classmethod
    def terdown_class(cls):
        Comapi().sendMail("wang")
    
    @allure.story("first接口测试方法")
    def test_interface_first(self, inface_data_first):
        """接口测试方法111111"""
        num, api_purpose, host, url, method, content_type, header, param, data, check_point, except_result, skip = inface_data_first
        if skip:
            pytest.skip()
        ch = ConfigHttp()
        ch.set_config(host=host, url=url, header=header, param=param, data=data, content_type=content_type)
        
        if method.upper() == 'POST':
            r = ch.post()
        elif method.upper() == 'GET':
            r = ch.get()
        else:
            logger.error('%s %s  HTTP请求方法错误，请确认[Request Method]字段是否正确！！！' % (num, api_purpose))
            raise MethodException(method.upper())
        logger.info("响应结果:{}".format(r.text))
        logger.info("响应request：{}".format(r.request))
        except_res = strdict(except_result)

        with allure.step("校验结果"):
            cr = CheckResult(r, except_res, check_point)
            cr.check_result()
        
        allure.attach("请求结果", r.text)

if __name__ == "__main__":
    pytest.main(["testcase/test_in.py", "-s", r"--alluredir", r"D:\work\wpsspace\GodStorm的云文档\vs\interfacetest\result/xml/"])
```

pytest参数化执行测试，conftest.py,文件名字不能变，放在和用例同一目录就行

```

import pytest
from common.file_reader import ExcelReader
from common.config import DATA_PATH, Config
from common.commons import getdes


# conf = YamlReader(BASE_PATH+"/config.yaml").data[0]
# sheets = Config().get("DATA").get("sheets")

first_data = ExcelReader(DATA_PATH+"/data.xlsx", sheet="first").data
first_ids = getdes(first_data)

pinpai_data = ExcelReader(DATA_PATH+"/data.xlsx", sheet="pinpai").data
pinpai_ids = getdes(pinpai_data)

app_data = ExcelReader(DATA_PATH+"/data.xlsx", sheet="app").data
app_ids = getdes(app_data)

# def test_interface1(self, num, api_purpose, host, url, method, content_type, header, param, data, check_point, except_result, skip):
@pytest.fixture(params=first_data, ids=first_ids)
def inface_data_first(request):
    pa = request.param
    return pa['No'],pa['api_purpose'], pa['host'], pa['url'], pa['method'], pa['content_type'], pa['header'], pa['param'], pa['data'], pa['check_point'], pa['except_result'], pa['skip']

@pytest.fixture(params=pinpai_data, ids=pinpai_ids)
def inface_data_pinpai(request):
    pa = request.param
    return pa['No'],pa['api_purpose'], pa['host'], pa['url'], pa['method'], pa['content_type'], pa['header'], pa['param'], pa['data'], pa['check_point'], pa['except_result'], pa['skip']

@pytest.fixture(params=app_data, ids=app_ids)
def inface_data_app(request):
    pa = request.param
    return pa['No'],pa['api_purpose'], pa['host'], pa['url'], pa['method'], pa['content_type'], pa['header'], pa['param'], pa['data'], pa['check_point'], pa['except_result'], pa['skip']
```

测试数据结构：  
![](https://cdn.nlark.com/yuque/0/2021/png/12492743/1611199540246-f7f04295-f670-48f2-bf00-7991df610d98.png#align=left&display=inline&height=220&margin=%5Bobject%20Object%5D&originHeight=220&originWidth=1240&size=0&status=done&style=none&width=1240)

主要的就这些。  
测试报告：  
![](https://cdn.nlark.com/yuque/0/2021/png/12492743/1611199540195-2336b0b3-8c47-48c5-9eed-ca9c3e6646da.png#align=left&display=inline&height=594&margin=%5Bobject%20Object%5D&originHeight=594&originWidth=1240&size=0&status=done&style=none&width=1240)

![](https://cdn.nlark.com/yuque/0/2021/png/12492743/1611199540232-e5750399-d166-4ced-acb1-2e0d2efa78eb.png#align=left&display=inline&height=597&margin=%5Bobject%20Object%5D&originHeight=597&originWidth=1240&size=0&status=done&style=none&width=1240)
