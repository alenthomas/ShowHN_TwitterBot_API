// list_item component

const PostItem = React.createClass({
  propTypes: {
    postObj: React.PropTypes.object.isRequired
  },

  render: function() {
    return (
      React.createElement('div', {className: 'PostItemDiv'},
        React.createElement('p', null, this.props.postObj.title),
        React.createElement('a', {href:this.props.postObj.url},
          this.props.postObj.url
        )
      )
    )}
})
