import axios from 'axios'

export const addPassword = data => {
	return dispatch =>
	axios.post('http://localhost:4000/passwords', data)
		.then(response =>{
			return dispatch({
				type : 'ADD_PASSWORD',
				payload : data
			})
		})
		.catch(error => {
			console.log(error)
		})

}

export const fetchPasswords = () => {
	return dispatch =>
		axios.get(`http://localhost:4000/passwords/`)
		.then(response => {
			return dispatch({
				type: 'FETCH_PASSWORDS',
				payload: response.data
			})

		})
		.catch(error => {
			console.log(error)
		})
}

export const getById = id => {
	return dispatch =>
		axios.get(`http://localhost:4000/passwords/${id}`)
		.then(response => {
			return dispatch({
				type: 'GET_BY_ID',
				payload: response.data
			})
		})
		.catch(error => {
			console.log(error)
		})
}

export const deletePassword = id => {
	return dispatch =>
		axios.delete(`http://localhost:4000/passwords/${id}`)
		.then(response =>{
			return dispatch({
				type: 'DELETE_PASSWORD',
				payload: id
			})
		})
		.catch(error => {
			console.log(error)
		})
}

export const editPassword = data => {
	return dispatch =>
		axios.put(`http://localhost:4000/passwords/${data.id}`, data)
		.then(response =>{
			return dispatch({
				type: 'EDIT_PASSWORD',
				payload: data
			})
		})
		.catch(error => {
			console.log(error)
		})
}
