import React from 'react';
import Layout from '../Layout/Layout';
import './App.css';

const googleSheetURL = 'https://docs.google.com/spreadsheets/d/12Py1FVF-tCdkhbNM9pYKayKR1lHQStNAF78soVVy10o/edit?usp=sharing';

function App() {
	return (
	  	<div className="App">
	  		<h1>Anti-money laundering recommendations</h1>
	  		<Layout sheet={googleSheetURL}></Layout>
	  	</div>
	);
}

export default App;
