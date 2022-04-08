import React from 'react';
import Layout from '../Layout/Layout';
import './App.css';

const googleSheetURL = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vTWH_GXXqIt6bzwTXaj-LMFFgOJOR8Mqj3KuZGjDpHIeIAqKNbPsthmZVTwxE9hvH0txlZyljFcCi3s/pub?gid=1701318135&single=true&output=csv';

function App() {
	return (
	  	<div className="App">
	  		<h1>Anti-money laundering recommendations</h1>
	  		<Layout sheet={googleSheetURL}></Layout>
	  	</div>
	);
}

export default App;
