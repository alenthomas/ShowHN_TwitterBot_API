// controls and rendering

const tmpData = [
  {id: '15173190',
  title: 'showHn',
  url: 'http://www.google.co.in'
  }
]

function get (url, returnFunction) {
  const xmlhttp = new XMLHttpRequest()
  xmlhttp.open("GET", url)
  xmlhttp.send()
  xmlhttp.onreadystatechange = function () {
    if(this.readyState == 4 && this.status == 200)
      returnFunction(xmlhttp.response)
  }
}

const PostItem = React.createClass({
  propTypes: {
    postTitle: React.PropTypes.string.isRequired,
    postUrl: React.PropTypes.string.isRequired
  },

  render: function() {
    return (
      React.createElement('div', {className: 'PostItemDiv'},
        React.createElement('p', {className: 'post-item'},
          this.props.postTitle),
        React.createElement('p', {className: 'post-url'},
          this.props.postUrl)
      )
    )
  }
})

ReactDOM.render(
  React.createElement('div', {className: 'app-div'},
    HeaderElement,
    React.createElement(PostItem, {
      postTitle: tmpData[0].title, postUrl:tmpData[0].url
    }),
    FooterElement
  ), document.getElementById('react-app')
)

const state = tmpData[0]

function setState(shnObj) {
  const newState = Object.assign({}, state, shnObj)
  console.log("State :", newState)

  ReactDOM.render(
    React.createElement('div', {className: 'app-div'},
      HeaderElement,
      React.createElement(PostItem, {
        postTitle: newState.title,
        postUrl: newState.url
      }),
      FooterElement
    ), document.getElementById('react-app')
  )
}

setState(state)

get("/1", function(response) {
  var jsonResponse = JSON.parse(response)
  console.log("Ajax :", jsonResponse)
  setState(jsonResponse[0])
})
