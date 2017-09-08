# Post tweets for new ShowHN
filters [ShowHN](https://news.ycombinator.com/shownew) articles posted within the month and with points greater than 25
tweets these from a twitter account

## API used
 - https://hn.algolia.com/api

## Other available APIs
 - https://newsapi.org/hacker-news-api
 - https://github.com/HackerNews/API
 - https://hacker-news.firebaseio.com/v0/item/14817671.json?print=pretty

## Running with React Front-end on localhost
### Uses
 - uses [react.js](https://github.com/alenthomas/ShowHN_TwitterBot_API/blob/master/public/js/react.min.js) and [react-dom.js](https://github.com/alenthomas/ShowHN_TwitterBot_API/blob/master/public/js/react-dom.min.js)
 - [magicserver-python3](https://github.com/geekskool/magicserver-python3/blob/babf75b028971c0678e0a777f25b80f30a865c40/server.py)
### Steps
 - comment out the [`tweet_now`](https://github.com/alenthomas/ShowHN_TwitterBot_API/blob/master/main.py#L55) line
 - run `python main.py` (this will create a sqlite DB in your filesystem and update it with the lastest posts)
 - run `python app.py` (this will run a server in your localhost in port 8000)
 - goto http://127.0.0.1:8000
