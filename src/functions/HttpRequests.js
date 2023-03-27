import axios from "axios"

// Get the API URL from the .env file
const {REACT_APP_API_URL} = process.env

// Set the header for the PATCH request
const header = {headers: { 'Content-type': 'application/json; charset=UTF-8' }}

// Fetch all songs 
export async function fetchAllSongs(setResponse) {
    const response = await axios.get(`${REACT_APP_API_URL}/songs`)
    setResponse(response.data)
}

// Fetch one song by id
export async function fetchOneSong(id, setResponse) {
    const response = await axios.get(`${REACT_APP_API_URL}/songs/${id}`)
    setResponse(response.data)
}


// add a song
export async function addSong(data, setResponse) { 
    const reponse = await axios.post(`${REACT_APP_API_URL}/songs`, data)
    setResponse(reponse.data)
}

// update a song
export async function updateSong(id, data, setResponse) { 
    const reponse = await axios.patch(`${REACT_APP_API_URL}/songs/${id}`, data, header)
    setResponse(reponse.data)
}

// delete a song
export async function deleteSong(id, setResponse) { 
    const response = await axios.delete(`${REACT_APP_API_URL}/songs/${id}`)
    setResponse(response.data)
}

