import axios from 'axios'
// import store from '../store'
// console.log( `store--> ${store}`)

// const token = store.getters['auth/token']
// const refreshToken =store.getters['auth/refreshToken']

const instance = axios.create({
    baseURL:'http://localhost:5000/api',
    //'Authorization': token
    // }
})

// instance.interceptors.response.use( res => res ,
//     err => {
//        if( err && err.response  ) {
//            const status = err.response.status
//            const originalReq = err.config

//            if( status=== 401 ) {
//                //get new tokens
//                store.dispatch('auth/refresh', refreshToken);

//                originalReq.headers['Authorization'] = `Bearer ${token}`;

//                //original request already have one, no need to add it again
//                originalReq.baseURL = '';

//                return instance(originalReq)
//            }        
//        }
//        return Promise.reject(err)
//     })

export default instance