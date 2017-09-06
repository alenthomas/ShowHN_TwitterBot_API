// controls and rendering

//const postitems = ['first post', 'second post', 'third post']
const postitems = 'first post'

const Post = React.createClass({
  propTypes: {
    postItem: React.PropTypes.string.isRequired
  },

  render: function() {
    return (
      React.createElement('p', {className: 'post-item'}, this.props.postItem)
    )
  }
})

ReactDOM.render(
  React.createElement('div', {className: 'app-div'},
    HeaderElement,
    React.createElement(Post, {postItem: postitems}),
    FooterElement
  ), document.getElementById('react-app')
)
