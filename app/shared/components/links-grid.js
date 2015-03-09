
var React = require('react');

var SingleLink = React.createClass({

	handleLinkClick (index) {
		this.props.handleLinkClick(index);
	},

	render () {
		var clickHandler = this.handleLinkClick.bind(this, this.props.index);
		return (
			<tr>
				<td><span className="link" onClick={clickHandler}>{this.props.data.description}</span></td>
				<td>{this.props.data.visits}</td>
			</tr>
		);
	}
});

var linksGrid = React.createClass({

	render () {
		return (
			<table className="table table-striped">
				<thead>
				<tr>
					<th>Description</th>
					<th>Visits</th>
				</tr>
				</thead>
				<tbody>
				{ this.props.links.sort((item1, item2) => item2.visits - item1.visits).map((link, index) => {
					return <SingleLink key={link.objectId} data={link} handleLinkClick={this.props.handleLinkClick} index={index} />
				}) }
				</tbody>
			</table>
		)
	}
});

module.exports = linksGrid;
