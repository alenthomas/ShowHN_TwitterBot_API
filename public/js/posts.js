// the whole list component

const Posts = React.createClass({
  propTypes: {
    postItems: React.PropTypes.array.isRequired
  },

  render: function () {
    const items = this.props.postItems.filter(
      function(item){
        if (item.title !== null)
          return item
      }).map(
        function(item){
          return React.createElement(PostItem, {postObj:item})
        })

    return (
      React.createElement('div', {className: 'PostDiv'}, items)
    )
  }
})
