
# pytest-xdist分布式测试的原理

### 前言

- xdist的分布式类似于**一主多从**的结构，master机负责下发命令，控制slave机；slave机根据master机的命令执行特定测试任务
- 在xdist中，主是master，从是workers

 

### 大致原理

1. xdist会产生一个或多个workers，workers都通过master来控制
1. 每个worker负责执行完整的测试用例集，然后按照master的要求运行测试，而master机不执行测试任务

 

# pytest-xdist分布式测试的流程

## 第一步：创建worker

1. master会在总测试会话（test session）开始前产生一个或多个worker
1. master和worker之间是通过execnet和网关来通信的
1. 实际编译执行测试代码的worker可能是本地机器也可能是远程机器

 

## 第二步：收集测试项用例

1. 每个worker类似一个迷你型的pytest执行器
1. worker会执行一个完整的test collection过程**【收集所有测试用例的过程】**
1. 然后把测试用例的ids返回给master
1. master是不会执行任何测试用例集的

### 注意
所以为什么上面通过分布式测试的结果截图是没有输出用例的print内容，因为主机并不执行测试用例，pycharm相当于一个master  
 

## 第三步：master检测workers收集到的测试用例集

1. master接收到所有worker收集的测试用例集之后，master会进行一些完整性检查，以确保所有worker都收集到一样的测试用例集（包括顺序）
1. 如果检查通过，会将测试用例的ids列表转换成简单的索引列表，每个索引对应一个测试用例的在原来测试集中的位置
1. 这个方案可行的原因是：所有的节点都保存着相同的测试用例集
1. 并且使用这种方式可以**节省带宽，**因为master只需要告知workers需要执行的测试用例**对应的索引**，而不用告知完整的测试用例信息

 

## 第四步：测试用例分发
--dist-mode选项  
**each：**master将完整的测试索引列表分发到每个worker  
**load：**master将大约25%的测试用例以轮询的方式分发到各个worker，剩余的测试用例则会等待workers执行完测试用例以后再分发  
 

### 注意
可以使用  pytest_xdist_make_scheduler  这个hook来实现自定义测试分发逻辑。  
 

## 第五步：测试用例的执行

1. workers 重写了   pytest_runtestloop  ：pytest的默认实现是循环执行所有在test session这个对象里面收集到的测试用例
1. 但是在xdist里, workers实际上是等待master为其发送需要执行的测试用例
1. 当worker收到测试任务, 就顺序执行  pytest_runtest_protocol 
1. 值得注意的一个细节是：workers 必须始终保持至少一个测试用例在的任务队列里, 以兼容  pytest_runtest_protocol(item, nextitem)   hook的参数要求，为了将 nextitem传给hook
1. worker会在执行最后一个测试项前等待master的更多指令
1. 如果它收到了更多测试项, 那么就可以安全的执行   pytest_runtest_protocol  , 因为这时nextitem参数已经可以确定
1. 如果它收到一个 "shutdown"信号, 那么就将 nextitem 参数设为 None, 然后执行 pytest_runtest_protocol

 

## 第六步：测试用例再分发（--dist-mode=load）

1. 当workers开始/结束执行时，会把测试结果返回给master，这样其他pytest hook比如：  pytest_runtest_protocol  和  pytest_runtest_protocol  就可以正常执行
1. master在worker执行完一个测试后，基于测试执行时长以及每个work剩余测试用例综合决定是否向这个worker发送更多的测试用例

 

## 第七步：测试结束

1. 当master没有更多执行测试任务时，它会发送一个“shutdown”信号给所有worker
1. 当worker将剩余测试用例执行完后退出进程
1. master等待所有worker全部退出
1. 然此时仍需要处理诸如  pytest_runtest_logreport  等事件

> 转载：[https://www.cnblogs.com/poloyy/p/12703290.html](https://www.cnblogs.com/poloyy/p/12703290.html)

