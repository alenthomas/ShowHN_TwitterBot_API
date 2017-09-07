// list_item component

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
