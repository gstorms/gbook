# annoconda-创建虚拟环境-删除虚拟环境


### 1、确认环境
首先在所在系统中安装Anaconda。可以打开命令行输入`conda -V`检验是否安装以及当前conda的版本。

### 2、conda常用的命令

- `conda list`查看安装了那些包。
- `conda env list` 或`conda info -e`查看当前存在哪些虚拟环境
- `conda update conda`检查更新当前conda

### 3、创建Python虚拟环境
使用`conda create -n your_env_name python=x.x`（3.6/3.7等）命令创建Python版本为x.x、名字为your_env_name的虚拟环境。  
your_env_name文件可以在Anaconda安装目录envs文件夹下找到。

### 4、使用激活（或切换不同Python版本）的虚拟环境
打开命令行输入`python --version`可以检查当前Python的版本  
使用如下命令即可激活你的虚拟环境  
Linux：`source activate your_env_name`  
Windows: `activate your_env_name`  
这时再使用`python --version`可以检查当前Python办不办是否为想要的。

### 5、对虚拟环境中安装额外的包
使用命令`conda install -n your_env_name [package]`即可安装package到your_env_name中

### 6、关闭虚拟环境（即从当前环境退出返回使用PATH环境中的默认Python版本）
使用如下命令：  
Linux：`source deactivate`  
Windows: `deactivate`

### 7、删除虚拟环境
使用命令`conda remove -n your_env_name --all`

### 8、删除环境中的某个包
使用命令`conda remove --name your_env_name package_name`
