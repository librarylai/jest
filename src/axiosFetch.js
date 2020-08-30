import axios from 'axios'
export function fetchAPI() {
    return axios.get('shopList').then((resp) => {
        return resp
    })
}