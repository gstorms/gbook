import{_ as l}from"./plugin-vue_export-helper-c27b6911.js";import{r as t,o as d,c as r,a as e,b as n,d as a,f as s}from"./app-3f278ba4.js";const o={},u=s(`<h1 id="用python做接口测试-1" tabindex="-1"><a class="header-anchor" href="#用python做接口测试-1" aria-hidden="true">#</a> 用python做接口测试（1）</h1><p>使用python3+pytest+allure+Jenkins</p><h3 id="项目结构" tabindex="-1"><a class="header-anchor" href="#项目结构" aria-hidden="true">#</a> 项目结构</h3><figure><img src="https://cdn.nlark.com/yuque/0/2021/png/12492743/1611199540280-0b27e401-9b9b-4eef-962a-008f78711468.png#align=left&amp;display=inline&amp;height=412&amp;margin=[object Object]&amp;originHeight=412&amp;originWidth=624&amp;size=0&amp;status=done&amp;style=none&amp;width=624" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>读取文件数据file_reader.py</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>import yaml
import os
from xlrd import open_workbook


class YamlReader:
    def __init__(self, yamlf):
        if os.path.exists(yamlf):
            self.yamlf = yamlf
        else:
            raise FileNotFoundError(&#39;文件不存在！&#39;)
        self._data = None

    @property
    def data(self):
        # 如果是第一次调用data，读取yaml文档，否则直接返回之前保存的数据
        if not self._data:
            with open(self.yamlf, &#39;rb&#39;) as f:
                self._data = list(yaml.safe_load_all(f))  # load后是个generator，用list组织成列表
        return self._data


class SheetTypeError(Exception):
    pass


class ExcelReader:
    &quot;&quot;&quot;
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
        ExcelReader(excel, sheet=&#39;BaiDuTest&#39;)
        &quot;&quot;&quot;

    def __init__(self, excel, sheet=&quot;版本&quot;, title_line=True):
        if os.path.exists(excel):
            self.excel = excel
        else:
            raise FileNotFoundError(&#39;文件不存在！&#39;)
        self.sheet = sheet
        self.title_line = title_line
        self._data = list()

    @property
    def data(self):
        if not self._data:
            workbook = open_workbook(self.excel)
            if type(self.sheet) not in [int, str]:
                raise SheetTypeError(&#39;Please pass in &lt;type int&gt; or &lt;type str&gt;, not {0}&#39;.format(type(self.sheet)))
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,6),c={href:"http://xn--config-255j539zfvxagel.py",target:"_blank",rel:"noopener noreferrer"},v=s(`<div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token triple-quoted-string string">&quot;&quot;&quot;
读取配置。这里配置文件用的yaml，也可用其他如XML,INI等，需在file_reader中添加相应的Reader进行处理。
&quot;&quot;&quot;</span>
<span class="token keyword">import</span> os
<span class="token keyword">from</span> common<span class="token punctuation">.</span>file_reader <span class="token keyword">import</span> YamlReader

<span class="token comment"># 通过当前文件的绝对路径，其父级目录一定是框架的base目录，然后确定各层的绝对路径。如果你的结构不同，可自行修改。</span>
<span class="token comment"># 之前直接拼接的路径，修改了一下，用现在下面这种方法，可以支持linux和windows等不同的平台，也建议大家多用os.path.split()和os.path.join()，不要直接+&#39;\\\\xxx\\\\ss&#39;这样</span>
BASE_PATH <span class="token operator">=</span> os<span class="token punctuation">.</span>path<span class="token punctuation">.</span>split<span class="token punctuation">(</span>os<span class="token punctuation">.</span>path<span class="token punctuation">.</span>dirname<span class="token punctuation">(</span>os<span class="token punctuation">.</span>path<span class="token punctuation">.</span>abspath<span class="token punctuation">(</span>__file__<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span>
<span class="token comment"># BASE_PATH = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))</span>
CONFIG_FILE <span class="token operator">=</span> os<span class="token punctuation">.</span>path<span class="token punctuation">.</span>join<span class="token punctuation">(</span>BASE_PATH<span class="token punctuation">,</span> <span class="token string">&#39;config.yaml&#39;</span><span class="token punctuation">)</span>
DATA_PATH <span class="token operator">=</span> os<span class="token punctuation">.</span>path<span class="token punctuation">.</span>join<span class="token punctuation">(</span>BASE_PATH<span class="token punctuation">,</span> <span class="token string">&#39;data&#39;</span><span class="token punctuation">)</span>
DRIVER_PATH <span class="token operator">=</span> os<span class="token punctuation">.</span>path<span class="token punctuation">.</span>join<span class="token punctuation">(</span>BASE_PATH<span class="token punctuation">,</span> <span class="token string">&#39;drivers&#39;</span><span class="token punctuation">)</span>
LOG_PATH <span class="token operator">=</span> os<span class="token punctuation">.</span>path<span class="token punctuation">.</span>join<span class="token punctuation">(</span>BASE_PATH<span class="token punctuation">,</span> <span class="token string">&#39;logs&#39;</span><span class="token punctuation">)</span>
REPORT_PATH <span class="token operator">=</span> os<span class="token punctuation">.</span>path<span class="token punctuation">.</span>join<span class="token punctuation">(</span>BASE_PATH<span class="token punctuation">,</span> <span class="token string">&#39;report&#39;</span><span class="token punctuation">)</span>
SCREENSHOTS_PATH <span class="token operator">=</span> os<span class="token punctuation">.</span>path<span class="token punctuation">.</span>join<span class="token punctuation">(</span>BASE_PATH<span class="token punctuation">,</span> <span class="token string">&#39;screenshots&#39;</span><span class="token punctuation">)</span>

<span class="token keyword">class</span> <span class="token class-name">Config</span><span class="token punctuation">:</span>
    <span class="token keyword">def</span> <span class="token function">__init__</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> config<span class="token operator">=</span>CONFIG_FILE<span class="token punctuation">)</span><span class="token punctuation">:</span>
        self<span class="token punctuation">.</span>config <span class="token operator">=</span> YamlReader<span class="token punctuation">(</span>config<span class="token punctuation">)</span><span class="token punctuation">.</span>data

    <span class="token keyword">def</span> <span class="token function">get</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> element<span class="token punctuation">,</span> index<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token triple-quoted-string string">&quot;&quot;&quot;
        yaml是可以通过&#39;---&#39;分节的。用YamlReader读取返回的是一个list，第一项是默认的节，如果有多个节，可以传入index来获取。
        这样我们其实可以把框架相关的配置放在默认节，其他的关于项目的配置放在其他节中。可以在框架中实现多个项目的测试。
        &quot;&quot;&quot;</span>
        <span class="token keyword">return</span> self<span class="token punctuation">.</span>config<span class="token punctuation">[</span>index<span class="token punctuation">]</span><span class="token punctuation">.</span>get<span class="token punctuation">(</span>element<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),p={href:"http://xn--logger-oq3l431b.py",target:"_blank",rel:"noopener noreferrer"},m=s(`<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>import logging
import time
from logging.handlers import TimedRotatingFileHandler
from common.config import Config, LOG_PATH


class Logger(object):
    def __init__(self, logger_name=&#39;framework&#39;):
        self.logger = logging.getLogger(logger_name)
        logging.root.setLevel(logging.NOTSET)
        c=Config().get(&#39;log&#39;)
        rq = time.strftime(&#39;%Y%m%d&#39;, time.localtime(time.time()))
        self.log_file_name = c.get(&#39;file_name&#39;) if c and c.get(&#39;file_name&#39;) else rq+&#39;.log&#39;  # 日志文件
        self.backup_count = c.get(&#39;backup&#39;) if c and c.get(&#39;backup&#39;) else 5  # 保留的日志数量
        # 日志输出级别
        self.console_output_level =c.get(&#39;console_level&#39;) if c and c.get(&#39;console_level&#39;) else &#39;INFO&#39;
        self.file_output_level = c.get(&#39;file_level&#39;) if c and c.get(&#39;file_level&#39;) else &#39;INFO&#39;
        # 日志输出格式
        # pattern=c.get(&#39;pattern&#39;) if c and c.get(&#39;pattern&#39;) else &#39;%(asctime)s - %(name)s - %(levelname)s - %(message)s&#39;
        pattern=c.get(&#39;pattern&#39;) if c and c.get(&#39;pattern&#39;) else &#39;%(asctime)s - %(levelname)s - %(name)s - %(message)s&#39;
        self.formatter = logging.Formatter(pattern)

    def get_logger(self):
        &quot;&quot;&quot;在logger中添加日志句柄并返回，如果logger已有句柄，则直接返回&quot;&quot;&quot;
        if not self.logger.handlers:  # 避免重复日志
            console_handler = logging.StreamHandler()
            console_handler.setFormatter(self.formatter)
            console_handler.setLevel(self.console_output_level)
            self.logger.addHandler(console_handler)

            # 每天重新创建一个日志文件，最多保留backup_count份
            file_handler = TimedRotatingFileHandler(filename=LOG_PATH + &quot;/&quot;+self.log_file_name,
                                                    when=&#39;D&#39;,
                                                    interval=1,
                                                    backupCount=self.backup_count,
                                                    delay=True,
                                                    encoding=&#39;utf-8&#39;
                                                    )
            file_handler.setFormatter(self.formatter)
            file_handler.setLevel(self.file_output_level)
            self.logger.addHandler(file_handler)
        return self.logger


logger = Logger().get_logger()
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),b={href:"http://configHttp.py",target:"_blank",rel:"noopener noreferrer"},f=s(`<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>import json
import requests
import allure
from common.config import Config
from common.logger import Logger
from common.commons import strdict, urljoin
from common.comapi import Comapi

logger = Logger(logger_name=&#39;configHttp&#39;).get_logger()


class ConfigHttp:
    def __init__(self):
        global weburl, appurl, port, timeout
        weburl = Config().get(&#39;HTTP&#39;).get(&#39;baseurl&#39;)
        appurl = Config().get(&#39;HTTP&#39;).get(&#39;appurl&#39;)
        port = Config().get(&#39;HTTP&#39;).get(&#39;port&#39;)
        timeout = Config().get(&#39;HTTP&#39;).get(&#39;timeout&#39;)
        self.headers = Config().get(&#39;HTTP&#39;).get(&#39;headers&#39;)
        self.params = {}
        self.data = {}
        self.url = None
        self.files = {}

    @allure.step(&quot;设置参数&quot;)
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
    @allure.step(&quot;设置URL&quot;)
    def set_url(self, host=None, url=None):
        &quot;&quot;&quot;set url&quot;&quot;&quot;
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



    @allure.step(&quot;设置headers&quot;)
    def set_headers(self, header):
        &quot;&quot;&quot;set header&quot;&quot;&quot;
        if header and isinstance(header, str):
            header = json.loads(header)
        self.headers.update(header)

    @allure.step(&quot;设置params&quot;)
    def set_params(self, param):
        &quot;&quot;&quot;set param&quot;&quot;&quot;
        param = strdict(param)
        # self.params = json.dumps(param).encode(&#39;utf-8&#39;)
        self.params = param

    @allure.step(&quot;设置data&quot;)
    def set_data(self, data):
        &quot;&quot;&quot;set data&quot;&quot;&quot;
        token = &quot;0f9d83580ad57479eecec9fb2faa1099fe35&quot;
        self.data = data
        dd = strdict(self.data)
        dd[&#39;token&#39;] = token
        self.data = json.dumps(dd).encode(&#39;utf-8&#39;)

    @allure.step(&quot;设置files&quot;)
    def set_files(self, file):
        &quot;&quot;&quot;set files&quot;&quot;&quot;
        self.files = file

    @allure.step(&quot;设置content_type&quot;)
    def set_content_type(self, content_type):
        &quot;&quot;&quot;set content_type&quot;&quot;&quot;
        self.headers[&#39;Content-Type&#39;] = content_type

    # 定义http的get方法
    @allure.step(&quot;执行GET方法&quot;)
    def get(self):
        &quot;&quot;&quot;GET 方法&quot;&quot;&quot;
        try:
            logger.info(&quot;GET请求URL：{}&quot;.format(self.url))
            logger.info(&quot;GET请求参数：{}&quot;.format(self.params))
            logger.info(&quot;GET请求Headers：{}&quot;.format(self.headers))
            logger.info(timeout)
            s = requests.session()
            response = s.get(self.url, params=self.params, headers=self.headers, timeout=float(timeout), verify=False)
            logger.info(&quot;GET请求返回结果：{}&quot;.format(response))
            return response
        except TimeoutError:
            logger.error(&#39;Time out!&#39;)
            return None

    # 定义http的post方法
    @allure.step(&quot;执行POST方法&quot;)
    def post(self):
        &quot;&quot;&quot;POST 方法&quot;&quot;&quot;
        try:
            logger.info(&quot;POST请求URL：{}&quot;.format(self.url))
            logger.info(&quot;POST请求data：{}&quot;.format(self.data))
            logger.info(&quot;POST请求Headers:{}&quot;.format(self.headers))
            s = requests.session()
            response = s.post(self.url, headers=self.headers, params=self.params, data=self.data, verify=False)
            logger.info(&quot;POST请求返回结果：{}&quot;.format(response))
            return response
        except TimeoutError:
            logger.error(&#39;Time out!&#39;)
            return None
        except Exception as e:
            logger.info(&quot;postcuowu&quot;)
            logger.error(e)
            return None
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>测试用例test_inter.py</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>import sys
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
logger = Logger(logger_name=&#39;Main&#39;).get_logger()


@allure.feature(&quot;接口测试&quot;)
class TestInter:
    &quot;&quot;&quot;接口测试&quot;&quot;&quot;

    @classmethod
    def setup_class(cls):
        cls.token = Comapi().get_login_token()

    @classmethod
    def terdown_class(cls):
        Comapi().sendMail(&quot;wang&quot;)
    
    @allure.story(&quot;first接口测试方法&quot;)
    def test_interface_first(self, inface_data_first):
        &quot;&quot;&quot;接口测试方法111111&quot;&quot;&quot;
        num, api_purpose, host, url, method, content_type, header, param, data, check_point, except_result, skip = inface_data_first
        if skip:
            pytest.skip()
        ch = ConfigHttp()
        ch.set_config(host=host, url=url, header=header, param=param, data=data, content_type=content_type)
        
        if method.upper() == &#39;POST&#39;:
            r = ch.post()
        elif method.upper() == &#39;GET&#39;:
            r = ch.get()
        else:
            logger.error(&#39;%s %s  HTTP请求方法错误，请确认[Request Method]字段是否正确！！！&#39; % (num, api_purpose))
            raise MethodException(method.upper())
        logger.info(&quot;响应结果:{}&quot;.format(r.text))
        logger.info(&quot;响应request：{}&quot;.format(r.request))
        except_res = strdict(except_result)

        with allure.step(&quot;校验结果&quot;):
            cr = CheckResult(r, except_res, check_point)
            cr.check_result()
        
        allure.attach(&quot;请求结果&quot;, r.text)

if __name__ == &quot;__main__&quot;:
    pytest.main([&quot;testcase/test_in.py&quot;, &quot;-s&quot;, r&quot;--alluredir&quot;, r&quot;D:\\work\\wpsspace\\GodStorm的云文档\\vs\\interfacetest\\result/xml/&quot;])
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3),g={href:"http://conftest.py",target:"_blank",rel:"noopener noreferrer"},_=s(`<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>
import pytest
from common.file_reader import ExcelReader
from common.config import DATA_PATH, Config
from common.commons import getdes


# conf = YamlReader(BASE_PATH+&quot;/config.yaml&quot;).data[0]
# sheets = Config().get(&quot;DATA&quot;).get(&quot;sheets&quot;)

first_data = ExcelReader(DATA_PATH+&quot;/data.xlsx&quot;, sheet=&quot;first&quot;).data
first_ids = getdes(first_data)

pinpai_data = ExcelReader(DATA_PATH+&quot;/data.xlsx&quot;, sheet=&quot;pinpai&quot;).data
pinpai_ids = getdes(pinpai_data)

app_data = ExcelReader(DATA_PATH+&quot;/data.xlsx&quot;, sheet=&quot;app&quot;).data
app_ids = getdes(app_data)

# def test_interface1(self, num, api_purpose, host, url, method, content_type, header, param, data, check_point, except_result, skip):
@pytest.fixture(params=first_data, ids=first_ids)
def inface_data_first(request):
    pa = request.param
    return pa[&#39;No&#39;],pa[&#39;api_purpose&#39;], pa[&#39;host&#39;], pa[&#39;url&#39;], pa[&#39;method&#39;], pa[&#39;content_type&#39;], pa[&#39;header&#39;], pa[&#39;param&#39;], pa[&#39;data&#39;], pa[&#39;check_point&#39;], pa[&#39;except_result&#39;], pa[&#39;skip&#39;]

@pytest.fixture(params=pinpai_data, ids=pinpai_ids)
def inface_data_pinpai(request):
    pa = request.param
    return pa[&#39;No&#39;],pa[&#39;api_purpose&#39;], pa[&#39;host&#39;], pa[&#39;url&#39;], pa[&#39;method&#39;], pa[&#39;content_type&#39;], pa[&#39;header&#39;], pa[&#39;param&#39;], pa[&#39;data&#39;], pa[&#39;check_point&#39;], pa[&#39;except_result&#39;], pa[&#39;skip&#39;]

@pytest.fixture(params=app_data, ids=app_ids)
def inface_data_app(request):
    pa = request.param
    return pa[&#39;No&#39;],pa[&#39;api_purpose&#39;], pa[&#39;host&#39;], pa[&#39;url&#39;], pa[&#39;method&#39;], pa[&#39;content_type&#39;], pa[&#39;header&#39;], pa[&#39;param&#39;], pa[&#39;data&#39;], pa[&#39;check_point&#39;], pa[&#39;except_result&#39;], pa[&#39;skip&#39;]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>测试数据结构：<br><img src="https://cdn.nlark.com/yuque/0/2021/png/12492743/1611199540246-f7f04295-f670-48f2-bf00-7991df610d98.png#align=left&amp;display=inline&amp;height=220&amp;margin=[object Object]&amp;originHeight=220&amp;originWidth=1240&amp;size=0&amp;status=done&amp;style=none&amp;width=1240" alt="" loading="lazy"></p><p>主要的就这些。<br> 测试报告：<br><img src="https://cdn.nlark.com/yuque/0/2021/png/12492743/1611199540195-2336b0b3-8c47-48c5-9eed-ca9c3e6646da.png#align=left&amp;display=inline&amp;height=594&amp;margin=[object Object]&amp;originHeight=594&amp;originWidth=1240&amp;size=0&amp;status=done&amp;style=none&amp;width=1240" alt="" loading="lazy"></p><figure><img src="https://cdn.nlark.com/yuque/0/2021/png/12492743/1611199540232-e5750399-d166-4ced-acb1-2e0d2efa78eb.png#align=left&amp;display=inline&amp;height=597&amp;margin=[object Object]&amp;originHeight=597&amp;originWidth=1240&amp;size=0&amp;status=done&amp;style=none&amp;width=1240" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>`,4);function h(q,k){const i=t("ExternalLinkIcon");return d(),r("div",null,[u,e("p",null,[e("a",c,[n("读取配置config.py"),a(i)])]),v,e("p",null,[e("a",p,[n("日志logger.py"),a(i)])]),m,e("p",null,[e("a",b,[n("configHttp.py"),a(i)])]),f,e("p",null,[n("pytest参数化执行测试，"),e("a",g,[n("conftest.py"),a(i)]),n(",文件名字不能变，放在和用例同一目录就行")]),_])}const T=l(o,[["render",h],["__file","用python做接口测试（1）.html.vue"]]);export{T as default};
