# 存储过程（mysql）

```sql
delimiter $$  #以delimiter来标记用$表示存储过程结束
create procedure pre() #创建pre()存储方法
begin                
	DECLARE i INT;  #定义i变量
	DECLARE vmiid INT;
	DECLARE vmurl VARCHAR(18);
	SET vmiid = 449262;
	SET vmurl = 'localhost/pic/0001';
	SET i=0;
	while i<10000 do
		INSERT INTO m_media (miid,mtype,murl,mpath,muid) VALUES (vmiid,1,vmurl,123123,67489712);
		SET vmiid=vmiid+1;
		SET vmurl=RIGHT(vmurl,4) +1;
		SET vmurl=CONCAT('localhost/pic/', RIGHT(concat('0000',vmurl),4));
		SET i=i+1;
	end while;
end
$$
#调用存储过程
call pre();
#删除存储过程
DROP procedure pre;

```
