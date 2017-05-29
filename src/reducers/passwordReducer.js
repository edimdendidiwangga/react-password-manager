const initialState = {
	data : []
}

const fetchPasswords = (state, data) => {
	let newState = {...state, data}
	return newState
}

const addPassword = (state, data) => {
  let newState = {
	 	...state,
		data: [...state.data, data]
  }
	return newState
}

const getById = (state, data) => {
	// let newState = {
	//  	...state,
	// 	data: [...state.data, data]
  // }
	return data
}

const editPassword = (state, data) => {
	let newData = state.data.filter(item => {
		return item.id === data.id ? data : item
	})
	let newState = {
	 	...state,
		data: newData
  }
	return newState
}

const deletePassword = (state, id) => {
	let newData = state.data.filter(data => data.id != id)
	let newState = {
	 	...state,
		data: newData
  }
	return newState
}

const displayLoading = (state, bool) => {
	let newState = {
	 	...state,
		loading: bool
  }
	return newState
}

const passwordReducer = (state = initialState, { type, payload }) => {
	switch (type) {
		case 'FETCH_PASSWORDS': return fetchPasswords(state, payload)
		case 'FETCH_PASSWORDS_SUCCESS': return fetchPasswords(state, payload)
		case 'ADD_PASSWORD': return addPassword(state, payload)
		case 'EDIT_PASSWORD': return editPassword(state, payload)
		case 'GET_BY_ID': return getById(state, payload)
		case 'DELETE_PASSWORD': return deletePassword(state, payload)
		case 'DISPLAY_PASSWORD' : return displayLoading(state, payload)
			break;
		default: return state
	}
	return {
		data: []
	}

}

export default passwordReducer
