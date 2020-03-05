import MySQLdb

conn = MySQLdb.Connect(
            host = '127.0.0.1', #服务器地址
            port = 3306, #服务器端口号
            user = 'root', #用户名
            passwd = '123456',#密码
            db = 'orm_homework', #需要操作的表格，可以在这里强调，也可以在sql语句中单独说明
            charset = 'utf8' #编码式
            )
