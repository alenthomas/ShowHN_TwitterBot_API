import sqlite3

def get_ids():
    db_data = []
    conn = sqlite3.connect("showHN.db")
    cur = conn.cursor()
    for row in cur.execute("""SELECT * FROM show_hn"""):
        db_data.append(row[0])
    conn.close()
    return db_data

def insert_id(id_string):
    conn = sqlite3.connect("showHN.db")
    cur = conn.cursor()
    cur.execute("""INSERT INTO show_hn VALUES ({})""".format(id_string))
    conn.commit()
    conn.close()

def create_table_show_hn():
    conn = sqlite3.connect("showHN.db")
    cur = conn.cursor()
    cur.execute("""CREATE TABLE show_hn (objectid varchar(20) UNIQUE NOT NULL)""")
    conn.commit()
    conn.close()

def write_logs(msg):
    import datetime
    with open("error.log", "a") as f:
        f.write("{}--{}\n".format(msg, str(datetime.datetime.now())))
