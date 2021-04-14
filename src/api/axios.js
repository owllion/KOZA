import axios from 'axios'
import Cookies from 'js-cookie'
import router from '@/router'

const token = Cookies.get('token')

const instance = axios.create({
    baseURL: process.env.VUE_APP_AXIOS_BASE_URL,
    headers: {
     Authorization: token
    }   
})

instance.interceptors.response.use( res => res ,
    err => {
       if( err && err.response  ) {
           const status = err.response.status
           if( status=== 401 ) {
               console.log('Please login again!')
               router.push('/login')
            }                    
         }
         return Promise.reject(err)
    }        
    
)

export default instance