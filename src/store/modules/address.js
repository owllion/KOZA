import axios from 'axios'

const state = {
    //使用者目前所選縣市，此為預設
    currCity:'台北市',
    //目前所選行政區
    currDistrict: '北投區',
    //api回傳的縣市、行政區資訊
    location: [],
    
}

const getters = { 
    cityList: state => state.location.map( item => item.name),
    districtList: state =>state.location.find(item=> item.name === state.currCity)?.districts || []
    //districtList: state => state.location.filter(item=> {
    //  if(item.name ===state.currCity) {
    //      return item.name ===state.currCity
    //  }
    //  }).map(d=> d.districts)
   
}

const actions = { 
   async getLocations({commit}) {
       const api = 'https://raw.githubusercontent.com/kurotanshi/mask-map/master/raw/area-location.json'

       const { data }  = await axios.get(api)        

       commit('setAreaLoction', data)
       commit('auth/setLocation', data , {root: true})
   }
}

const mutations = {
      setcurrCity(state, value) {
          state.currCity = value;
      },
      setcurrDistrict(state, value) {
          state.currDistrict = value;
      },
      setAreaLoction(state,value) {
          state.location = value
      }
      
}

export default {
    state,
    getters,
    actions,
    mutations,
    namespaced: true, 
}
