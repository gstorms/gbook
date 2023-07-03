# Excel将以列内容按照奇偶行显示

使用公式`=INDIRECT("a"&ROW(A1)*2)&""`显示偶数  
使用公式`=INDIRECT("a"&ROW(A1)*2-1)&""`显示奇数  
ROW(A1):获取A1的行号  
INDIRECT(str):获取str单元格的内容，str=‘A1’、'A2'等  
INDIRECT（"a"&2）：获取A2单元格的内容
