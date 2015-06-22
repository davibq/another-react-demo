
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
		if (isFrontend) {
			console.log('From FE');
			this.setState({
				links: window.obj
			});
		} else {
			console.log('From BE');
			this.setState({
				links: this.props.data.results
			});
		}
	},

	handleLinkClick (arrayIndex) {
		this.setState({
			links: this.state.links.map((item, index) => {
				if (arrayIndex === index) {
					item.visits++;
				}
				return item;
			})
		});

		window.open(this.state.links[arrayIndex].url, '_blank')
	},

	render () {
		return (
		<div className="container main-container">
			<GridComponent handleLinkClick={this.handleLinkClick} links={this.state.links}/>
		</div>
		);
	}
});