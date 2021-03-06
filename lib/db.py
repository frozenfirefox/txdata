import sqlite3

"""
数据库连接驱动
"""
class Db:
    #sql初始化，使用哪个sqlite
    def __init__(self, file):
        self.file = file
        try:
            self.connect = sqlite3.connect(file)
        except Exception as e:
            return e.message

    #查询根据sql
    def execute(self, query, all = 'first'):
        try:
            curl = self.connect.cursor()
            curl.execute(query)
            if all == 'first':
                return curl.fetchone()
            else:
                return curl.fetchall()
        except Exception as e :
            return e

    #查询，根据条件
    def select(self, table, where = '', fields = '*', page = 1, pageSize = 10, order = 'id desc', having = '', group = ''): 
        try:
            curl = self.connect.cursor()
            if fields == '':
                fields = '*'
            
            sql = "select "+fields+" from "+table

            #where            
            if where != '':
                sql = sql+' where '+where

            #group
            if group != '':
                sql = sql+' group by '+group

            #having
            if having != '':
                sql = sql+' having '+having
                
            #order
            if order != '':
                sql = sql+' order by '+order

            if page > 0:
                #取全部
                sql = sql+' limit '+str(pageSize)+' offset '+str((page - 1)*pageSize)
            print(sql)
            curl.execute(sql)   
            return curl.fetchall()
        except Exception as e:
            return e.message

    #更新数据根据条件
    def update(self, table, setting, where):
        try:
            curl = self.connect.cursor()
            # print("update "+table+" set "+setting+"  where "+where)
            curl.execute("update "+table+" set "+setting+"  where "+where)   
            self.connect.commit()
            return '更新成功'
        except Exception as e:
            return e.message
    
    #删除数据
    def delete(self, table, where):
        try:
            curl = self.connect.cursor()
            return curl.execute("delete from  ? where ?", table, where)   
        except Exception as e:
            return e.message

    #获取统计数
    def count(self, table, where):
        try:
            curl = self.connect.cursor()
            sql = 'select id as num from '+table
            if where != '':
                sql = sql+' where '+where
            print(sql)
            curl.execute(sql) 
            results = curl.fetchall()
            return len(results)
        except Exception as e:
            return e.message

    #插入数据
    def insert(self, table, insert, value):
        try:
            curl = self.connect.cursor()
            # print(table)
            # print(insert)
            # print(value)
            sql = "insert into "+table+" ("+insert+") values ( "+value+" )"
            print(sql)
            curl.execute(sql)   
            self.connect.commit()
            return curl.execute("select last_insert_rowid() from "+table).fetchone()[0] 
        except Exception as e:
            return e.message

    #创建数据表
    def createTable(self, sql):
        try:
            curl = self.connect.cursor()
            curl.execute(sql)
            self.connect.commit()
            return 'create table success!'
        except Exception as e:
            return e.message

    #清空表
    def truncTable(self, table):
        deleteSq1 = "delete from '"+table+"'"
        clearSq1 = "update sqlite_sequence SET seq = 0 where name ='"+table+"'"
        curl = self.connect.cursor()
        curl.execute(deleteSq1) 
        curl.execute(clearSq1) 

    #关闭链接        
    def close(self):
        try:
            self.connect.close()
            return 'close connection success'
        except Exception as e:
            return e.message

        
    
