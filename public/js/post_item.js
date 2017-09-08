// list_item component

function diffHours(epoch) {
  const date = new Date(epoch*1000)
  const today = new Date()
  const hoursPast = Math.abs(today - date) / (60*60*1000)
  return hoursPast.toFixed(0)
}
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
        ),
        React.createElement('p', {className: 'timestamp'},
          '(posted '+diffHours(this.props.postObj.time)+ ' hours ago)')
      )
    )}
})
