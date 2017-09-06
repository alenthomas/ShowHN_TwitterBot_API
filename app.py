import server
def index(request, response):
    return server.send_html_handler(request, response, "Index Page")

# server functions

## add routes
server.add_route("get", "/", index)

## runs server
server.start_server("0.0.0.0", 8000)
