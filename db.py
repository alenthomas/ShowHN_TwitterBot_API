import sqlite3

def get_ids():
    db_data = []
    conn = sqlite3.connect("showHN.db")
    cur = conn.cursor()
    for row in cur.execute("""SELECT * FROM show_hn"""):
        db_data.append(row[0])
    conn.close()
    return db_data

def get_stories():
    db_data = []
    conn = sqlite3.connect("showHN.db")
    cur = conn.cursor()
    for row in cur.execute("""SELECT * FROM show_hn"""):
        db_data.append({"id":row[0], "title": row[1], "url":row[2]})
    conn.close()
    return db_data

def insert_row(id_string, title, url, timestamp):
    conn = sqlite3.connect("showHN.db")
    cur = conn.cursor()
    cur.execute("""INSERT INTO show_hn VALUES (?, ?, ?, ?)""", (id_string, title, url, timestamp))
    conn.commit()
    conn.close()

def update_row(id_string, title, url, timestamp):
    conn = sqlite3.connect("showHN.db")
    cur = conn.cursor()
    cur.execute("""UPDATE show_hn SET title = ?, url = ? , time = ? WHERE objectid = ?""", (title, url, timestamp, id_string))
    conn.commit()
    conn.close()

def create_table_show_hn():
    conn = sqlite3.connect("showHN.db")
    cur = conn.cursor()
    cur.execute("""CREATE TABLE show_hn (
        objectid varchar(20) UNIQUE NOT NULL,
        title TEXT NOT NULL,
        url TEXT NOT NULL,
        time TEXT NOT NULL DEFAULT '00')
    """)
    conn.commit()
    conn.close()

def write_logs(msg):
    import datetime
    with open("error.log", "a") as f:
        f.write("{}--{}\n".format(msg, str(datetime.datetime.now())))
