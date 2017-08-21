import time
import datetime
import json
from sqlite3 import OperationalError
from urllib import request
from twython import Twython

from db import get_ids, insert_id, create_table_show_hn, write_logs

showhn_api = "http://hn.algolia.com/api/v1/search?tags=show_hn&numericFilters=points%3E25,created_at_i%3E{}&page={}"

def get_date():
    today = datetime.datetime.today()
    timetuple = datetime.date(today.year, today.month, 1).timetuple()
    int_timestamp = int(time.mktime(timetuple))
    return int_timestamp

def get_posts(url, result={"hits":True}, data=[]):
    num = 0
    while result["hits"]:
        api = url.format(get_date(), num)
        response = request.urlopen(api)
        result = json.load(response)
        try:
            for item in result["hits"]:
                data.append(item)
        except KeyError:
            # returning result in-case of api-error;
            # result is for logging
            return [result, data]
        num = num + 1
    return [result, data]

def tweet_now(post_item):
    title = post_item["title"]
    url = post_item["url"]
    if url and url.startswith('http'):
        print(title, url, "\n")

def get_items_and_post(db_data=[]):
    error, data = get_posts(showhn_api)
    try:
        for item in data:
            if item["objectID"] not in db_data:
                tweet_now(item)
                insert_id(str(item["objectID"]))
    except KeyError:
        write_logs(error)


if __name__ == "__main__":
    db_data = []
    try:
        db_data = get_ids()
        get_items_and_post(db_data)
    except OperationalError:
        create_table_show_hn()
        get_items_and_post()
