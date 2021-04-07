import axios from 'axios'
import Cookies from 'js-cookie'
import router from '@/router'

const token = Cookies.get('token')
console.log(token)
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
           //const originalReq = err.config

           if( status=== 401 ) {
            //get new tokens    
             const refresh = Cookies.get('refreshToken')
              if(!refresh) {
                console.log('Please login again!')
               return  router.push('/login')
            }
             return instance.post('/getNewToken', { refresh })
             .then( res=> {
                console.log(res)
                 
                //  Cookies.set('token', token)

                //  Cookies.set('refreshToken',refreshToken)

                //  originalReq.headers['Authorization'] = `Bearer ${token}`;
                // //original request already have one, no need to add it again
                //  originalReq.baseURL = '';

                //  return instance(originalReq)
             })
             .catch(err=> console.log(`Refresh error:${err}`)
             )
        }        
    }
    return Promise.reject(err)
})

export default instance