import axios from 'axios'

const API = (method = "get", endpoint = '/', data = null) => {
    const token = JSON.parse(localStorage.getItem('acceptToken'));
    return axios({
        method: method,
        url: `https://backendmegastore.herokuapp.com${endpoint}`,
        data: data,
        headers: {
            "Content-type": "Application/json",
            "Token": `Beare ${token}`
        },
    })
}
export default API