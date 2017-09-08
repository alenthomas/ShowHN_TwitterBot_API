import server
import json
from content import index_html
from db import get_stories

DATA = [{'id':'14983268',
         'title':'Show HN: Shareable reasons to upgrade to Python 3',
         'url':'http://whypy3.com/',
         'time': '1502393622'
}]

def index(request, response):
    return server.send_html_handler(request, response, index_html)

def single_story(request, response):
    return server.send_json_handler(request, response, DATA)

def all_stories(request, response):
    data = get_stories()
    return server.send_json_handler(request, response, data[::-1])
# server functions

## add routes
server.add_route("get", "/", index)
server.add_route("get", "/1", single_story)
server.add_route("get", "/all", all_stories)

## runs server
server.start_server("0.0.0.0", 8000)
