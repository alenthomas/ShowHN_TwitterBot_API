import server
from content import index_html
def index(request, response):
    return server.send_html_handler(request, response, index_html)

# server functions

## add routes
server.add_route("get", "/", index)

## runs server
server.start_server("0.0.0.0", 8000)
