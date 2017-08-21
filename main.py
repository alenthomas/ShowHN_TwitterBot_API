import time
import datetime
import json
from urllib import request

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


if __name__ == "__main__":
    err, data = get_posts(showhn_api)
    print(data)
