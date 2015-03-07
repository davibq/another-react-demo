
var React = require('react');

var SingleLink = React.createClass({
  render: function() {
    return <div><a href={this.props.data.url}>{this.props.data.description}</a> ({this.props.data.visits})</div>;
  }
});

var linksGrid = React.createClass({

	render () {
		return (
			<div>
				{ this.props.links.map((link) => {
					return <SingleLink key={link.objectId} data={link} />
				}) }
			</div>
		)
	}
});

module.exports = linksGrid;
