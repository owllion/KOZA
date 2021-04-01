import axios from 'axios'
import Cookies from 'js-cookie'

const token = Cookies.get('token')

const instance = axios.create({
    baseURL: process.env.VUE_APP_AXIOS_BASE_URL,
    headers: {
    'Authorization': token
    }   
})

instance.interceptors.response.use( res => res ,
    err => {
       if( err && err.response  ) {
           const status = err.response.status
           const originalReq = err.config

           if( status=== 401 ) {
               //get new tokens
            const refresh = Cookies.get(refreshToken)
            if(!refresh) {
                alert('Please login again!')
                this.$router.push('/')
            }
            const res = instance.post('/getNewToken', { refresh })
            
            const token = res.data.result.token
            const refreshToken = res.data.result.refreshToken

            Cookies.set('token', token)
            Cookies.set('refreshToken',refreshToken)

            originalReq.headers['Authorization'] = `Bearer ${token}`;

            //original request already have one, no need to add it again
            originalReq.baseURL = '';

            return instance(originalReq)
        }        
    }
    return Promise.reject(err)
})

export default instance