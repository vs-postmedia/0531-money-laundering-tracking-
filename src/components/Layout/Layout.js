import React, { Component } from 'react';
import Aux from '../Aux/Aux';
import Tabletop from 'tabletop';
import SummaryBox from '../SummaryBox/SummaryBox';
import ResponsiveTable from '../ResponsiveTable/ResponsiveTable';

export class Layout extends Component {
	state = {
		data: []
	};

	componentDidMount() {
		// load data from Google sheet
		Tabletop.init({
			key: this.props.sheet,
			callback: (data, tabletop) => {
				data.map(d => {
					d.recommendation_short = d.recommendation_full.split('.')[0];

					return d;
				});

				this.setState({
					data: data
				});
			},
			simpleSheet: true
		});
	}

	render() {
		return (
			<Aux>
				<SummaryBox data={this.state.data}></SummaryBox>
				<ResponsiveTable data={this.state.data}></ResponsiveTable>
			</Aux>
		);
	}
}

export default Layout;