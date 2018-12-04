// Action Creator
export const selectSong = (song) => {
// Return an action as a javascript object with type and maybe a payload
	return {
		type: 'SONG_SELECTED',
		payload: song
	};
};

