// controls and rendering

const tmpData = [
  {id: '15173190',
  title: 'showHn',
  url: 'http://www.google.co.in'
  }
]

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
