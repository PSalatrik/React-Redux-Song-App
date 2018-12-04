import React from 'react';
import SongList from './song_list.js';
import SongDetail from './song_detail';

const App = () => {
	return (
			<div className="ui container grid">
				<div className="ui row">
			  		<div className="column eight wide">
			  		  	<SongList />
			 		</div>
			 		<div className="colum eight wide">
			 			<SongDetail />
			 		</div> 	
			  	</div>
			</div>
		);
};

export default App;