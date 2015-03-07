
var React = require('react'),
	parseAccess = require('../services/parse-access'),
	isFrontend = (typeof window !== 'undefined');

var GridComponent = require('./links-grid');

module.exports = React.createClass({

	getInitialState: function() {
		return {
			links: []
		};
	},

	componentWillMount () {
		if (!isFrontend) {
			this.setState({
				links: this.props.data.results
			});
		} else {
			this.setState({
				links: window.obj
			});
		}
	},

	render () {
		return (
		<div className="container main-container">
			<GridComponent links={this.state.links}/>
		</div>
		);
	}
});