// controls and rendering

const tmpData = [
  {id: null,
  title: null,
  url: null
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
          this.props.title),
        React.createElement('a', {className: 'post-url', href:this.props.url},
          this.props.url
        )
      )
    )}
})

const Posts = React.createClass({
  propTypes: {
    postItems: React.PropTypes.array.isRequired
  },

  render: function () {
    const items = this.props.postItems
      .filter(function(item){if (item.title) {return item}})
      .map(function(item){return React.createElement(PostItem, item)})
    return (
      React.createElement('div', {className: 'PostDiv'}, items)
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


setInterval(function() {
  get("/all", function(response) {
    var jsonResponse = JSON.parse(response)
    console.log("Ajax :", jsonResponse)
    setState(jsonResponse)
  })
}, 1000*60*1)