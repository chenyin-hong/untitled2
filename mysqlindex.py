from settting import conn
import os

def index():
    cursor = conn.cursor()
    try:
        cursor.execute("select * from student")
        data = cursor.fetchall()
        print(data)
    except:
        print('未查询到数据')
    finally:
        print("执行结束……")


index()
a = 2792
b = 2762
c = a+b
print(9800-c)

