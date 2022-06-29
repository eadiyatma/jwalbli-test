import axios from 'axios'


const service = axios.create({
    baseURL: 'https://restcountries.com/v2/',
    headers: {
        'Content-Type': 'application/json'
    }
})

service.interceptors.request.use(request => {
    // string to json
    const data = JSON.parse(localStorage.getItem('user')) ?? '';
    request.headers.common['Authorization'] = `Bearer ${data.token}`
    return request
});

export default service;