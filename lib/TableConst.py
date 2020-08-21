from constant import Const

const = Const()

const.INFO_TABLE = """create table if not exists info ( id integer primary key autoincrement, bang_id varchar(20) UNIQUE, name varchar(20), section_name varchar(20), service_name varchar(20), level integer, sect varchar(20), union_name varchar(20), abilities integer, equipment integer, all_abilities integer, created_at NULL DEFAULT CURRENT_TIMESTAMP, updated_at NULL DEFAULT CURRENT_TIMESTAMP, state integer default 1)"""
const.DETAIL_TABLE = """create table if not exists detail ( id integer primary key, pid integer, name varchar(10) UNIQUE )"""
class TableConst:
    #get info sql
    @staticmethod
    def InfoTable():
        return const.INFO_TABLE

    #get detail sql
    @staticmethod
    def DetailTable():
        return const.DETAIL_TABLE
