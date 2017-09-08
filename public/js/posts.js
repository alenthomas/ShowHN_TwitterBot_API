// the whole list component

const Posts = React.createClass({
  propTypes: {
    postIts: React.PropTypes.object.isRequired
  },

  render: function () {
    const thatIts = this.props.postIts
    const items = function() {
      const arr = []
      for(i in thatIts) {
        if(thatIts[i].title !== null)
          arr.push(
            React.createElement(PostItem, {postObj:thatIts[i]})
          )}
    return arr
    }()

    return (
      React.createElement('div', {className: 'PostDiv'}, items)
    )
  }
})
