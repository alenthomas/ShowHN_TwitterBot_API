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
    postObj: React.PropTypes.object.isRequired
  },

  render: function() {
    return (
      React.createElement('div', {className: 'PostItemDiv'},
        React.createElement('p', {className: 'post-item'},
          this.props.postObj.title),
        React.createElement('a', {className: 'post-url', href:this.props.postObj.url},
          this.props.postObj.url
        )
      )
    )}
})

const Posts = React.createClass({
  propTypes: {
    postItems: React.PropTypes.array.isRequired
  },

  render: function () {
    const items = this.props.postItems.map(function(item){
      React.createElement(PostItem, item)
    })
    return (
      React.createElement('div', null, items)
    )
  }
})

const state = tmpData

function setState(shnArray) {
  const newState = state.concat(shnArray)
//  console.log("State :", newState)

  ReactDOM.render(
    React.createElement('div', {className: 'app-div'},
      HeaderElement,
      React.createElement(Posts, {postItems: newState
      }),
      FooterElement
    ), document.getElementById('react-app')
  )
}

setState(state)

get("/1", function(response) {
  var jsonResponse = JSON.parse(response)
  console.log("Ajax :", jsonResponse)
  setState(jsonResponse)
})
