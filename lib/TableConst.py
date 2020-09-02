from constant import Const

const = Const()

#info表
const.INFO_NAME = "info"

#新的Info表
const.INFO_REPEAT_NAME = "info_repeat"

#数据表名
const.SECTOR_NAME = "sector"

#服务器名
const.SERVER_NAME = "server"

#sell表,卖号广告表
const.SELL_NAME = "sell_adv"

#存放榜数据表
const.INFO_TABLE = """create table if not exists info ( id integer primary key autoincrement, bang_id varchar(20) UNIQUE, name varchar(20), section_name varchar(20), service_name varchar(20), level integer, sect varchar(20), union_name varchar(20), abilities integer, equipment integer, all_abilities integer, created_at NULL DEFAULT CURRENT_TIMESTAMP, updated_at NULL DEFAULT CURRENT_TIMESTAMP, state integer default 1, rank integer default 1, mark integer default 1, advice_price default 1, follow default 1)"""

const.INFO_REPEAT = """create table if not exists info_repeat ( id integer primary key autoincrement, bang_id varchar(20), name varchar(20), section_name varchar(20), service_name varchar(20), level integer, sect varchar(20), union_name varchar(20), abilities integer, equipment integer, all_abilities integer, created_at NULL DEFAULT CURRENT_TIMESTAMP, updated_at NULL DEFAULT CURRENT_TIMESTAMP, state integer default 1, advice_price default 1)"""

#存放详情表
const.DETAIL_TABLE = """create table if not exists detail ( id integer primary key, pid integer, name varchar(10) UNIQUE )"""

#大服74专区
const.SECTOR = """create table if not exists sector ( id integer primary key, name varchar(10) UNIQUE )"""

#服务器笑看风云
const.SERVER = """create table if not exists server ( id integer primary key, pid integer, name varchar(10) UNIQUE )"""

#卖号广告表sell_adv
const.SELL = """create table if not exists sell_adv ( id integer primary key, bang_id varchar(20), title varchar(100), description text, weight integer default 1,state integer default 1, created_at NULL DEFAULT CURRENT_TIMESTAMP, updated_at NULL DEFAULT CURRENT_TIMESTAMP )"""

class TableConst:
    #get info sql
    @staticmethod
    def InfoTable():
        return const.INFO_TABLE

    #get detail sql
    @staticmethod
    def DetailTable():
        return const.DETAIL_TABLE

    #get sector sql
    @staticmethod
    def SectorTable():
        return const.SECTOR

    #get server sql
    @staticmethod
    def ServerTable():
        return const.SERVER

    #info重复表
    @staticmethod
    def InfoRepeatTable():
        return const.INFO_REPEAT

    #sell广告表
    @staticmethod
    def SellTable():
        return const.SELL

    #开始获取数据表名等
    #获取infoname
    def InfoName():
        return const.INFO_NAME

    #获取大区名
    def SectorName():
        return const.SECTOR_NAME

    #获取服务器名
    def ServerName():
        return const.SERVER_NAME
    
    #获取重复信息表
    def InfoRepeatName():
        return const.INFO_REPEAT_NAME

    #获取重复信息表
    def SellName():
        return const.SELL_NAME