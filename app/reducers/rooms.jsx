/*---------- INITIAL STATE ----------*/
const initialState = [];

/*---------- ACTION TYPES ----------*/
const ADD_ROOM = 'ADD_ROOM'

/*---------- ACTION CREATORS ----------*/

export const addRoom = room => ({
	type: ADD_ROOM,
	room
});

/*---------- THUNK CREATORS ----------*/

/*---------- REDUCER ----------*/

export default (state = initialState, action) => {
	let newState = Object.assign(state)

	switch (action.type) {
		case ADD_ROOM:
			newState.push(action.room);
			return newState;
		default: return state;
	}
};